import React from 'react'
import ProfileActions from "../Profile/ProfileActions"
import withAuth from "../hoc/withAuth"
import ProfileHeader from "../Profile/ProfileHeader"
import TranslationsHistory from "../Profile/TranslationsHistory"
import { useUser } from "../store/UserStore"

const Profile = () => {

    const { user } = useUser()

    return (
        
        <body>
        <h1>Profile</h1>
        <ProfileHeader username={user.username} />
        <TranslationsHistory translations={ user.translations}/>  
        
        </body>
        
    )
}
export default withAuth(Profile)