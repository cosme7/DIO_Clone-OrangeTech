import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import Content from '../../Assets/card_01.png'
import Perfil from '../../Assets/icon_04.svg'
import * as S from './style'

export default function Card() {
  return (
    <>
        <S.Container>
            <img src={Content} alt="Card Details" title="Card Details" />
            <S.Box>
                <S.Wrapper>
                    <img src={Perfil} alt="Personal" title="Personal" />
                    <div>
                        <h3>Pablo Henrique</h3>
                        <p>Há 8 minutos</p>
                    </div>
                </S.Wrapper>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <a href="https://www.dio.me/" target='_blank' rel="noreferrer">Ver Mais</a></p>
                <p>#HTML #CSS #Javascript</p>
                <p><FiThumbsUp /> 10</p>
            </S.Box>
        </S.Container>
    </>
  )
}
