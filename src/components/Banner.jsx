import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = ({ images }) => {
  // Estado interno para controlar a imagem atual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funções de navegação
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Tratamento de erro caso não haja imagens
  if (!images || images.length === 0) {
    return <div className="h-[600px] flex items-center justify-center text-zinc-600 bg-black border border-zinc-900">No images provided for banner.</div>;
  }

  return (
    // Container do Banner com proporção Landscape (horizontal) restaurada
    <div className="relative h-[600px] md:h-[700px] w-full bg-black overflow-hidden flex items-center justify-center">
      
      {/* CAMADA 1: Imagens com Animação (AnimatePresence) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }} // Mantendo a opacidade suave para o fundo
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].title}
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </motion.div>
      </AnimatePresence>

      {/* CAMADA 2: Texto Overlay Estilizado (Pointer-events-none para não bloquear cliques) */}
      <div className="relative z-10 text-center pointer-events-none px-6">
        <motion.h2 
          key={`title-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-2xl"
        >
          {images[currentIndex].title}
        </motion.h2>
        <div className="w-16 h-[2px] bg-red-900 mx-auto mt-4 shadow-[0_0_10px_#7f1d1d]"></div>
      </div>

      {/* CAMADA 3: Botões de Navegação (Chevron Left/Right) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 z-30 p-2 bg-black/40 border border-white/5 hover:border-red-900 transition-all rounded-full group"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 z-30 p-2 bg-black/40 border border-white/5 hover:border-red-900 transition-all rounded-full group"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* CAMADA 4: Miniaturas de Seleção Direta (At the bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((img, idx) => (
          <button 
            key={img.id}
            onClick={() => setCurrentIndex(idx)}
            className={`w-10 h-14 border transition-all duration-300 ${
              currentIndex === idx 
                ? 'border-red-800 scale-110 shadow-[0_0_10px_#7f1d1d]' 
                : 'border-zinc-800 opacity-40 hover:opacity-100'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <img src={img.url} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;