import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 0.3em 2em;
    border-radius: 30px;
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    background-color: var(--bg-pk);
    color: var(--clr-wt);
    outline: 2px solid var(--bg-pk);
    outline-offset: 5px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    text-decoration: none;

    &:where(:hover, :focus-visible){
        filter: drop-shadow(0 0 25px var(--bg-pk));
    }

    ${({variant}) => variant !== 'other' && css`
        padding: .2em 2em;
        border-radius: 30px;
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-weight: var(--fw-400);
        background-color: var(--bg-gr);
        outline: none;
        outline-offset: 0;
        border: none;

        &:where(:hover, :focus-within){
            background-color: var(--bg-pk);
            filter: none;
        }
    `};
`;