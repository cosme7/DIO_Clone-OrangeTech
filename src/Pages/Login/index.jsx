import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import Form from '../../Components/FormLog';
import * as S from './style'

export default function Login() {
  return (
    <>
      <Header />
      <main>
        <S.Container>
          <S.BoxLogin>
            <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
            <S.BoxTxt>
              <h3>Faça seu cadastro</h3>
              <S.DoIt>Faça seu login e make the change._</S.DoIt>
              <Form />
              <S.BoxLinks>
                <a href="https://www.dio.me/" target='_blank' rel="noreferrer">Esqueci minha senha</a>
                <Link to='/cadastro'>Criar conta</Link>
              </S.BoxLinks>
            </S.BoxTxt>
          </S.BoxLogin>
        </S.Container>
      </main>
    </>
  )
}
