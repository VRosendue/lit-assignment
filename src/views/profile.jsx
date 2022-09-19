import { useResolvedPath } from "react-router-dom"
import ProfileActions from "../Profile/ProfileActions"

const Profile = () => {

    const { user } = useUser()

    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username} />
        <ProfileActions logout={logout} />
        <ProfileOrderHistory orders={user.orders}/>
        </>
    )
}
export default withAuth(Profile)