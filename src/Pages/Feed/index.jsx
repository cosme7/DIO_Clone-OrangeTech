import React from 'react'
import Card from '../../Components/Card'
import Rank from '../../Components/Rank'
import Perfil from '../../Assets/icon_04.svg'
import * as S from './style'

export default function Feed() {
  return (
    <>
        <main>
            <S.Container>
                <S.Wrapper>
                  <S.CardWrapper>
                    <h2>Feed</h2>
                    <Card />
                    <Card />
                    <Card />
                  </S.CardWrapper>
                  <S.Info>
                    <h3># RANKING 5 TOP DA SEMANA</h3>
                    <Rank name='Pablo Henrique' image={Perfil} progress='80' />  
                    <Rank name='Pablo Henrique' image={Perfil} progress='20' />  
                    <Rank name='Pablo Henrique' image={Perfil} progress='50' />  
                    <Rank name='Pablo Henrique' image={Perfil} progress='55' />  
                    <Rank name='Pablo Henrique' image={Perfil} progress='9' />  
                  </S.Info>
                </S.Wrapper>
            </S.Container>
        </main>
    </>
  )
}
