import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header_cont}>
      <div className="container">
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
      </div>
    </header>
  );
};

export default Header;
