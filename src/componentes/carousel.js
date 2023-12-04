import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto1 from './img/img14.png'
import foto2 from './img/img15.png'
import foto3 from './img/img16.png'
import foto4 from './img/img17.png'
import foto5 from './img/img18.png'

const MyCarousel = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    // Configura um intervalo para avançar automaticamente os slides a cada 5 segundos
    const interval = setInterval(() => {
      // Verifique se o próximo slide existe
      if (selectedSlide < 2) {
        setSelectedSlide(selectedSlide + 1);
      } else {
        setSelectedSlide(0); // Volte ao primeiro slide quando atingir o último
      }
    }, 5000); // 5000 milissegundos = 5 segundos

    // Lembre-se de limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [selectedSlide]);

  return (
    <div
      style={{
        position: 'absolute',
        marginTop: '20px', // Ajuste conforme necessário
        marginLeft: '30px', // Ajuste conforme necessário
        width:'500px',
      }}
    >
      <Carousel
        selectedItem={selectedSlide} // Define o slide selecionado
        onChange={(index) => setSelectedSlide(index)} // Atualiza o slide selecionado
      >
        <div>
          <img src={foto1} alt="Imagem 1" />
        </div>
        <div>
          <img src={foto2} alt="Imagem 2" />
        </div>
        <div>
          <img src={foto3} alt="Imagem 3" />
        </div>
        <div>
          <img src={foto4} alt="Imagem 4" />
        </div>
        <div>
          <img src={foto5} alt="Imagem 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
