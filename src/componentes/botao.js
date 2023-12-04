import React from 'react';
import Style from './botao.module.css'

function Botao() {
  return (
    <div className={Style.textbox}>
			<a href='#' className={`${Style.botn} ${Style.botnwhite} ${Style.botnanimate}`}>Abra sua conta</a>
		</div>
  );
}

export default Botao;
