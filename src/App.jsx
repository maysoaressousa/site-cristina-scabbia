import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Gamepad2, Music } from 'lucide-react';
// 1. Array de imagens (Ajuste os nomes conforme seus arquivos em public/assets/)
const images = [
  { id: 1, url: '/assets/cristina1.jpg', title: 'The Shadow' },
  { id: 2, url: '/assets/cristina2.jpg', title: 'The Voice' },
  { id: 3, url: '/assets/cristina3.jpg', title: 'The Queen' },
  { id: 4, url: '/assets/cristina4.jpg', title: 'The Ritual' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-metal-black overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-metal-red">C. SCABBIA</h1>
        <div className="hidden md:flex gap-8 text-sm tracking-[0.3em] uppercase">
          <a href="#" className="hover:text-metal-red transition">Home</a>
          <a href="#game" className="hover:text-metal-red transition">The Game</a>
          <a href="#" className="hover:text-metal-red transition">Gallery</a>
        </div>
        <div className="flex gap-4">
  <Music size={20} className="cursor-pointer hover:text-metal-red" />
  <span className="text-xs border border-white/20 px-2 py-1 cursor-pointer hover:border-metal-red transition">FOLLOW</span>
</div>
      </nav>

      {/* INTERACTIVE BANNER */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img 
              src={images[currentIndex].url} 
              alt="Cristina Scabbia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-metal-black via-transparent to-metal-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-metal-black via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4">
          <motion.span 
            key={`sub-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-metal-red tracking-[0.5em] text-sm md:text-lg block mb-4"
          >
            LACUNA COIL PRESENTS
          </motion.span>
          <motion.h2 
            key={`title-${currentIndex}`}
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-bold mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
          >
            {images[currentIndex].title}
          </motion.h2>
          <motion.button 
             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
             className="border border-metal-red px-10 py-4 text-xs tracking-widest hover:bg-metal-red transition-all duration-500"
          >
            EXPLORE THE VOID
          </motion.button>
        </div>

        {/* Controls */}
        <button onClick={prevSlide} className="absolute left-8 z-30 p-4 border border-white/10 hover:border-metal-red rounded-full transition-all">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute right-8 z-30 p-4 border border-white/10 hover:border-metal-red rounded-full transition-all">
          <ChevronRight size={30} />
        </button>

        {/* Thumbnails Navigation */}
        <div className="absolute bottom-12 flex gap-4 z-30">
          {images.map((img, idx) => (
            <div 
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-20 h-28 cursor-pointer transition-all duration-500 border-2 overflow-hidden ${currentIndex === idx ? 'border-metal-red scale-110' : 'border-white/20 opacity-40 hover:opacity-100'}`}
            >
              <img src={img.url} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* GAME SECTION */}
      <section id="game" className="py-32 px-6 bg-smoke">
        <div className="max-w-6xl mx-auto border border-zinc-800 bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          <div className="flex-1 p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-metal-red mb-6">
              <Gamepad2 size={24} />
              <span className="tracking-[.3em] text-sm">LEVEL START</span>
            </div>
            <h3 className="text-5xl font-bold mb-6">THE METAL QUEST</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Mergulhe em um desafio rítmico onde a voz de Cristina é sua única guia. 
              Sincronize seus ataques, vença as sombras e suba ao trono do Heavy Metal.
            </p>
            <button className="w-fit flex items-center gap-4 bg-metal-red hover:bg-red-600 text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest transition-all">
              <Play fill="currentColor" /> Play Now
            </button>
          </div>

          <div className="flex-1 bg-zinc-900 min-h-[400px] relative group flex items-center justify-center border-l border-zinc-800">
            {/* Aqui é onde o jogo será injetado */}
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-metal-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-zinc-500 font-serif italic">Carregando o abismo...</p>
            </div>
            {/* Overlay estético */}
            <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

        </div>
      </section>

      <footer className="py-20 text-center border-t border-zinc-900">
        <p className="text-zinc-600 text-sm tracking-widest uppercase">
          &copy; 2026 Cristina Scabbia Site Project // Made with Metal
        </p>
      </footer>
    </div>
  );
}

export default App;