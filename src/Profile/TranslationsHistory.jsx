import ProfileTranslationsHistoryItem from "./ProfileTranslationsHistoryItem"

const TranslationsHistory = ({ translations }) => {

    const translationList = translations.map(translation => <ProfileTranslationsHistoryItem key={translation} translation= {translation} />)
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