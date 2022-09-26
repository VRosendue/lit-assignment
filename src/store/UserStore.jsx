import React from 'react'
import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";


//Creating context out of UserStore const
const UserStore = createContext()

export const useUser = () => {
    return useContext(UserStore)
}

//We use provider to manage state
const UserProvider = (props) => {


    const [user, setUser] = useState(storageRead( STORAGE_KEY_USER ) )

    const state = {
        user,
        setUser
    }
    return (
        <UserStore.Provider value= { state }>
        {props.children}

        </UserStore.Provider>
    )
}
export default UserProvider