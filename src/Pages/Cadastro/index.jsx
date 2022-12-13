import React from 'react'
import Button from '../../Components/Button'
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
              <p>Crie sua conta e make the change._</p>
              <S.Form>
                <input name='name' type="name" placeholder='Nome completo' />
                <input name='email' type="email" placeholder='E-mail' />
                <input name='password' type="password" placeholder='Password' />
                <Button title='Criar minha Conta'/>
              </S.Form>
              <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
              <p>Já tenho conta. <Link to='/login'>Fazer Login</Link></p>
            </S.BoxTxt>
          </S.BoxLogin>
        </S.Container>
      </main>
    </>
  )
}
