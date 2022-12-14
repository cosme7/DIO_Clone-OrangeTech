import React from 'react'
import { Controller } from 'react-hook-form'
import * as S from './style'

export default function Input({name, control, className, errorMessage, ...rest}) {
  return (
    <>
        <Controller        
          name={name}
          control={control}
          rules={{ required: true }}         
          render={({ field }) => 
           <S.Input 
              {...field} 
              {...rest} 
              className={className}
              />}
        />
        {errorMessage ? <S.ErrorMsg>{errorMessage}</S.ErrorMsg> : null}
    </>
  )
}
