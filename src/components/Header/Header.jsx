import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header_cont}>
      <ul className={css.nav_list}>
        <li>
          <NavLink className={css.link} to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to={'/catalog'}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to={'/favorites'}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
