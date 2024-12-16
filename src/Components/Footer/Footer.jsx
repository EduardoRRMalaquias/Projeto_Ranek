// import React from 'react';
import estilos from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={estilos.footer}>
      <p>
        Todos os direitos reservados a{' '}
        <a href="https://eduardorrmalaquias.github.io/projeto_portifolio/">
          Eduardo R. R. Malaquias
        </a>
      </p>
    </footer>
  );
};

export default Footer;
