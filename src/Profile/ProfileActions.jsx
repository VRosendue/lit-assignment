
import { Link } from "react-router-dom"
import {storageRead} from "../utils/storage"
import { STORAGE_KEY_USER} from "../const/storageKeys"
import {useUser} from "../store/UserStore"
import {storageDelete} from "../utils/storage"
import '../../src/App.css';

const ProfileActions = () => {
    
    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Logout forreal?")){   
        storageDelete(STORAGE_KEY_USER)
        setUser(null)
        }
    }

    return (
        <ul>
        <li><button onClick={handleLogoutClick}>Logout</button> </li>
        </ul>
    )
}
export default ProfileActions