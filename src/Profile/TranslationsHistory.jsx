import React from 'react'
import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const TranslationsHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationsHistoryItem key={translation + index} translation= {translation} />)
    return (
        <div>
        <h4>Your 10 most recent translations:</h4>
        <ul>
            {translationList}
        </ul>
        </div>
        
    )
}
export default TranslationsHistory