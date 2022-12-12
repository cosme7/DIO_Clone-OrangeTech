import React from 'react'
import Header from '../Components/Header';
import {Cadastro, Feed, Login, Home} from '../Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function rotas() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </Router> 
    </>
  )
}
