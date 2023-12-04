import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = 'Conheça um pouco da €thoPay';
  const typingSpeed = 90; // Velocidade de digitação (em milissegundos)
  const [shouldType, setShouldType] = useState(false);

  useEffect(() => {
    if (shouldType) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [shouldType]);

  const handleScroll = () => {
    const element = document.getElementById('typing-element');
    if (element) {
      const elementPosition = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (elementPosition.top < windowHeight) {
        setShouldType(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="typing-element">
      <h1  style={{
          position: 'absolute',
          fontFamily: 'monospace',
          color: '#fff',
          fontSize: '45px',
          marginTop: '80px', // Ajuste conforme necessário
          marginLeft: '370px', // Ajuste conforme necessário 
        }}>{text}</h1>
    </div>
  );
};

export default TypingEffect;
