import React from 'react'
import * as S from './style'

export default function Button({title, path, variant="other"}) {
  return (
    <>
      <S.Button variant={variant}>
        {title}
      </S.Button>
    </>
  )
}
