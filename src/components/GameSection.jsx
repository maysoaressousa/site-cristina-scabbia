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

      {/* Módulo do Jogo - Painel lateral removido */}
      <GameFrame title="GAME MODULE">
        <div className="bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center relative p-6 md:p-12 overflow-hidden min-h-[480px]">
          
          {/* Efeito sutil de Scanlines retrô */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 opacity-20"></div>
          
          {/* Tela Centralizada do Scratch */}
          <div className="relative z-10 w-full max-w-[485px] aspect-[485/402] bg-black shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-zinc-900">
            <iframe 
              src="https://scratch.mit.edu/projects/1326232331/embed" 
              allowTransparency="true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              allowFullScreen
              title="Scratch Game Module"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </GameFrame>
    </section>
  );
};

export default GameSection;