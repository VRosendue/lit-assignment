import React from 'react'
import "../Profile/ProfileHeader.css";
import TranslationsHistory from './TranslationsHistory';
import { useUser } from "../store/UserStore"

const ProfileHeader = ({ username }) => {
    const { user } = useUser()
    return (
        <div className="profileHeader">
        <h1 className="profileTag">Profile Overview</h1>
        <div className="profileHeaderPicture">
            <img className="logo2" src="Logo-Hello.png" alt=""></img>
            
        </div>
   
        <div className="headerFont">
        <h2> Hello {username}, welcome back!</h2>
        <TranslationsHistory translations={ user.translations}/>  
   </div>
   </div>
    )
}
export default ProfileHeader