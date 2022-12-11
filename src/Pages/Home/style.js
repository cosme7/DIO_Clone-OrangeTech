import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 90.6vh;
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
        font-size: clamp(2rem, 2.2vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    span{
        color: var(--clr-pk);
    }

    p{
        max-width: 40ch;
        margin-block: 1rem 4rem;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-primary);  
        font-weight: var(--fw-400);      
        color: var(--clr-wt);
    }
`;

export const BtnEnter = styled.button`
    padding: 0.1em 2em;
    border-radius: 50px;
    background-color: var(--bg-pk);
    outline: 1px solid var(--bg-pk);
    outline-offset: 5px;
    cursor: pointer;
    border: none;

    a{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        text-decoration: none;
    }
`;