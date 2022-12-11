import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0.2rem 0.5rem;
    background-color: var(--bg-dark);
`;

export const Box = styled.div`
    max-width: 92%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 82px;
        aspect-ratio: 1;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;

    a{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        text-decoration: none;
    }
`;

export const Button = styled.button`
    padding: .2em 2.5em;
    border-radius: 30px;
    background-color: var(--bg-gr);
`;