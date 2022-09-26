import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {loginUser} from '../../api/user'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../store/UserStore'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import "../Login/LoginForm.css";

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
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    const [ loading, setLoading] = useState(false)
    const [ apiError, setApiError ] = useState(null)

     useEffect(() => {
        if(user !== null) {
            navigate('/profile')
        }
     }, [user, navigate])

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)

        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
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
          <header>
            <h2> Lost in Translation</h2>
        </header>
        <div className="titletest">
                    <h3>Interactive translator app</h3>
                    <h4>Translate your words or senctences into sign language</h4>
                    <h4>Get Started</h4>
                    </div>
           

           <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset className='hidden'>
                    
                  
                    
                    
                    <img className='firstPicture' image src="Logo.png" alt="Logo"/>
                    <img className='secondPicture' image src="Splash.svg" alt="splash"/>
                    <label htmlFor="username"></label>
                    <div className="usernameBox">
                        <i className="fa fa-keyboard-o"></i>
                        <span className="usernameInput"></span>
                        
                        
                    
                       <input type="text"
                       placeholder="What's your name?" className="textInput"
                       { ...register("username", usernameConfig) } />
                       {errorMessage}
                       <button className='continueCircle' type="summit" disabled={ loading }>
                        <i className="fa fa-arrow-right"></i>
                       </button>
                       <div className="usernameBoxLower">
                    

                    </div>
                </div>
                    
                </fieldset>
            
                

                { loading && <p>Logging in...</p>}
                { apiError && <p> {apiError } </p>}
            </form>
        </>
    )
}
export default LoginForm