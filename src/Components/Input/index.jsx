import React from 'react'
import * as S from './style'

export default function Input({type, name, placeholder, pessoas='people', correio='email', senha='password'}) {
  return (
    <>
      <S.Input
        pessoas={pessoas}
        correio={correio}
        senha={senha}
        type={type} 
        name={name} 
        placeholder={placeholder}
      />
    </>
  )
}
