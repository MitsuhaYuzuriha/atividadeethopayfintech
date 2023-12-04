import React, { useState, useEffect } from 'react';
import Style from './Titulo.module.css'

function TypingHeader() {
  const [text, setText] = useState('');
  const fullText = 'Vem fazer parte do futuro\nVem de Ethopay';
  const typingSpeed = 50; // Velocidade de digitação (em milissegundos)

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <h1 className={Style.h1Style}>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </h1>
  );
}

export default TypingHeader;
