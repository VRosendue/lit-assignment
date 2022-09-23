import { OutputTranslation } from "../styles/Container.styled"
import Translations from "./Translations"

const TranslationOutput = ({inputText}) => {
    if(inputText !== null) {
        const charLowerCase = inputText.toLowerCase()
        const char = [...charLowerCase]
        const renderTranslation = char.map((char, index) => <Translations key={index} letter={char}/>)

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