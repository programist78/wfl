import CreateBlogCom from 'components/Admin/Createpost'
import { useAppSelector } from 'hooks/type'
import { useRouter } from 'next/router'

export default function CreateBlog() {
    const router = useRouter()
    const {admin} = useAppSelector((state) => state.admin)
    {!admin && router.push("/")}
  return <CreateBlogCom />
}
