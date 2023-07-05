import AdminDashboardCom from 'components/Admin/Dashboard'
import { useAppSelector } from 'hooks/type'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const [windowSize, setWindowSize] = useState(0);
  const router = useRouter()
  const {admin} = useAppSelector((state) => state.admin)
  useEffect(() => {
    function handleResize() {
      setWindowSize(
        window.innerWidth,
      );
    }

    // Добавляем обработчик события при монтировании компонента
    window.addEventListener('resize', handleResize);

    // Вызываем обработчик события сразу после монтирования компонента
    handleResize();

    // Удаляем обработчик события при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  console.log(windowSize)
  if (windowSize < 1024) {
    return <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "black"}}>
      <h1>Please use your computer to access this page</h1>
      
      </div>
  } else {
    return <AdminDashboardCom />
  }
  // {!admin && router.push("/")}
  
}
