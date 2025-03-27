import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from 'clsx';


const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() { 

    return (
        <div>
            <nav>
                <NavLink to='/' className={getLinkStyles}>Home</NavLink>
                <NavLink to='/movies' className={getLinkStyles}>Movies</NavLink>
            </nav>
        </div>
    );
};