import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {loginUser} from '../../api/user'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm()

    const [ loading, setLoading] = useState(false)

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username)
        console.log('Error: ', error)
        console.log('User: ', user)
        setLoading(false);
        
    };
    console.log(errors);


    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if(errors.username.type === "required") {
            return <span>Username is required to continue</span>

        }
        if(errors.username.type === "minLength") {
            return <span>Username is too short (atleast 3 chars)</span>

        }
    })()
    return (
        <>
           <h2> What's your name?</h2>
           <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username"> Username</label>
                    <input type="text"
                    placeholder="Example... VincDue"
                    { ...register("username", usernameConfig) } />
                    {errorMessage}
                </fieldset>
            
                <button type="submit" disabled={ loading }>continue</button>

                { loading && <p>Logging in...</p>}
            </form>

        </>
    )
}
export default LoginForm