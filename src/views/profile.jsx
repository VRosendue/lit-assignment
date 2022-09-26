import React from 'react'
import { useResolvedPath } from "react-router-dom"
import ProfileActions from "../Profile/ProfileActions"
import withAuth from "../hoc/withAuth"
import ProfileHeader from "../Profile/ProfileHeader"
import { useUser } from "../store/UserStore"

const Profile = () => {

    const { user } = useUser()

    return (
        
        <body>
            <ProfileHeader username={user.username} />
        </body>
        

    )
}
export default withAuth(Profile)