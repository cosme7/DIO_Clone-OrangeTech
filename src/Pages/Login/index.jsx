import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import * as S from './style'

export default function Login() {
  return (
    <>
      <main>
        <S.Container>
          <S.BoxLogin>
            <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
            <S.BoxTxt>
              <h3>Faça seu cadastro</h3>
              <p>Faça seu login e make the change._</p>
              <S.Form>
                <Input correio='correio' type='email' name='email' placeholder='E-mail' />
                <Input senha='senha' type='password' name='password' placeholder='Password' />
                <Button title='Entrar'/>
              </S.Form>
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
