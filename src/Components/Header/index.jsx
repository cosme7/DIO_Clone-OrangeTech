import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.svg'
import * as S from './style'

export default function Header() {
  return (
    <>
      <header>
        <S.Container>
          <S.Box>
            <img src={Logo} alt="DIO Logo" title="DIO Logo"/>
            <nav>
              <S.List>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <S.Button>
                    <Link to='/entrar'>Entrar</Link>
                  </S.Button>
                </li>
                <li>
                  <S.Button>
                    <Link to='/cadastro'>Cadastro</Link>
                  </S.Button>
                </li>
              </S.List>
            </nav>
          </S.Box>
        </S.Container>
      </header>
    </>
  )
}
