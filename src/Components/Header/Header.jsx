import { NavLink } from 'react-router-dom';
import estilos from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <menu className={estilos.menu}>
          <li>
            <NavLink className={estilos.navLink} to="/" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink className={estilos.navLink} to="contato">
              Contato
            </NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
