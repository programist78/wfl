import Image from 'next/image';
import styles from '../../Auth/GetStarted2/GetStarted.module.scss'
import { useMutation } from '@apollo/client'
import {REGISTER_FIRST} from '../../../apollo/auth'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import GoogleAuth from '../../Google-Auth';

export default function LoginAdmin() {
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
                <p className={styles.title}>Hello admin</p>
                <p className={styles.text}>Enter your details 
to log into the system</p>
                <div className={styles.forms}>
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
                    <div className={styles.form}>
                        <p>Password</p>
                        <input
            name="password"
            type="text"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
          <div className="invalid-feedback">{errors.password?.message}</div>
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
          <Image src="/3d-icon.svg" alt='logo' width={253} height={253} className={styles.dicon}/>
            <Image src="/UserDashboard_sign_in.webp" width={1095} height={615} alt='.' className={styles.dashboard}/>
        </div>
        </div>
    </div>
  )
}
