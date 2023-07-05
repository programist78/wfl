import NavBar from './NavBar'
import Header from './Head'
import Footer from './Footer'
import { useContext } from 'react'
import { AuthContext } from 'hooks/AuthContext'
import { useAppDispatch, useAppSelector } from 'hooks/type'
import { addAdmintoLocal } from 'redux/slices/roles/admin'
import { addPeopletoLocal } from 'redux/slices/roles/people'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch()
  const { user, logout, authredux } = useContext(AuthContext);
  console.log(user)
  if (user?.user?.role == "ADMIN") {
    dispatch(addAdmintoLocal(user?.user?.role))
}
if (user?.user?.role == "USER") {
    dispatch(addPeopletoLocal(user?.user?.role))
}
const { auth } = useAppSelector((state) => state.auth);    
const { admin } = useAppSelector((state) => state.admin);    
const { people } = useAppSelector((state) => state.people);
console.log(`auth: ${auth}`)
console.log(`admin: ${admin}`)
console.log(`people: ${people}`)
  return (
    <>
      {/* <Header /> */}
      <>
        <NavBar />
        {children}
        <Footer />
      </>
      </>
  )
}
