import React from 'react'
import * as S from './style'

export default function Rank({name, image, progress}) {
  return (
    <>
        <S.Box>
          <img src={image} alt={name} title={name}/>
          <S.RankWrapper>
              <h4>{name}</h4>
              <S.Bar progress={progress} />
          </S.RankWrapper>
        </S.Box>
    </>
  )
}
