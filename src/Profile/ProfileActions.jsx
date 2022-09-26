import React from 'react'
import { STORAGE_KEY_USER} from "../const/storageKeys"
import {useUser} from "../store/UserStore"
import {storageDelete} from "../utils/storage"

const ProfileActions = () => {
    
    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Logout forreal?")){   
        storageDelete(STORAGE_KEY_USER)
        setUser(null)
        }
    }

    return (
        

        <button onClick={handleLogoutClick}>Logout</button>

        
    )
}
export default ProfileActions