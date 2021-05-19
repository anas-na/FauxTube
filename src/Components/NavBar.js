import { NavLink } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <NavLink to={'/'}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='logo'/></NavLink>
            <NavLink to={'/HomePage'}>Home</NavLink>
            <NavLink to={'/AboutPage'}>About</NavLink>
        </nav>
    )
}

export default NavBar; 