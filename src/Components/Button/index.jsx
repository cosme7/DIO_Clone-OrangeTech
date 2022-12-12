import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export default function Button({title, path, variant="other", onClick='OnClick'}) {
  return (
    <>
      <S.Button variant={variant} onClick={onClick}>
        <Link to={path}>{title}</Link>
      </S.Button>
    </>
  )
}
