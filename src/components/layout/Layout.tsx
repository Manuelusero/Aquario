import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
