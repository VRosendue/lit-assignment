import React from 'react'
import { NavLink } from "react-router-dom"
import ProfileActions from '../../Profile/ProfileActions';
import { useUser } from "../../store/UserStore"
import "../Navbar/Navbar.css";


const Navbar = () => {
    
    const { user } = useUser()

    return (
        <header>
        <nav>
            { user !== null && 
                <ul>
                    <li>
                        <NavLink to="/translation">Translate</NavLink>
                    </li>
                    <li>
                        <NavLink to="profile">Profile</NavLink>
                    </li>
                    <li>
                    <ProfileActions logout={user.logout} />
                    </li>
                </ul>
            }
        </nav>
        </header>
        
    )
}
export default Navbar