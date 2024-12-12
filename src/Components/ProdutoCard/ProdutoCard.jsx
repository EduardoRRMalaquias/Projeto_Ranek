// import React from 'react';
import estilos from './ProdutoCard.module.css';
import { Link } from 'react-router-dom';

const ProdutoCard = ({ id, foto, nome, titulo }) => {
  return (
    <Link to={`produto/${id}`}>
      <div className={estilos.linkProduto}>
        <figure className={estilos.imgProduto}>
          <img src={foto} alt={titulo} title={titulo} />
        </figure>
        <h1 className={estilos.nomeProduto}>{nome}</h1>
      </div>
    </Link>
  );
};

export default ProdutoCard;
