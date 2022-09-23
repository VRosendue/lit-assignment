import { useForm } from "react-hook-form"
import { BsKeyboard, BsArrowRight } from 'react-icons/bs'
import { TranslationText } from "../styles/Container.styled"
import { Input, InputButton, InputErrorMessage, InputForm } from "../styles/Input.styled"



const inputConfig = {
    required: true,
    maxLength: 50,
    patter: /^[a-zA-Z\s]*$ /

}


const TranslationsInput = ({childClicked}) => {

    const {register, handleSubmit, formState: {errors: error}} = useForm()


    const errorMessage = (() => {
        if (!error.inputText) {
            return null
        }

        if(error.inputText === 'required') {
            return <span>Type something to translate...</span>
        } 

        if(error.inputText.type === 'maxLength') {
            return <span>Maximum 50 characters!</span>
        }
        if(error.inputText.type === 'pattern') {
            return <span>Only letters and/or spaces are allowed!</span>
        }

    })()
    console.log(error);

    const onSubmit = ({inputText}) => {
        childClicked(inputText)
    }


    const style = {marginLeft: "10px"}

    return (
        <>
            <InputForm onSubmit={handleSubmit(onSubmit)}>
                <TranslationText>
                    <BsKeyboard style={style} size={50}/>
                    <Input type='text' placeholder='Type something to translate it...' {...register('inputText', inputConfig)}/>
                    <InputButton type="submit">
                        <BsArrowRight size={50} color={"white"}/>
                    </InputButton>
                </TranslationText>
            </InputForm>
            <InputErrorMessage>{errorMessage}</InputErrorMessage>
        </>
    );
}

export default TranslationsInput