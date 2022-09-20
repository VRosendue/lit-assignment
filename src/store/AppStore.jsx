import UserProvider from "./UserStore"

const AppStore = (props) => {

    
    return (
        <UserProvider>
        {props.children}
        </UserProvider>
    )



}
export default AppStore