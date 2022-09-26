import React from 'react'
import { useState } from "react"
import { translationAdd } from "../api/translate"
import { OutputTranslateContainer, OutputTranslation, TranslationText } from "../components/styles/Container.styled"
import TranslationsInput from "../components/Translator/TranslationsInput"
import TranslationOutput from "../components/Translator/TranslationsOutput"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import withAuth from "../hoc/withAuth"
import { useUser } from "../store/UserStore"
import { storageSave } from "../utils/storage"


const Translation = () => {
    const {user, setUser} = useUser()
    const [inputText, setInputText] = useState(null)

    const handleTranslateClicked = async (textValue) => {
        const translation = textValue.trim()

        if(!translation) {
            alert('No input found')
            return
        }



        const [error, updateUser] = await translationAdd(user, translation)
        
        if(error !== null) {
            return null
        }


        storageSave(STORAGE_KEY_USER, updateUser)

        setUser(updateUser)
        console.log('Error: ', error)
        console.log('updateUser: ', updateUser)


        setInputText(translation)
    }



    return(
        <>
            <TranslationText>
                <TranslationsInput childClicked={handleTranslateClicked} />
            </TranslationText>
            <OutputTranslateContainer>
                <TranslationOutput inputText= {inputText}/>
            </OutputTranslateContainer>
        </>
    );
}

export default withAuth(Translation)