

import { useForm } from "react-hook-form"

const TranslatorForm = () => {
    
    const {register, handleSubmit} = useForm()
    
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translator-notes"></label>
                <input type="text" {...register('translationNotes')} />
            </fieldset>

            <button tpye="submit">Translate</button>
        </form>
    )
}

export default TranslatorForm