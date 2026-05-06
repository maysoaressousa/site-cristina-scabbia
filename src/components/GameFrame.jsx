import React from 'react';

const GameFrame = ({ children }) => {
  return (
    // Removemos o overflow-hidden que estava cortando o conteúdo
    <div className="relative w-full mx-auto">
      {/* 
          Container simples sem bordas ou imagens de fundo.
          Isso garante que o Banner ocupe 100% do espaço sem ser esmagado.
      */}
      <div className="relative z-0"> 
        {children}
      </div>
    </div>
  );
};

export default GameFrame;