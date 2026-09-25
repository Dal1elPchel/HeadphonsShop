import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <Link className={styles.brand} to="/">
      QPICK
    </Link>
    <nav className={styles.links} aria-label="Ссылки в подвале">
      <Link to="/">Главная</Link>
      <Link to="/bage">Корзина</Link>
    </nav>
    <span className={styles.copyright}>© QPICK</span>
  </footer>
)

export default Footer
