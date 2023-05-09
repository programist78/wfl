import {GET_ONE_POST} from '../../apollo/blog'
import { useQuery } from '@apollo/client';
import React from 'react';
import { apolloClient } from "../_app";
import styles from "../../styles/Post.module.scss"
// import { DELETE_POST } from "../../apollo/posts";
import { useEffect } from "react";
import { useApolloClient } from "@apollo/client/react/hooks/useApolloClient.js";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {RiDeleteBin6Fill} from 'react-icons/ri'
import Image from "next/image";
import dynamic from 'next/dynamic';
const SmallBlog = dynamic(() => import('components/BlogCom/SmallBlog'), {
  loading: () => <p>Loading...</p>,
});
export default function Posts({ queryId }) {
  // const { auth } = useSelector((state) => state.auth);
  const router = useRouter()
  const { data, loading, error } = useQuery(GET_ONE_POST, {
    variables: {getPostId: queryId}
  });
  const apolloClient = useApolloClient();
  // const [deletePost] = useMutation(DELETE_POST);
  // function onClickDelete() {
  //     deletePost({ variables: {deletePostId: queryId} }).then(() => {
  //       router.push('/')
  //       apolloClient.resetStore();
  //     });
  //     if (loading) return <h1>Loading</h1>
  //     if (error || !data) return <h1>Error</h1>
  // }
  return (
    <div style={{    display: "flex",
      flexDirection: "column",
      alignItems: "center", width: "100vw"}}>
    <div className={styles.back}>
          <img
              className={styles.image}
              src={data?.getPost.images}
              alt="webXwizard"
          />
          <p className={styles.title}>{data?.getPost.title}</p>
          <div className={styles.part2}>
            <div className={styles.shares}>
              <p>Share:</p>
              <div className={styles.line}/>
              <div className={styles.share}>
              <Image src="/facebook.svg" alt='' width={45} height={45}/>
              </div>
              <div className={styles.share}>
              <Image src="/instagram.svg" alt='' width={45} height={45}/>
              </div>
              <div className={styles.share}>
              <Image src="/twitter.svg" alt='' width={45} height={45}/>
              </div>
              <div className={styles.share}>
              <Image src="/linkedin.svg" alt='' width={45} height={45}/>
              </div>
              <div className={styles.share}>
              <Image src="/link.svg" alt='' width={45} height={45}/>
              </div>
            </div>
            <div className={styles.text}>{data?.getPost.text}</div>
            <div className={styles.other}>
              <p>You may also like:</p>
              <div className={styles.second_line} />
              <SmallBlog />
            </div>
          </div>
    </div>
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const queryId = query.id
  await apolloClient.query({
    query: GET_ONE_POST,
    variables: { id: queryId }
  });
  return {
    props: {queryId}
  }
}
