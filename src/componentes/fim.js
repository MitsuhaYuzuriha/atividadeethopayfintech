import React from 'react';
import Styles from './fim.module.css';

function Fim() {
  return (
    <div>
      <button className={`custom-btn ${Styles['btn-6']}`}>
        <span className={Styles.fimm} href="https://www.linkedin.com/in/jian-m-6303a0226/">
          Seu caminho para o sucesso começa conosco.
        </span>
      </button>
    </div>
  );
}

export default Fim;
