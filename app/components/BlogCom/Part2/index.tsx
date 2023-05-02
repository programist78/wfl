import { useState } from 'react'
import styles from './Part2.module.scss'
import Blog from '../Blog'

export default function Part2() {
    const [searchText, setSearchText] = useState("")
  return (
    <div className={styles.preback}>
        <div className={styles.back}>
            <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className={styles.search}/>
            <div className={styles.filters}>
                <div className={styles.underline}/>
                    <p>View all</p>
            </div>
            <Blog />
        <div value="1"> 
            <div className={styles.back}>
            {(loading ? [...Array(3)] :data.getAllPosts).map((obj, key) => 
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
                // image={obj.images ? obj.images[0] : ''}
                image={obj.images[0]}
                // backerror={backerror}
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
