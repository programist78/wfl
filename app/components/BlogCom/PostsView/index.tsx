import React from 'react';
import Link from 'next/link';
import styles from './PostsView.module.scss'
// import { PostSkeleton } from './Skeleton';
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react';
import { PostSkeleton } from './Skeleton';
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



  return (
    <div ref={ref}>
            {inView ?
      (
        <>
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