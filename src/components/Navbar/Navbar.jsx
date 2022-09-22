import { NavLink } from "react-router-dom"
import { useUser } from "../../store/UserStore"
import "../Navbar/Navbar.css";


const Navbar = () => {
    
    const { user } = useUser()

    return (
        
        
         <nav>
            <ul>
                {/* <li>Sign translations</li> */}
            </ul>

            { user !== null && 
                <ul>
                    <li>
                        <NavLink to="/translate">Translate</NavLink>
                    </li>
                    <li>
                        <NavLink to="profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
     
    )
}
export default Navbar