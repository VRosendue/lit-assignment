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
        
        <ProfileHeader username={user.username} />
        
        <TranslationsHistory translations={ user.translations}/>  
        </>
    )
}
export default withAuth(Profile)