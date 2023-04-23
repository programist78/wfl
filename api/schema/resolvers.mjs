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
                    throw new ValidationError("Invalid email given -getUser");
                }
                return user
        },
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
            const {title, text, price} = post
            const postcreate = new Post({ title, text,price, images })
            await postcreate.save()
            return postcreate;
        },
        updatePost: async (parent,{ post, id }) => {
            const {title, texten, textru, textua, episode} = post
            const postcreate = await Post.findByIdAndUpdate(
                id,
                {title, texten, textru, textua, episode},
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
            const user = new User({ fullname, email, passwordHash, role:"USER",avatarUrl:url, confirmedEmail: "PENDING", confirmationCode, balance: "0", subscriberMail: subscribeInfo})
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
        changeStatus: async (parent,{id, confirmationCode}, args) => {
            const user = await User.findById(
                {_id:id}
                );
                if (!user) {
                    throw new ValidationError("Invalid email given- changestatus");
                }
                const isValidPass = (confirmationCode == user.confirmationCode);
            if (!isValidPass) {
                throw new ValidationError("Invalid confirmationCode given!");
            }
            const newuser = await User.findByIdAndUpdate(
                id,
                {status: "ACTIVE"},
                { new: true }
            );
            return newuser
        },
        forgotPassword: async (parent,{id, confirmationCode, password}, args) => {
            const user = await User.findById(
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
    }
}

export default resolvers