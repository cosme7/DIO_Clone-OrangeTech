import styled from "styled-components";
import Lupa from '../../Assets/icon_03.svg'

export const Container = styled.section`
    width: 100%;
    padding: 0.6rem 0.5rem;
    background-color: var(--bg-dark);
`;

export const Box = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    position: relative;

    img.logo{
        width: 97px;
    }

    @media screen and (max-width:48em) {
        width: 95%;
    }
`;

export const LogIn = styled.div`
    width: 85%;
    margin: 0 auto 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:48em) {
        justify-content: flex-end;
        gap: 1rem;
    }
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

    @media screen and (max-width:48em) {
        form{
            display: none;
        }
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

export const Desktop = styled.nav`
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    a{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        text-decoration: none;
    }

    @media screen and (max-width:48em) {
        display: none;
    }
`;

//* Menu Mobile

export const Btn = styled.button`
    display: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: fixed;
    z-index: 8000;
    right: 0.5rem;

    @media screen and (max-width:48em){
        display: block;
    }
`;

export const Icon = styled.svg`
    rect{
        transition: ${({open}) => open ? 
            'y 300ms ease-in, rotate 300ms ease-in, opacity 1s' :
            'y 300ms ease-in 300ms, rotate 300ms ease-in, opacity 300ms'};
        transform-origin: center;
    }

    rect:is(:nth-child(1), :nth-child(3)){
        y: ${({open}) => open ? '45' : null};
    }

    rect:nth-child(1){
        rotate: ${({open}) => open ? '45deg' : '0'};
    }

    rect:nth-child(2){
        opacity: ${({open}) => open ? '0' : '1'};
    }

    rect:nth-child(3){
        rotate: ${({open}) => open ? '-45deg' : '0'};
    }
`;

export const Txt = styled.span`
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
`;

export const Mobile = styled.nav`
    width: 100%;
    min-height: 100vh;
    padding: 5rem 0.5rem 1rem;
    display: none;
    background-color: var(--bg-dark);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    z-index: 2000;

    img{
        width: 200px;
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        list-style: none;
    }

    a{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        color: var(--clr-wt);
        text-align: center;
        text-decoration: none;
    }

    @media screen and (max-width:48em){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;