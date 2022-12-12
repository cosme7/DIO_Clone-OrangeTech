import styled from "styled-components";

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    img{
        width: 70px;
        aspect-ratio: 1;
    }
`;

export const RankWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    h4{
        font-size: clamp(1rem, 1.2vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-wt);
    }
`;

export const Bar = styled.div`
    width: 200px;
    height: 8px;
    background-color: var(--bg-wt);
    border-radius: 3px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({progress}) => progress}%;
        height: 8px;
        border-radius: 3px;
        background-color: var(--bg-prog);
    }
`;