import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: var(--bg-gr-light);

    img{
        width: 100%;
    }
`;

export const Box = styled.div`
    padding: 0 0 .5rem 1rem;
    display: flex;
    flex-direction: column;

    h4{
        margin-block-start: 1rem;
        font-size: clamp(1rem, 1.4vw, 1.8rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    p:nth-child(3){
        font-size: clamp(0.75rem, 1.1vw, 1.3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt);
    }

    a{
        font-weight: var(--fw-700);
        color: var(--clr-wt);
        text-decoration: none; 
    }

    p:nth-child(4){
        margin-block-start: 0.5rem;
        font-size: clamp(0.75rem, 1.1vw, 1.3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt);
    }

    p:nth-child(5){
        margin-block-start: 0.5rem;
        font-size: clamp(0.75rem, 1.1vw, 1.3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt);
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    margin-block-start: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img{
        width: 60px;
        aspect-ratio: 1;
    }

    h3{
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }

    p{
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt);
    }
`;