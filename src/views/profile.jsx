import withAuth from "../hoc/withAuth"
import ProfileHeader from "../Profile/ProfileHeader"
import ProfileActions from "../Profile/ProfileActions"
import TranslationsHistory from "../Profile/TranslationsHistory"
import { useUser } from "../store/UserStore"

const Profile = () => {
    
    const { user } = useUser()
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username= {user.username} />
        <ProfileActions />
        <TranslationsHistory translations={ user.translations}/>
        </>
    )
}
export default withAuth(Profile)