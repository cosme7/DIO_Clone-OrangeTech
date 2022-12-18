import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'
import Testimonials from '../../Assets/home_01.png'
import * as S from './style'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <S.Container>
          <S.BoxHome>
            <S.BoxTxt>
              <h1>
                <span>Implemente<br /></span> 
                o seu futuro global agora!
              </h1>
              <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
              <Link to='/login'>
                <Button title='Começar agora' />
              </Link>
            </S.BoxTxt>
            <img src={Testimonials} alt="Contratados" title="Contratados" />
          </S.BoxHome>
        </S.Container>
      </main>
    </>
  )
}
