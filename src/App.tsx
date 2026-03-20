import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import FAQ from './pages/FAQ/FAQ'

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
