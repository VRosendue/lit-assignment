import React from 'react'
import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const TranslationsHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationsHistoryItem key={translation + index} translation= {translation} />)
    return (
        <section>
        <h4>Sign History</h4>
        <ul>

            {translationList}

        </ul>

        </section>
        
    )
}
export default TranslationsHistory