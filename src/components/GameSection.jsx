import React from 'react';
import { Play, Gamepad2 } from 'lucide-react';
import GameFrame from './GameFrame';

const GameSection = () => {
  return (
    <section id="game" className="space-y-8">
      {/* Título da Seção */}
      <div className="text-center">
        <h3 className="text-3xl font-serif tracking-[0.4em] text-zinc-100 uppercase">
          The Quest
        </h3>
        <p className="text-[10px] tracking-[0.3em] text-red-700 font-bold uppercase mt-3">
          Shadow Queen's Ascension
        </p>
      </div>

      {/* Módulo do Jogo com Moldura */}
      <GameFrame title="GAME MODULE">
        <div className="grid lg:grid-cols-3 min-h-[400px]">
          
          {/* Painel de Controle Lateral */}
          <div className="p-10 bg-[#080808] flex flex-col justify-center gap-6 border-r border-zinc-900">
            <div className="flex items-center gap-3 text-red-800">
              <Gamepad2 size={18} />
              <span className="text-[10px] tracking-widest font-bold uppercase">System Ready</span>
            </div>
            
            <h4 className="text-2xl font-serif uppercase text-zinc-200">Metal Symphony</h4>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-sans italic">
              Sincronize seus movimentos com os vocais de Cristina para banir as sombras.
            </p>

            <button className="group relative bg-red-900 hover:bg-red-800 text-white py-4 font-serif text-[10px] tracking-[0.4em] transition-all border border-red-700/50 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Play size={12} fill="currentColor" /> START MISSION
              </span>
              <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Área do Engine (Visualizador) */}
          <div className="lg:col-span-2 bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Efeito de Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10"></div>
            
            <div className="text-center z-20">
              <div className="w-12 h-12 border-b-2 border-red-800 rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-[9px] font-serif tracking-widest text-zinc-700 uppercase">
                Awaiting Engine Signal...
              </p>
            </div>
          </div>
        </div>
      </GameFrame>
    </section>
  );
};

export default GameSection;