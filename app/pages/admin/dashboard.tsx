import AdminDashboardCom from 'components/Admin/Dashboard'
import { useAppSelector } from 'hooks/type'
import { useRouter } from 'next/router'

export default function AdminDashboard() {
  const router = useRouter()
  const {admin} = useAppSelector((state) => state.admin)
  {!admin && router.push("/")}
  return <AdminDashboardCom />
}
