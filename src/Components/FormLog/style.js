import styled from "styled-components";
import Email from '../../Assets/icon_01.svg'
import Senha from '../../Assets/icon_02.svg'

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    button{
        margin-top: 3rem;
    }

    input.email{
        background-image: url(${Email})
    }

    input.senha{
        background-image: url(${Senha});
    }

    @media screen and (max-width:48em) {
        button{
            margin-top: 1rem;
        }
    }
`;