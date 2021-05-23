import { NavLink } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <NavLink to={'/'}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='logo'/></NavLink>
            <NavLink to={'/'}><h2>Home</h2></NavLink>
            <NavLink to={'/AboutPage'}><h2>About</h2></NavLink>
        </nav>
    )
}

export default NavBar; 