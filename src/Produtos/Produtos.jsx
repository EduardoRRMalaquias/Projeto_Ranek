import React from 'react';
import estilos from './Produtos.module.css';
import ProdutoCard from '../Components/ProdutoCard/ProdutoCard';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((extrator) => extrator.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <article className="container">
      <ul className={estilos.listaProdutos}>
        {produtos.map(({ id, fotos, nome }) => (
          <li key={id}>
            <ProdutoCard
              id={id}
              foto={fotos[0].src}
              nome={nome}
              titulo={fotos[0].titulo}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Produtos;
