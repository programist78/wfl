import { useQuery } from '@apollo/client'
import Part1 from './Part1'
import Part2 from './Part2'
import {GET_ALL_POSTS} from '../../apollo/blog'
export default function BlogCom() {
  const {data, loading, error} = useQuery(GET_ALL_POSTS)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading</h1>
  console.log(data.getAllPosts[0].images[0])
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Part1 lastpost={data.getAllPosts[0]}  />
        <Part2 loading={loading} info={data.getAllPosts}/>
    </div>
  )
}
