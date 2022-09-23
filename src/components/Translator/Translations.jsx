const Translations = ({letter}) => {
    return (
        <>
            {letter !== " " ? <img src={`/img${letter}.png`} alt={letter} width="55"/> : ''}
        </>
    );
}

export default Translations