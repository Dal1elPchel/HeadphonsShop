import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Bage from '@/pages/Bage/Bage'
import Main from '@/pages/Main/Main'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import styles from './App.module.scss'

export function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />
        <div className={styles.page}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/bage" element={<Bage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
