import styled from "styled-components";
import Lupa from '../../Assets/icon_03.svg'

export const Container = styled.section`
    width: 100%;
    padding: 0.6rem 0.5rem;
    background-color: var(--bg-dark);
`;

export const Box = styled.div`
    max-width: 92%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    img.logo{
        width: 97px;
    }
`;

export const LogIn = styled.div`
    width: 85%;
    margin: 0 auto 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input{
        width: 300px;
        padding: .2rem 0 .2rem 2rem;
        border-radius: 8px;
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        background-color: var(--bg-gr-dark);
        background-image: url(${Lupa});
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position: 4px 5px;
        color: var(--clr-wt);
        border: none;
    }

    input::placeholder{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-wt);
        text-transform: uppercase;
    }

    a{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
        text-decoration: none;
    }
`;

export const ImgWrapper = styled.figure`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img.perfil{
        width: 60px;
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