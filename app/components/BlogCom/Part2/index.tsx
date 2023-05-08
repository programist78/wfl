import { useEffect, useState } from 'react'
import styles from './Part2.module.scss'
import Blog from '../Blog'
import PostsView from '../PostsView'
import { useQuery } from '@apollo/client'
import { GET_TAGS } from 'apollo/blog'

export default function Part2(props) {
    const {data: tagsData, loading:  loadingTags, error: errorData} = useQuery(GET_TAGS)
    const [searchText, setSearchText] = useState("");
    const [choose, setChoose] = useState("")
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("");
    // const [tags, setTags] = useState("")
    console.log(props)
    useEffect(() => {
      setLoading(props.loading)
    }, [props.loading])
    useEffect(() => {
        setData(props.info)
      }, [props.info])
      console.log(tagsData?.getTags[0]);
      const filtered = data?.filter(obj => {
        return (
            obj.title.toLowerCase().includes(searchText?.toLowerCase()) 
        && 
        obj?.tags?.some(tag => tag.toLowerCase().includes(choose?.toLowerCase()))
        );
      });
      console.log(data)
  return (
    <div className={styles.preback}>
        <div className={styles.back}>
            <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className={styles.search}/>
            <div className={styles.filters}>
                <div className={styles.underline}/>
                    <button onClick={() => setChoose("")} className={choose == "" && styles.choose}>View all</button>
                    {(loadingTags ? [...Array(3)] :tagsData.getTags).map((obj, key) => 
                    loadingTags ? 
                    (<h1>Loading</h1>) :
                    (
                    <button onClick={() => setChoose(obj)} className={choose == obj && styles.choose}>{obj}</button>
                    ),
                    )}
                    </div>
            <Blog />
        <div value="1"> 
            <div className={styles.back2}>
            {(loading ? [...Array(3)] :filtered).map((obj, key) => 
             loading ? 
             (<PostsView     key={key} 
                 myKey={key} isLoading={true} />) :
            (
            <PostsView
                key={key} 
                myKey={key}
                id={obj.id}
                title={obj.title}
                text={obj.text}
                image={obj.images[0]}
                createdAt={obj.createdAt}
            />
            ),
            )}
        </div>
        </div>
        </div>
    </div>
  )
}
