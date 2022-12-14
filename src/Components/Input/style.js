import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 35px;
    padding-inline: 2.5rem 0;

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
`;

export const ErrorMsg = styled.p`
    font-size: 0.8rem;
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: var(--clr-error);
`;