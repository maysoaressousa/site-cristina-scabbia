import React from 'react';

const GameFrame = ({ children, title }) => {
  return (
    <div className="relative p-1 md:p-4 group">
      {/* Moldura de Metal Externa (Efeito de Profundidade) */}
      <div className="relative border-[3px] border-[#333] bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* Cantoneiras Decorativas (Runas/Metal) */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-900/50 z-20" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-900/50 z-20" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-900/50 z-20" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-900/50 z-20" />

        {/* Header da Moldura (Onde fica o título "Enter the Night") */}
        {title && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border-x border-b border-red-900/40 px-6 py-1 z-30 shadow-md">
            <span className="text-[10px] tracking-[0.5em] text-zinc-500 font-serif whitespace-nowrap">
              {title}
            </span>
          </div>
        )}

        {/* Gradiente Interno (Vinheta de Jogo) */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10" />

        {/* O Conteúdo que vai dentro (Imagens ou Jogo) */}
        <div className="relative z-0">
          {children}
        </div>
      </div>

      {/* Ornamentos Laterais (Aqueles morcegos/runas da imagem) */}
      {/* Você pode substituir as divs abaixo por <img> quando tiver os PNGs */}
      <div className="hidden lg:block absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-16 border-y border-l border-red-900/20 opacity-50" />
      <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-16 border-y border-r border-red-900/20 opacity-50" />
    </div>
  );
};

export default GameFrame;