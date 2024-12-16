// import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Produtos from './Produtos/Produtos.jsx';
import Contato from './Contato/Contato.jsx';
import Produto from './Produto/Produto.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="produto/:id" element={<Produto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
