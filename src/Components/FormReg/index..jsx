import React from 'react'
import api from '../../Data/api'

import Button from '../Button'
import Input from '../Input'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './style'

export default function FormReg() {
 
    const schema = yup.object({
        name: yup.string().min(4, 'Nome com no mínimo 4 caracteres!').required('Name é Obrigatório!'),
        email: yup.string().email('Insira um e-mail válido!').required('Email é Obrigatório!'),
        password: yup.string().min(6, 'Senha com no mínimo 6 caracteres!').required('Senha é Obrigatório!')
    }).required();
  
    const { control, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
  
    const onSubmit = async(formData) => {
      try{
        if(isValid){
          const user = JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          });
          const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
          };
          const {data} = await api.post(`/users`, user, customConfig);
          if(data.name) {
            alert(`${data.name} cadastrado(a) com sucesso!`);
          }
        }
      }catch(e){
        console.log('Erro no cadastro do usuário.');
      }
    }

  return (
    <>
        <S.Forms onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} errorMessage={errors.name?.message} type='name' name='name' placeholder='Nome Completo' className='people' />
            <Input control={control} errorMessage={errors.email?.message} type='email' name='email' placeholder='E-mail' className='email' />
            <Input control={control} errorMessage={errors.password?.message} type='password' name='password' placeholder='Password' className='senha' />
            <Button title='Criar minha conta' type='submit'/>
        </S.Forms>
    </>
  )
};
