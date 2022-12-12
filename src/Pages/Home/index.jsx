import React from 'react'
import Button from '../../Components/Button'
import Testimonials from '../../Assets/home_01.png'
import * as S from './style'

export default function Home() {
  return (
    <>
      <main>
        <S.Container>
          <S.BoxHome>
            <S.BoxTxt>
              <h2>
                <span>Implemente<br /></span> 
                o seu futuro global agora!
              </h2>
              <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
              <Button path='/login' title='Começar agora' />
            </S.BoxTxt>
            <img src={Testimonials} alt="Contratados" title="Contratados" />
          </S.BoxHome>
        </S.Container>
      </main>
    </>
  )
}
