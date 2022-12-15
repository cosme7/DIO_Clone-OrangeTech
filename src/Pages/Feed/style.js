import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 3rem 0.5rem;
    background-color: var(--bg-light);
`;

export const Wrapper = styled.div`
    width: 92%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: clamp(1rem, 2vw, 3rem);
`;

export const CardWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2{
        font-size: clamp(1rem, 1.8vw, 2.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }
`;

export const Info = styled.section`
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h3{
        font-size: clamp(1rem, 1.4vw, 1.8rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
        opacity: 0.8;
    }
`;