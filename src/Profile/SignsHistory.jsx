import ProfileSignsHistoryItem from "./ProfileSignsHistoryItem"

const SignsHistory = ({ signs }) => {

    const signList = signs.map(signs => <ProfileSignsHistoryItem key = { signs } sign = { signs } />)
    return (
        <section>
        <h4>Sign History</h4>
        <ul>

            {signList}

        </ul>

        </section>
        
    )
}
export default SignsHistory