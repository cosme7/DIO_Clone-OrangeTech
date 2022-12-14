import React from 'react'
import * as S from './style'

export default function Button({title, onClick, variant="other"}) {
  return (
    <>
      <S.Button variant={variant} onClick={onClick}>
        {title}
      </S.Button>
    </>
  )
}
