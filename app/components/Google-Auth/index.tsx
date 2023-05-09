import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import styles from './Google.module.scss'
import Swal from "sweetalert2"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useMutation } from "@apollo/client"
import {REGISTER_FIRST} from '../../apollo/auth'
import { useAppDispatch, useAppSelector } from "hooks/type"
import { addUsertoLocal } from "redux/slices/auth"

export default function GoogleAuth() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { auth } = useAppSelector((state) => state.auth)
  const { data: session } = useSession();
  const [register_first, {error, loading}] = useMutation(REGISTER_FIRST, {
    onCompleted: (data) => {
      Toast.fire({
          icon: 'success',
          title: `Your email was successfully saved ${data.register1000User}`
        }),
    dispatch(addUsertoLocal(data))
    },
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
    variables: { email: session?.user?.email, fullname: session?.user?.name,confirmedEmailGet: true  }
  })

  useEffect(() => {
    if (session && !auth) {
      register_first()
    }
  }, [session && auth]);
  console.log(auth)
  
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
        confirmButton: 'custom-swal-font',
      },
  })
  return (
    <>
      <button onClick={() => signIn()} className={styles.button}>
        <Image src="/google.svg" width={30} height={30} className={styles.img} alt="Google"/>
        <p>Continue with Google</p>
        </button>
    </>
  )
}