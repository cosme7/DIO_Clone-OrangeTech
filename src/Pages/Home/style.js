import styled from "styled-components";
import Background from '../../Assets/home_01.png'

export const Container = styled.section`
    width: 100%;
    min-height: 93.8vh;
    padding-inline: 0.5rem;
    display: flex;
    align-items: center;
    background-color: var(--bg-light);
    position: relative;
    isolation: isolate;

    @media screen and (max-width:48em) {
        &::before{
            content: '';
            position: absolute;
            z-index: -1;
            inset: 0;
            background-image: url(${Background});
            background-repeat: no-repeat;
            background-size: 100% 50%;
            opacity: .5;
        }
    }

`;

export const BoxHome = styled.div`
    width: 92%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img{
        width: 100%;
    }

    @media screen and (max-width:48em) {
        grid-template-columns: 1fr;

        img{
            display: none;
        }
    }
`;

export const BoxTxt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2{
        max-width: 20ch;
        font-size: clamp(2.2rem, 4vw, 4.5rem);
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

    @media screen and (max-width:48em) {
        width: 100%;
        align-items: center;

        h2, p{
            text-align: center;
        }
    }
`;