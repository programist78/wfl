import NavBar from './NavBar'
import Header from './Head'
import Footer from './Footer'


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
        <Footer />
      </>
      </>
  )
}
