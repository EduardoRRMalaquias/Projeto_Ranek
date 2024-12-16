import React from 'react';
import estilos from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from '../Components/Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const extrator = await fetch(url);
        const dados = await extrator.json();
        setProduto(dados);
      } catch (erro) {
        setError(`Um erro ocorreu ${erro}`);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading)
    return (
      <div className="container">
        <div className={estilos.loading}></div>
      </div>
    );
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <div className={`container animeLeft ${estilos.produto}`}>
      <Head title={produto.nome} descricao={produto.description} />
      <figure>
        {produto.fotos.map((foto) => (
          <img
            key={foto.src}
            src={foto.src}
            alt={foto.title}
            title={foto.title}
          />
        ))}
      </figure>
      <div className={estilos.informacoes}>
        <h1>{produto.nome}</h1>
        <span>{'R$ ' + produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
};

export default Produto;
