import React from 'react'
import * as S from './style'

export default function Button({title, onClick, variant="other", disabled}) {
  return (
    <>
      <S.Button variant={variant} onClick={onClick} disabled={disabled}>
        {title}
      </S.Button>
    </>
  )
}
