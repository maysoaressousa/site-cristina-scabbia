import React from 'react';
import { Music, Skull, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/5 font-serif">
      
      {/* LOGO COM ÍCONE DE CAVEIRA */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <Skull 
          size={22} 
          className="text-red-700 group-hover:rotate-12 transition-transform duration-500" 
        />
        <h1 className="text-xl font-bold tracking-[0.2em] text-zinc-100">
          CRISTINA <span className="text-red-700">SCABBIA</span>
        </h1>
      </div>
      
      {/* LINKS DE NAVEGAÇÃO (DESKTOP) */}
      <div className="hidden md:flex gap-10 text-[10px] tracking-[0.5em] uppercase">
        <a href="#" className="hover:text-red-700 transition-colors duration-300 relative group">
          Chronicles
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-700 group-hover:w-full transition-all duration-500"></span>
        </a>
        <a href="#game" className="hover:text-red-700 transition-colors duration-300 relative group">
          The Abyss
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-700 group-hover:w-full transition-all duration-500"></span>
        </a>
        <a href="#" className="hover:text-red-700 transition-colors duration-300 relative group">
          Manifesto
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-700 group-hover:w-full transition-all duration-500"></span>
        </a>
      </div>

      {/* ÁREA DE STATUS / ÚTIL */}
      <div className="flex items-center gap-4 text-zinc-500">
        {/* Ícone de Música com Pulsação Sutil */}
        <div className="relative">
          <Music 
            size={18} 
            className="hover:text-red-700 cursor-pointer transition-colors duration-300" 
          />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-700 rounded-full animate-ping opacity-75"></span>
        </div>

        <div className="h-4 w-[1px] bg-zinc-800 hidden md:block"></div>

        {/* Versão do Projeto (Estilo Game UI) */}
        <span className="hidden md:block text-[9px] tracking-widest uppercase italic text-zinc-600 font-sans">
          Enchantment <span className="text-red-900 font-bold">v1.0</span>
        </span>

        {/* Menu Mobile */}
        <Menu size={20} className="text-zinc-400 cursor-pointer md:hidden hover:text-red-700 transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;