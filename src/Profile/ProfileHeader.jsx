import "../Profile/ProfileHeader.css";

const ProfileHeader = ({ username }) => {
    return (
        <div className="profileHeader">
        <div className="profileHeaderPicture">
            <img className="logo3" src="Splash.svg" alt=""></img>
            <img className="logo2" src="Logo.png" alt=""></img>
            
        </div>
   
        <div className="headerFont">
        <h1> Lost in Translation </h1>
    
    <h4> Hello, welcome back {username}</h4>
   
   </div>
   </div>
    )
}
export default ProfileHeader