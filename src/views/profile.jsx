import React from 'react'
import { useResolvedPath } from "react-router-dom"
import ProfileActions from "../Profile/ProfileActions"
import withAuth from "../hoc/withAuth"
import ProfileHeader from "../Profile/ProfileHeader"
import TranslationsHistory from "../Profile/TranslationsHistory"
import { useUser } from "../store/UserStore"

const Profile = () => {

    const { user } = useUser()

    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username} />
        <ProfileActions logout={user.logout} />
        <TranslationsHistory translations={ user.translations}/>  
        </>
    )
}
export default withAuth(Profile)