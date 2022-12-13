import styled from "styled-components";
import Email from '../../Assets/icon_01.svg'
import Senha from '../../Assets/icon_02.svg'

export const Input = styled.input`
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

    &:nth-child(1){
        background-image: url(${Email});
    }

    &:nth-child(2){
        background-image: url(${Senha});
    }

    &::placeholder{
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        opacity: 0.6;
    }

    &:focus{
        border-bottom: 2px solid #8f47d7;
    }
`;

export const ErrorMsg = styled.p`
    margin-block: 0 1rem;
    font-size: 0.8rem;
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: var(--clr-error);
`;