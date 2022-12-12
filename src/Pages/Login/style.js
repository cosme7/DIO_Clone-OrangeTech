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
        max-width: 32ch;
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
        margin-block: 1rem 2rem;
        font-size: clamp(1rem, 1.4vw, 1.7rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt); 
        opacity: .9;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    button{
        margin-top: 3rem;
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
`;