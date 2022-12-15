import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 93.8vh;
    padding-inline: 0.5rem;

    display: flex;
    align-items: center;
    background-color: var(--bg-light);

    @media screen and (max-width:48em) {
        align-items: flex-start;
    }
`;

export const BoxLogin = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;

    h2{
        max-width: 25ch;
        border-top: 10px solid;
        border-image-source: linear-gradient(90deg, rgb(132, 70, 172), transparent 30%);
        border-image-slice: 1;
        font-size: clamp(2rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    @media screen and (max-width:48em) {
        width: 95%;
        margin-top: 3rem;
        flex-direction: column;
        gap: 2rem;

        h2{
            max-width: 65ch;
            font-weight: var(--fw-400);
        }
    }

    @media screen and (max-width:36em) {
        h2{
            display: none;
        }
    }
`;

export const BoxTxt = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        border-top: 10px solid;
        border-image-source: linear-gradient(90deg, rgb(132, 70, 172), transparent 30%);
        border-image-slice: 1;
        font-size: clamp(2rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    @media screen and (max-width:48em) {
        width: 100%;
    }
`;

export const DoIt = styled.p`
    margin-block: 1rem 2rem;
    font-size: clamp(1rem, 1.4vw, 1.7rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    color: var(--clr-wt); 
    opacity: .9;

    @media screen and (max-width:48em) {
        margin-block: 0.5rem 1rem;
    }
`;

export const BoxLinks = styled.div`
    width: 100%;
    margin-block: 4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        font-size: clamp(0.75rem, 1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        text-decoration: none;
    }

    a:nth-child(1){
        color: var(--clr-yw);
    }

    a:nth-child(2){
        color: var(--clr-gr);
    }

    @media screen and (max-width:48em) {
        margin-block: 2rem 0;
    }
`;