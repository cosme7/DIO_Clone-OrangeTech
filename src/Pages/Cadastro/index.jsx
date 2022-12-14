import React from 'react'
import Form from '../../Components/FormReg/index.'
import { Link } from 'react-router-dom'
import * as S from './style'

export default function Cadastro({people, }) {
  return (
    <>
      <main>
        <S.Container>
          <S.BoxLogin>
            <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
            <S.BoxTxt>
              <h3>Comece agora grátis</h3>
              <S.Acc>Crie sua conta e make the change._</S.Acc>
              <Form />
              <S.Acc>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</S.Acc>
              <S.Acc>Já tenho conta. <Link to='/login'>Fazer Login</Link></S.Acc>
            </S.BoxTxt>
          </S.BoxLogin>
        </S.Container>
      </main>
    </>
  )
}
