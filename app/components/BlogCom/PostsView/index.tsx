import React from 'react';
import Link from 'next/link';
import styles from './PostsView.module.scss'
// import { PostSkeleton } from './Skeleton';
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react';
import { PostSkeleton } from './Skeleton';
import { useAppSelector } from 'hooks/type';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from 'apollo/blog';
import Swal from 'sweetalert2';
const PostView = ({
  id,
  title,
  text,
  image,
  isLoading,
  createdAt,
  backerror
}) => {
  const [hasError, setHasError] = useState(false);

  function handleImageError() {
    setHasError(true);
  }
  const { ref, inView } = useInView({
    treshold: 0.5,
    triggerOnce:true
  })

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

  const { admin } = useAppSelector((state) => state.admin);   
const [deletePost, {loading}] = useMutation(DELETE_POST, {
  onCompleted: (data) => {
    Toast.fire({
        icon: 'success',
        title: `Deleted`
      })
  },
  variables: {deletePostId: id}
})



  return (
    <div ref={ref}>
            {inView ?
      (
        <>
            {admin && <button  className={`${styles.title} ${styles.delete}`} style={{position: "absolute", color: "red"}} onClick={() => deletePost()}>Delete</button>}
        <Link prefetch={false} href={`/blog/${id}`}>
    <div className={styles.back} key={id} >

    {hasError ? (
        <img
        className={styles.image}
          // src={backerror}
          alt={title}
        />
      ) : (
        <img
        className={styles.image}
          src={image}
          alt={title}
          onError={handleImageError}
        />
      )}
      <div className={styles.description}>
          <p className={styles.title}>
            {title}
          </p>
          <p className={styles.text}>
            {text}
          </p>
          </div>
    </div>
    </Link>
    </>)
     :
     (<PostSkeleton />)
     }
    </div>
  );
};

export default PostView