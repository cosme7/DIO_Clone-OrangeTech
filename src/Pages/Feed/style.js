import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 3rem 0.5rem;
    background-color: var(--bg-light);

    @media screen and (max-width:48em) {
        padding: 1rem 0.5rem;
    }
`;

export const Wrapper = styled.div`
    width: 92%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: clamp(1rem, 2vw, 3rem);

    @media screen and (max-width:48em) {
        width: 100%;
        grid-template-columns: 1fr;
    }
`;

export const CardWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2{
        font-size: clamp(2rem, 2.3vw, 3rem);
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

    @media screen and (max-width:48em) {
        display: none;
    }
`;