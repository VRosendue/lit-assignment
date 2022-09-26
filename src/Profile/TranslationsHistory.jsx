import React from 'react'
import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const TranslationsHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationsHistoryItem key={translation + index} translation= {translation} />)
    return (
        <body>
        <div>
        <h4>Sign History</h4>
        <ul>
            {translationList}
        </ul>
        </div>
        </body>
    )
}
export default TranslationsHistory