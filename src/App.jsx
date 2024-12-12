// import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Produtos from './Produtos/Produtos.jsx';
import Contato from './Contato/Contato.jsx';
import Produto from './Produto/Produto.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="produto/:produto" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
