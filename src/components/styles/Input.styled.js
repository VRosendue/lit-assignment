
import styled from 'styled-components'

export const InputField = styled.fieldset`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    height: 7rem;
    width: 80%;
    border-radius: 10px;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    filter: drop-shadow(0px 5px 5px rgba(0.25, 0.25, 0.25, 0.25));
`
export const InputBox = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    border: 3px solid;
    border-color: grey;
    border-radius: 100px;
    justify-content: space-evenly;
    width: 80%;
   
`

export const Input = styled.input`
        font-family: sans-serif;
        background-color: #EFEFEF;
        padding: 0.5rem;
        margin-right: 1rem;
        flex-grow: 1;
        border: #FFFFFFF
`

export const InputButton = styled.button`
    background-color: #845ec2;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;
    border: none;
    font-size: inherit;

    &:hover {
        background-color: rgb(33, 252, 13);
        color: rgb(0, 0, 0);
        transform: scale(1.2);
    }

    &:disabled {
        background-color: rgba(128, 255, 0, 0.546);
        color: black;
    }
`


export const InputForm = styled.form`
    background-color: #ffff;
    border: 3px solid blanchedalmond;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    width: 50%;
    padding: 1rem;
    font-size: 2rem;
`

export const InputErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

