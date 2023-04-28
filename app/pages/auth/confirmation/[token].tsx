import {useMutation, useQuery} from '@apollo/client'
import { useEffect, useContext, useState } from 'react';
import {CHANGE_STATUS, CHECK_INFO} from '../../../apollo/auth'

import { useRouter } from 'next/router';
// import { DELETE_POST } from "../../apollo/posts";
import Swal from 'sweetalert2';

export default function Confirmation(props) {
  const router = useRouter()
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
  const {data, loading, error} = useQuery(CHECK_INFO)
  const [userId, setUserId] = useState("")
  const [confirmationCode, setConfirmationCode] = useState("")
  const [changeStatus, {error: changeStatursError, loading: changeStatursLoading}] = useMutation(CHANGE_STATUS, {
    onError: (error) => {
          Toast.fire({
              icon: 'error', title:`Incorrect information`});
    },

    onCompleted: (data) => {
      Toast.fire({
          icon: 'success',
          title: `Email confirmation`
        })
    } ,
    variables: {changeStatusId: userId, confirmationCode: confirmationCode}
  })
  // useEffect(() => {
  //   if (error || !props) return      Toast.fire({
  //             icon: 'error', title:`Incorrect information`});
  // }, [error, props])
  useEffect(() => {
    if (error || !props) {
      Toast.fire({
        icon: 'error',
        title: 'Incorrect information'
      });
    }
  }, [error, props]);
  
  

  useEffect(() => {
    const [part1Str, part2Str] = props?.token?.split('-');
    setConfirmationCode(part1Str)
    setUserId(part2Str)
    setTimeout(changeStatus, 500)
  }, [props])
  


  return (
    <div style={{height: "10000px", color: 'black', paddingTop: "200px"}}>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { token } = context.params
  return {
    props: {token}, 
}
}
