const SignsButton = ({ name, image}) => {
    return (
        <button>
            <aside>
                <img src={image} alt={name} width="50" />
            </aside>
            <section>
                <b>{name}</b>
            </section>
        </button>
    )
} 
export default SignsButton 