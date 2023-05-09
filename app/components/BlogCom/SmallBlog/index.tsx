import { useQuery } from '@apollo/client'
import styles from './SmallBlog.module.scss'
import { GET_ALL_POSTS } from 'apollo/blog'
import Loader from 'components/Loader'

export default function SmallBlog() {
    const {data, loading, error} = useQuery(GET_ALL_POSTS)
  return (
                    <div className={styles.back}>
            {(loading ? [...Array(3)] :data.getAllPosts).map((obj, key) => 
             loading ? 
             (<Loader />) :
            (
                <div className={styles.blog}>
                    <img src={obj.images}/>
                    <div className={styles.blur}>
                    <p>{obj.title}</p>
                    </div>
                </div>
            ),
            )}
    </div>
  )
}
