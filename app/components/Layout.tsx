import NavBar from './NavBar'
import Header from './Head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <>
        <NavBar />
        {children}
      </>
      </>
  )
}
