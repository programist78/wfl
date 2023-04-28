import Image from 'next/image'
import styles from './GetStarted.module.scss'
import { useMutation } from '@apollo/client'
import {REGISTER_FIRST} from '../../../apollo/auth'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import GoogleAuth from '../../Google-Auth';

export default function GetStartedCom2() {
  const { data: session } = useSession()
    const validationSchema = Yup.object().shape({
        fullname: Yup.string()
        .required('Fullname is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
      });
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        width: "400px",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        customClass: {
            container: 'custom-swal-font',
            title: 'custom-swal-font',
            content: 'custom-swal-font',
            confirmButton: 'custom-swal-font',
          },
      })
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });      
      const [data, setData] = useState()

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [registerUser, {loading}] = useMutation(REGISTER_FIRST, {
        
        // update(proxy, { data: {registerUser: userData}}){
        //     context.login(userData)
        //     router.push('/');
        // },
        onError: (error) => {
            Swal.fire(`Incorrect data: ${error}`);
            // Обработка ошибок вручную
            if (error = "Email already exists") {
                Toast.fire({
                    icon: 'error',
                    title:`Email already exist`,
                });
            } else {
                Toast.fire({
                    icon: 'error', title:`Incorrect information`});
            }
          },

          onCompleted: (data) => {
            Toast.fire({
                icon: 'success',
                title: `Confirm your email ${data.register1000User}`
              })
          } ,
        
        // variables: {about: {email: dataEmail, password: dataPassword}},
        variables: { email, fullname, confirmedEmailGet: false  },
    });
    const onSubmit = data => {
        setEmail(data.email)
        setFullname(data.fullname)
        // setData(data)
        setTimeout(registerUser, 500)
      };
  return (
    <div className={styles.back}>
        <div className={styles.part1}>
            <form className={styles.big_form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Become a member</p>
                <p className={styles.text}>Enter your details to see when the platform will start</p>
                <div className={styles.forms}>
                    <div className={styles.form}>
                        <p>Full Name</p>
                        <input 
                    name="fullname"
                    type="text"
                     {...register('fullname')}
                     className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}/>
                     <div className="invalid-feedback">{errors.fullname?.message}</div>
                    </div>
                    <div className={styles.form}>
                        <p>Email</p>
                        <input
            name="email"
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
          <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <button className={styles.button}>Join now</button>
                </div>
                <div className={styles.between}>
                    <div />
                    <p>Or join with</p>
                    <div />
                </div>
                <GoogleAuth />
                {/* <button className={styles.sign_google}>
                    <Image src="/google.svg" alt='google' width={30} height={30}/>
                    <p>Sign up with Google</p>
                </button> */}
            </form>
        </div>
        <div className={styles.prepart2}>
        <div className={styles.part2}>
            <Image src="/UserDashboard_sign_in.webp" width={1095} height={615} alt='.'/>
        </div>
        </div>
    </div>
  )
}
