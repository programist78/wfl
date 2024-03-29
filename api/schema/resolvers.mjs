import User from '../models/User.js'
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { fileRenamer } from "../helpers/FileRenamer.js";
import { issueAuthToken, serializeUser } from "../helpers/index.js";
import path from "path";
import fs from  'fs'
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import Post from "../models/Post.js";
import PostComment from '../models/PostComment.js';
import AnswerComment from '../models/AnswerComment.js';
import { ValidationError } from 'apollo-server-koa';
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport';
import FirstUser from '../models/FirstUser.js';
import Tag from '../models/Tag.js';
const __dirname = path.resolve();
dotenv.config()

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
          //post-query
        getAllPosts: async () => {
            const sortQuery = { createdAt: -1 };
            return await Post.find().sort(sortQuery)
        },
        getPost: async(_parent, {id}, _context, _info) => {
            return await Post.findById(id)
        },
        //post-comment-query
        getPostComments: async(_parent, {id}, _context, _info) => {
            const post = await Post.findById(id)
            const list = await Promise.all(
                post.comments.map((comment) => {
                    return PostComment.findById(comment)
                }),
                )
            return list
        },
        //auth
        getUser: async(_parent, {email}, _context, _info) => {
            const user = await User.findOne(
                {email}
                );
                if (!user) {
                    throw new ValidationError("User undefined");
                }
                return user
        },
        getCount: async () => {
            const count = await User.count();
            return count;
        },
        getTags: async() => {
            const sortQuery = { createdAt: -1 };
            let tag = await Tag.find({}, {_id: 0, name: 1})
            console.log(tag)
            const tagNames = tag.map((tag) => tag.name);
            console.log(tagNames);
            return tagNames
        }
    },
    
    Mutation: {
        //post-mutation
        createPost: async (parent,{ image, post }) => {
            let images = [];
            
            for (let i = 0; i < image.length; i++) {
            const { createReadStream, filename, mimetype } = await image[i];
            const stream = createReadStream();
            const assetUniqName = fileRenamer(filename);
            let extension = mimetype.split("/")[1];
            const pathName = path.join(__dirname,   `./uploads/${assetUniqName}.${extension}`);
            await stream.pipe(fs.createWriteStream(pathName));
            const urlForArray = `${process.env.HOST}/${assetUniqName}.${extension}`;
            images.push(urlForArray);
            }
            const {title, text,tags} = post
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                Tag.findOne({ name: tag }, (err, existingTag) => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  if (!existingTag) {
                    Tag.create({ name: tag }, (err, newTag) => {
                      if (err) {
                        console.error(err);
                        return;
                      }
                      console.log(`Создан новый тег: ${newTag.name}`);
                    });
                  }
                });
              }
            const postcreate = new Post({ title, text, images, tags })
            await postcreate.save()
            return postcreate;
        },
        updatePost: async (parent,{ post, id, image }) => {
            let images = [];
            
            for (let i = 0; i < image.length; i++) {
            const { createReadStream, filename, mimetype } = await image[i];
            const stream = createReadStream();
            const assetUniqName = fileRenamer(filename);
            let extension = mimetype.split("/")[1];
            const pathName = path.join(__dirname,   `./uploads/${assetUniqName}.${extension}`);
            await stream.pipe(fs.createWriteStream(pathName));
            const urlForArray = `${process.env.HOST}/${assetUniqName}.${extension}`;
            images.push(urlForArray);
            }
            const {title, text} = post
            const postcreate = await Post.findByIdAndUpdate(
                id,
                {title, text, images},
                { new: true }
            );
            return postcreate
        },
        deletePost: async (parent, args, context, info) => {
            const { id } = args
            await Post.findByIdAndDelete(id)
            return "Post deleted"
        },
         //post-comment
         PostcreateComment: async (parent, args, context, info) => {
            const { id } = args
            const { comment, user } = args.about
            if (!comment)
            return res.json({ message: 'Комментарий не может быть пустым' })
            const newComment = new PostComment({ comment, user })
            await newComment.save()
            const post = await Post.findByIdAndUpdate(
                id,
                {$push: { comments: newComment._id }},
                { new: true }
            );
            return post
        },
        PostdeleteanswerComment: async (parent, args, context, info) => {
            const { id } = args
            await PostComment.findByIdAndDelete(id)
            return "Post deleted"
        },
        PostanswerComment: async (parent, args, context, info) => {
            const { id } = args
            const { comment, user } = args.about
            if (!comment)
            return res.json({ message: 'Комментарий не может быть пустым' })
            const newComment = new AnswerComment({ comment, user })
            await newComment.save()
            const newsendComment = {comment: newComment.comment, user: newComment.user}
            const post = await PostComment.findByIdAndUpdate(
                id,
                {$push: { answers: newsendComment}},
                { new: true }
            );
            return post
        },
        //auth
        registerUser: async(parent, args, context, info) => {
            try {
                const {email, password, fullname, subscriberMail, confirm_password} = args.about
                const {id} = args
                if (!email || !password || !fullname ) {
                    throw new ValidationError("Enter all the data required !");
                }
                if (password.length < 8) {
                    throw new ValidationError("Password too simple !");
                }
                if (password !== confirm_password){
                    throw new ValidationError("Subtracted password is different !");
                }
                let subscribeInfo = false 
                if (subscriberMail == true){
                    subscribeInfo = subscriberMail 
                }
            const already_exsist = await User.findOne({ email });
            if (already_exsist) {
            throw new ValidationError("Email already exists");
            }
            const url = "http://localhost:4000/defaultperson.png"
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            let math = Math.random() * (43564389374833)
            let confirmationCode = Math.round(math)
            const user = new User({ fullname, email, passwordHash, role:"USER",avatarUrl:url, confirmedEmail: false, confirmationCode, balance: "0", subscriberMail: subscribeInfo})
            let result = await user.save()
            result = await serializeUser(result);
            //transporter
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth:{
                        api_key:process.env.SENDGRID_APIKEY,
                    }
                })
            )
            let mailOptions = { from: process.env.FROM_EMAIL, to: user.email, subject: 'Account Verification Link', text: 'Hello '+ user.fullname +',\n\n' + 'Please verify your account by clicking the link: \nhttp://localhost:3000/' + 'auth/confirmation/' + confirmationCode + '\n\nThank You!\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { 
                return console.log(err)
            }})
            const token = await issueAuthToken({email, role: user.role});
            console.log(token)
             //end trans
            return {token, user}
            } catch (err) {
                throw (err.message);
            } 
            
            
        },
        register1000User: async(parent, {email, fullname, confirmedEmailGet}, context, info) => {
            try {
                if (!email || !fullname ) {
                    throw new ValidationError("Enter all the data required !");
                }
            const already_exsist = await FirstUser.findOne({ email });
            if (already_exsist) {
            throw new ValidationError("Email already exists");
            }
            let math = Math.random() * (43564389374833)
            let confirmationCode = Math.round(math)
            let confirmedEmail = false
            if (confirmedEmailGet === true) {
                confirmedEmail = true
            }            
            console.log(`${confirmedEmailGet} -confirmedEmailGet`)
            console.log(`${confirmedEmail} -confirmedEmail`)
            const user = new FirstUser({ fullname, email, role:"USER",confirmedEmail, confirmationCode})
            let result = await user.save()
            result = await serializeUser(result);
            //transporter
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth:{
                        api_key:process.env.SENDGRID_APIKEY,
                    }
                })
            )
            let mailOptions = { from: process.env.FROM_EMAIL, to: user.email, subject: 'Account Verification Link', html: `
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email confirmation</title>
        </head>
        <body>
            <div class="back">
              <div class="header">
                <img src="./logo.svg" alt="WFL"/>
                <p class="logo_text">Wealth Free Life</p>
              </div>
              <div class="part_info">
                <p class="title">Сonfirm your mail</p>
                <p class="text">Dear, ${user.fullname}</p>
                <p class="text">We would like to thank you for registering on our website. To confirm your email address, please click on the button below:</p>
                <a href="http://localhost:3000/auth/confirmation/${user.confirmationCode}-${user.id}">Confirm mail</a>              
                <p>We appreciate your participation and are ready to provide you with our assistance at any time. If you have any questions or problems, please contact us and we will try to help you as soon as possible.</p>
              </div>
              <div class="footer">
                <p class="text_footer">Copyright © 2023 Wealth Free Life</p>
                <p class="text_footer">A ConsenSys Formation</p>
              </div>
            </div>
            <style>
              .back {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #0e6e6e;
                font-family: Arial, sans-serif;
                padding: 20px;
              }
              .header {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                flex-direction: column;
                justify-content: center;
              }
              .header img {
                width: 75px;
                height: 75px;
              }
              .logo_text {
                font-size: 150%;
                font-weight: 600;
                color: #ffffff;
                
              }
              .part_info {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
                margin-bottom: 20px;
              }
              .title {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 10px;
              }
              button {
                background-color: #56CBBD;
                color: #ffffff;
                padding: 10px 20px;
                border-radius: 5px;
                border: none;
                font-size: 16px;
                margin-bottom: 20px;
                cursor: pointer;
              }
              button:hover {
                background-color: #9100d9;
              }
              .text_footer {
                text-align: center;
                font-size: 12px;
                color: #999999;
                margin-top: 20px;
              }
            </style>
        </body>
            `
        };
        // if (confirmedEmailGet === false){
            console.log("Sending...")
            transporter.sendMail(mailOptions, function (err) {
                if (err) { 
                return console.log(err)
            }})
        // }
            return user.email
            } catch (err) {
                throw (err.message);
            } 
            
            
        },
        sendConfirmedEmail: async(parent, {email}, context, info) => {
            try {
                if (!email) {
                    throw new ValidationError("Enter all the data required !");
                }
            const user = await User.findOne({ email });
            if (!user) {
            throw new ValidationError("Email undefined");
            }
            if (user.confirmedEmail == true){
                throw new ValidationError("You already confirmed the email");
            }
            //transporter
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth:{
                        api_key:process.env.SENDGRID_APIKEY,
                    }
                })
            )
            let mailOptions = { from: process.env.FROM_EMAIL, to: email, subject: 'Account Verification Link', text: 'Hello '+ user.fullname +',\n\n' + 'Please verify your account by clicking the link: \nhttp://localhost:3000/' + 'auth/confirmation/' + user.confirmationCode + "-" + user.id + '\n\nThank You!\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { 
                return console.log(err)
            }})
             //end trans
            return {user}
            } catch (err) {
                throw (err.message);
            } 
            
            
        },
        changeStatus: async (parent,{id, confirmationCode}, args) => {
            const user = await FirstUser.findById(
                {_id:id}
                );
                if (!user) {
                    throw new ValidationError("Invalid email given- changestatus");
                }
                const isValidPass = (confirmationCode == user.confirmationCode);
            if (!isValidPass) {
                throw new ValidationError("Invalid confirmationCode given!");
            }
            const newuser = await FirstUser.findByIdAndUpdate(
                id,
                {confirmedEmail: true},
                { new: true }
            );
            return newuser
        },
        forgotPassword: async (parent,{id, confirmationCode, password}, args) => {
            const user = await User.findOne(
                {_id:id}
                );
                if (!user) {
                    throw new ValidationError("Invalid email given- changestatus");
                }
                const isValidPass = (confirmationCode == user.confirmationCode);
            if (!isValidPass) {
                throw new ValidationError("Invalid confirmationCode given!");
            }
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            const newuser = await User.findByIdAndUpdate(
                id,
                {passwordHash},
                { new: true }
            );
            return newuser
        },

        forgotPasswordSend: async (parent,{email}, args) => {
            const user = await User.findOne(
                {email}
                );
                if (!user) {
                    throw new ValidationError("Invalid email given- forgot password");
                }
        const transporter = nodemailer.createTransport(
            sendgridTransport({
                auth:{
                    api_key:process.env.SENDGRID_APIKEY,
                }
            })
        )
        let mailOptions = { from: process.env.FROM_EMAIL, to: user.email, subject: 'password recovery', text: 'Hello '+ user.fullname +',\n\n' + 'Please verify your account by clicking the link: \nhttp://localhost:3000/' + 'forgot-password/' + user.confirmationCode + "&" + user.id + '\n\nThank You!\n' };
        transporter.sendMail(mailOptions, function (err) {
            if (err) { 
            return console.log(err)
        }})
            return "Send!"
        },
        loginUser: async (_, args, context, info) => {
            const { email, password } = args.about
            // const {id} = args
            // console.log(id)
            const user = await User.findOne(
            {email}
            );
            if (!user) {
                throw new ValidationError("Invalid email given - loginUser");
            }
            const isValidPass = await bcrypt.compare(password, user.passwordHash);
            if (!isValidPass) {
                throw new ValidationError("Invalid password given!");
            }
            let result = await user.save()
            result = await serializeUser(result);
            // let token = "sgshhshs"
            const token = await issueAuthToken({email, role: user.role});
            return {user, token}
        },
        subscribeToNewsletter: async (_, args, context, info) => {
            const email = args.email
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASS
                }
            })     
            let mailOptions = { from: process.env.FROM_EMAIL, to: process.env.FROM_EMAIL, subject: 'Subscribe To Newsletter Email', text: 'Hello '+ email};    
            transporter.sendMail(mailOptions, function (err) {
                if (err) { 
                return console.log(err)
            }})   
            return "Email send!"
        },
        sendAboutStart: async(_, args, context) => {
            const transporter = nodemailer.createTransport(
              sendgridTransport({
                auth:{
                  api_key:process.env.SENDGRID_APIKEY,
                }
              })
            );
          
            // Получаем список всех пользователей
            const users = await User.find();
          
            // Отправляем email для каждого пользователя
            try {
              await Promise.all(users.map(async (user) => {
                let mailOptions = { 
                  from: process.env.FROM_EMAIL, 
                  to: user.email, 
                   subject: 'Platform Launch Notification',
                   html: `
                     <head>
                       <meta charset="UTF-8" />
                       <title>Platform Launch Notification</title>
                       <style>
                         body {
                           font-family: Arial, sans-serif;
                           background-color: #f1f1f1;
                         }
                         .container {
                           width: 80%;
                           margin: auto;
                           padding: 20px;
                           background-color: #ffffff;
                           border-radius: 10px;
                           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                         }
                         h1 {
                           color: #1d3557;
                           font-size: 32px;
                           font-weight: bold;
                           margin-bottom: 20px;
                         }
                         p {
                           font-size: 16px;
                           line-height: 1.5;
                           color: #4a4a4a;
                           margin-bottom: 20px;
                         }
                         .button {
                           display: inline-block;
                           background-color: #457b9d;
                           color: #ffffff;
                           font-size: 18px;
                           font-weight: bold;
                           padding: 10px 20px;
                           text-decoration: none;
                           border-radius: 5px;
                           margin-top: 20px;
                         }
                         .security-icon {
                           display: block;
                           margin: 0 auto;
                           width: 100px;
                           height: 100px;
                           background-image: url('http://localhost:4000/instagram.png');
                           background-size: contain;
                           background-repeat: no-repeat;
                           background-position: center;
                           margin-top: 20px;
                         }
                       </style>
                     </head>
                     <body>
                       <div class="container">
                         <h1>Platform Launch Notification</h1>
                         <p>Dear User, ${user.fullname}</p>
                         <p>We are pleased to announce that our platform is launching soon. We have implemented state-of-the-art security measures to ensure the safety of your data.</p>
                         <div class="security-icon"></div>
                         <p>Stay tuned for updates and details on how to access the platform.</p>
                         <a href="wfl.com" class="button">Open</a>
                       </div>
                     </body>                   
               `
           };
                await transporter.sendMail(mailOptions);
              }));
              return "Send!"
            } catch (error) {
              console.error(error);
              throw new Error("Failed to send emails to all users");
            }
          }
    }
}

export default resolvers