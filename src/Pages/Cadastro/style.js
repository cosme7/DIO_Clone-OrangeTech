import styled, {css} from "styled-components";
import People from '../../Assets/icon_00.svg'
import Email from '../../Assets/icon_01.svg'
import Senha from '../../Assets/icon_02.svg'

export const Container = styled.section`
    width: 100%;
    min-height: 90.6vh;

    display: flex;
    align-items: center;
    background-color: var(--bg-light);
`;

export const BoxLogin = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;

    h2{
        max-width: 25ch;
        font-size: clamp(2rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }
`;

export const BoxTxt = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-size: clamp(2rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    p{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt); 
        opacity: .9;
    }

    p:nth-child(2){
        margin-block: 2rem;
    }

    p:nth-child(4){
        max-width: 35ch;
        margin-block-start: 3rem;
    }

    p:nth-child(5){
        margin-block-start: 0.5rem;
    }

    p:nth-child(5) a{
        font-weight: var(--fw-700);
        color: var(--clr-gr);
        text-decoration: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    button{
        margin-block: 3rem;
    }

    input{
        width: 100%;
        height: 35px;
        padding-inline: 2.5rem 0;
        margin-block-end: 1.5rem;

        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 30px 30px;

        font-size: clamp(1rem, 1.2vw, 1.4rem);
        font-family: var(--ff-primary);
        color: var(--clr-wt);

        outline: none;
        border: none;
        border-bottom: 2px solid var(--bg-gr);
    }

    input:nth-child(1){
        background-image: url(${People});
    }

    input:nth-child(2){
        background-image: url(${Email});
    }

    input:nth-child(3){
        background-image: url(${Senha});
    }

    input::placeholder{
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        opacity: 0.6;
    }

    input:focus{
        border-bottom: 2px solid #8f47d7;
    }
`;