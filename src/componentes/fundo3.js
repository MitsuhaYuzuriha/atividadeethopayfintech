import React from 'react';
import imagemDeFundo from './img/fundotres.png';

const FundoTres = () => {
  const estiloDoFundo = {
    backgroundImage: `url(${imagemDeFundo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100vh', // Ajuste isso conforme necessário
  };

  return (
    <div style={estiloDoFundo}>
      {
        <estiloDoFundo/>
      }
    </div>
  );
};

export default FundoTres;