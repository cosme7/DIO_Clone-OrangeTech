import styled from "styled-components";

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
`;

export const Acc = styled.p`
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    color: var(--clr-wt); 
    opacity: .9;

    &:nth-child(2){
        margin-block: 2rem;
    }

    &:nth-child(4){
        max-width: 35ch;
        margin-block-start: 3rem;
    }

    &:nth-child(5){
        margin-block-start: 0.5rem;
    }

    &:nth-child(5) a{
        font-weight: var(--fw-700);
        color: var(--clr-gr);
        text-decoration: none;
    }
`;