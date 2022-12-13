import React from 'react'

import { useNavigate } from "react-router-dom";
import { api } from '../../API/api';

import Button from '../Button'
import Input from '../Input'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './style'

export default function Form() {

    const schema = yup.object({
        email: yup.string().email('Favor por um e-mail válido!').required(''),
        password: yup.string().min(6, 'No mínimo 6 caracteres!').required(''),
    }).required();

    const navigate = useNavigate()
  
    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
  
    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
            console.log('retorno api', data)
            if(data.length === 1){
                navigate('/feed') 
                return
            }
        }catch{
            alert('Houve um Erro, tente novamente!')
        }
    };

  return (
    <>
        <S.Forms onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} errorMessage={errors?.email?.message} type='email' name='email' placeholder='E-mail' />
            <Input control={control} errorMessage={errors?.password?.message} type='password' name='password' placeholder='Password' />
            <Button title='Entrar' type='submit'/>
        </S.Forms>
    </>
  )
};
