import React from 'react'
import { NavLink } from "react-router-dom"
import ProfileActions from "../../Profile/ProfileActions";
import { useUser } from "../../store/UserStore"
import "../Navbar/Navbar.css";


const Navbar = () => {
    
    const { user } = useUser()

    return (
        <header>

        <div className="naverstest">   
        <nav className="navers">
        
            {/* <ul>
                <li>Sign translations</li>
            </ul> */}

            { user !== null && 
                
                <div className="naverstest2">
                    <span className="hehe1"><NavLink to="/translation"><i className="fa fa-hand-paper-o"></i>
                    Translate</NavLink></span>
                    
                    
                    <span className="hehe"><NavLink to="profile"><i className="fa fa-user-circle-o"></i>
                    Profile</NavLink></span>
                    
                    
                    <span className="hehe2"><i className="fa fa-key" id="logout-key"></i>
                        <ProfileActions logout={user.logout} /></span>
                    
            
                </div>

            }
          
           </nav>
           </div> 
        </header>
        
    )
}
export default Navbar