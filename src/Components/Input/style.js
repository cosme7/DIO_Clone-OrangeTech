import styled, { css } from "styled-components";
import People from '../../Assets/icon_00.svg'
import Email from '../../Assets/icon_01.svg'
import Password from '../../Assets/icon_02.svg'

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

    &::placeholder{
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        opacity: 0.6;
    }

    &:focus{
        border-bottom: 2px solid #8f47d7;
    }

    ${({pessoas}) => pessoas !== 'people' && css`
        background-image: url(${People});
    `}

    ${({correio}) => correio !== 'email' && css`
        background-image: url(${Email});
    `}

    ${({senha}) => senha !== 'password' && css`
        background-image: url(${Password});
    `}
`;