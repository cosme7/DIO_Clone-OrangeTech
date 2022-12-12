import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'
import * as S from './style'

export default function Cadastro() {
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
                <Input pessoas='pessoas' type='name' name='name' placeholder='Nome Completo' />
                <Input correio='correio' type='email' name='email' placeholder='E-mail' />
                <Input senha='senha' type='password' name='password' placeholder='Password' />
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
