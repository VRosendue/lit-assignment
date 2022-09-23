import { OutputTranslation } from "../styles/Container.styled"
import Translations from "./Translations"

const TranslationOutput = ({inputText}) => {
    if(inputText !== null) {
        const lowerCase = inputText.toLowerCase()
        const letters = [...lowerCase]
        const renderTranslation = letters.map((letter, index) => <Translations key={index} letter={letter}/>)

        return (
            <>
                <OutputTranslation>
                {renderTranslation}
                </OutputTranslation>
            </>
        );
    }
}

export default TranslationOutput