import "../Profile/ProfileHeadercss.css";

const ProfileHeader = ({ username }) => {
    return (
        <div className="profileHeader">
            <div className="profileHeaderPicture">
                <img className="logo2" src="Logo.png"></img>
            </div>
       
        <div>
        </div>
        <h4> Hello, welcome back {username}</h4>
       
       </div>
    )
}
export default ProfileHeader