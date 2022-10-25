import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import home from './Views/home';
import AddPessoa from './Views/addpessoa';



export default function Rotas() {
  return (
     <Router>
      <Navbar/>
       <Routes>
      <Route path="/home" element={<Home/>}/>
          <Route path="/home" element={<AddPessoa/>}/>
             <Route path="/edit/:id " element={<EditarPessoa/>}/>
            <Route path="/view/:id" element={<AddPessoa/>}/>
            <Route path="*" element={<h1> Página não encontrada.</h1>}/>
        </Routes>
    </Router>
  )
};
