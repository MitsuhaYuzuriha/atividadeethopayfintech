import React, { useState, useEffect } from 'react';
import Logo from './img/logo.png';
import Style from './Nav.module.css'

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(70); // Altura inicial da barra de navegação

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavHeight(25); // Reduz a altura da barra de navegação quando a página é rolada
    } else {
      setNavHeight(70); // Restaura a altura original quando a página está no topo
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const estiloDaNavbar = {
    position: 'fixed',
    top: 0,
    background: 'rgba(68, 23, 79, 0.49)',
    padding: '10px 30px',
    width: '100%',
    height: `${navHeight}px`, // Altura dinâmica baseada na variável navHeight
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'height 0.3s', // Adiciona uma transição suave na altura
  };

  return (
    <div style={estiloDaNavbar}>
      <div>
      <img src={Logo} alt="logo" className={Style.logo}/>
      </div>
      <div className={Style.Links}>
        <a href="/">Página Inicial</a>
        <a href="/sobre">Para você</a>
        <a href="/contato">Para seu negócio</a>
        <a href="/contato">Perguntas</a>
      </div>
      <a href="/contato" className={Style.Ultimo}>Login</a>
    </div>
  );
};

export default Navbar;
