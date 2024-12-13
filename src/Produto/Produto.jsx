import React from 'react';
import estilos from './Produto.module.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((extrator) => extrator.json())
      .then((dados) => setProduto(dados));
  }, [id]);

  if (!produto)
    return (
      <div className="container">
        <div className={estilos.loading}></div>
      </div>
    );
  return (
    <div className={`container ${estilos.produto}`}>
      <figure>
        <img
          src={produto.fotos[0].src}
          alt={produto.fotos[0].title}
          title={produto.fotos[0].title}
        />
      </figure>
      <div className={estilos.informacoes}>
        <h1>{produto.nome}</h1>
        <span>{'R$ ' + produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
      {produto.fotos.length > 1 && (
        <figure>
          <img
            src={produto.fotos[1].src}
            alt={produto.fotos[1].title}
            title={produto.fotos[1].title}
          />
        </figure>
      )}
    </div>
  );
};

export default Produto;
