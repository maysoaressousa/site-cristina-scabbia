import React from 'react';
import GameFrame from './GameFrame';

const GameSection = () => {
  return (
    <section id="game" className="space-y-8">
      {/* Título da Seção */}
      <div className="text-center">
        <h3 className="text-3xl font-serif tracking-[0.4em] text-zinc-100 uppercase">
          The Game
        </h3>
        <p className="text-[10px] tracking-[0.3em] text-red-700 font-bold uppercase mt-3">
          Shadow Queen's Ascension
        </p>
      </div>

      {/* Módulo do Jogo */}
      <GameFrame title="GAME MODULE">
        <div className="bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center relative p-6 md:p-12 overflow-hidden min-h-[550px]">
          
          {/* Efeito sutil de Scanlines retrô */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 opacity-20"></div>
          
          {/* Tela Centralizada do Scratch - TAMANHO EXPANDIDO PARA 750px */}
          <div className="relative z-10 w-full max-w-[750px] aspect-[485/402] bg-black shadow-[0_0_60px_rgba(0,0,0,0.95)] border border-zinc-900">
            <iframe className="w-full h-full" src="https://scratch.mit.edu/projects/1328056028/embed" allowtransparency="true" frameBorder="0" scrolling="no" allowFullScreen></iframe>
          </div>

        </div>
      </GameFrame>
    </section>
  );
};

export default GameSection;