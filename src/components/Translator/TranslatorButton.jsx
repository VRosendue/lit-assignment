const TranslatorButton = ({ TranslationSign, onSelectTranslate}) => {
    return (
       <button onClick={() => onSelectTranslate (TranslationSign.id)}>
            <aside>
                <img src={TranslationSign.image} alt={TranslationSign.name} width="55"/>
            </aside>
            <section>
                <b>{TranslationSign.name}</b>
            </section>
       </button> 
    )
}

export default TranslatorButton