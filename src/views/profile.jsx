import withAuth from "../hoc/withAuth"
import ProfileHeader from "../Profile/ProfileHeader"
import ProfileActions from "../Profile/ProfileActions"
import SignsHistory from "../Profile/SignsHistory"
import { useUser } from "../store/UserStore"

const Profile = () => {
    
    const { user } = useUser()
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username= {user.username} />
        <ProfileActions />
        <SignsHistory signs={ user.signs}/>
        </>
    )
}
export default withAuth(Profile)