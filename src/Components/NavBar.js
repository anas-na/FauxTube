import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <NavLink to={'/HomePage'}>Home</NavLink>
            <NavLink to={'/AboutPage'}>About</NavLink>
        </nav>
    )
}

export default NavBar; 