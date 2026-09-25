import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <NavLink className={styles.brand} to="/" aria-label="QPick — главная">
      QPICK
    </NavLink>
    <nav className={styles.navigation} aria-label="Основная навигация">
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        to="/"
        end
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        to="/bage"
      >
        Корзина
      </NavLink>
    </nav>
  </header>
)

export default Header
