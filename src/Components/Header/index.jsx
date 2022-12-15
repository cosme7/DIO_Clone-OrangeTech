import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../Assets/logo.svg'
import Perfil from '../../Assets/icon_04.svg'
import Seta from '../../Assets/icon_05.svg'
import * as S from './style';

export default function Header({autenticado}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Esquece isso aí!')
  }

  return (
    <>
      <header>
        <S.Container>
          <S.Box>
            <Link to='/'>
              <img className='logo' src={Logo} alt="DIO Logo" title="DIO Logo"/>
            </Link>
            {autenticado ? (
              <S.LogIn>
                <S.FormWrapper>
                  <form onSubmit={handleSubmit}>
                    <input type="text" name='text' placeholder='Buscar'/>
                  </form>
                  <a href="https://www.dio.me/" target='_blank' rel="noreferrer">Live Code</a>
                  <a href="https://www.dio.me/" target='_blank' rel="noreferrer">Global</a>
                </S.FormWrapper>
                <S.ImgWrapper>
                  <img className='perfil' src={Perfil} alt="Personal" title="Personal" />
                  <img src={Seta} alt="Arrow Down" title="Arrow Down" />
                </S.ImgWrapper>
              </S.LogIn>
            ) : (
              <nav>
                <S.List>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/login'>
                        <Button title='Entrar' variant='others' />
                    </Link>
                  </li>
                  <li>
                      <Link to='/cadastro'>
                        <Button title='Cadastro' variant='others' />
                      </Link>
                  </li>
                </S.List>
              </nav>
            )}
          </S.Box>
        </S.Container>
      </header>
    </>
  )
}
