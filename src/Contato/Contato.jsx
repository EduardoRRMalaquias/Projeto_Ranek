// import React from 'react'
import Head from '../Components/Head';
import foto from '../img/contato.jpg';
import estilos from './Contato.module.css';

const Contato = () => {
  return (
    <article className={`container animeLeft ${estilos.contato}`}>
      <Head
        title="Contato"
        description="Entre em contato conosco, atendimento na hora"
      />
      <figure>
        <img src={foto} alt="Maquina de escrever" />
      </figure>
      <div className={estilos.informacoes}>
        <h1>Entre em contato</h1>
        <ul>
          <li>malaquias.eduardo18@gmail.com</li>
          <li>(27) 998911499</li>
          <li>Santo Antonio - Vitoria ES</li>
        </ul>
      </div>
    </article>
  );
};

export default Contato;
