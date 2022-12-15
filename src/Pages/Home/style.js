import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 93.8vh;
    display: flex;
    align-items: center;
    background-color: var(--bg-light);
`;

export const BoxHome = styled.div`
    width: 92%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *{
        flex-basis: 100%;
    } 
`;

export const BoxTxt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2{
        max-width: 20ch;
        font-size: clamp(2rem, 4vw, 4.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    span{
        background: linear-gradient(90deg, rgb(166, 75, 214) 0.1%, rgb(227, 18, 96) 55.24%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    p{
        max-width: 40ch;
        margin-block: 1rem 4rem;
        font-size: clamp(1rem, 1.4vw, 1.8rem);
        font-family: var(--ff-primary);  
        font-weight: var(--fw-400);      
        color: var(--clr-wt);
    }
`;