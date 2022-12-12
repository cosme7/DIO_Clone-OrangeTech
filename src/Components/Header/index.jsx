import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../Assets/logo.svg'
import * as S from './style';

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
                  <Button path='/login' title='Entrar' variant='others'/>
                </li>
                <li>
                  <Button path='/cadastro' title='Cadastrar' variant='others'/>
                </li>
              </S.List>
            </nav>
          </S.Box>
        </S.Container>
      </header>
    </>
  )
}
