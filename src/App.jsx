import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Gamepad2, Music, Skull } from 'lucide-react';
import GameFrame from './components/GameFrame';
import Navbar from './components/Navbar';

const images = [
  { id: 1, url: '/assets/cristina1.jpg', title: 'The Shadow Queen' },
  { id: 2, url: '/assets/cristina2.jpg', title: 'Ritual of Sound' },
  { id: 3, url: '/assets/cristina3.jpg', title: 'Gothic Harmony' },
  { id: 4, url: '/assets/cristina4.jpg', title: 'Void Whispers' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans">
      
      <Navbar />

      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        
        {/* BANNER LANDSCAPE */}
        <section className="relative">
          <GameFrame title="NOW ENTERING THE NIGHT">
            <div className="relative h-[400px] md:h-[550px] w-full bg-black overflow-hidden flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
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

              <div className="relative z-10 text-center pointer-events-none px-6">
                <motion.h2 
                  key={`title-${currentIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-2xl"
                >
                  {images[currentIndex].title}
                </motion.h2>
                <div className="w-16 h-[2px] bg-red-900 mx-auto mt-4"></div>
              </div>

              {/* Botões de Navegação */}
              <button onClick={prevSlide} className="absolute left-4 z-30 p-2 bg-black/40 border border-white/5 hover:border-red-900 transition-all rounded-full">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-4 z-30 p-2 bg-black/40 border border-white/5 hover:border-red-900 transition-all rounded-full">
                <ChevronRight size={24} />
              </button>

              {/* Miniaturas */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {images.map((img, idx) => (
                  <button 
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-10 h-14 border transition-all ${
                      currentIndex === idx ? 'border-red-800 scale-110' : 'border-zinc-800 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </GameFrame>
        </section>

        {/* SEÇÃO DO JOGO (Também simplificada) */}
        <section id="game" className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-serif tracking-[0.4em] text-zinc-100 uppercase">The Quest</h3>
          </div>

          <GameFrame title="GAME MODULE">
            <div className="grid lg:grid-cols-3 min-h-[400px]">
              <div className="p-10 bg-[#080808] flex flex-col justify-center gap-6 border-r border-zinc-900">
                <div className="flex items-center gap-3 text-red-800">
                  <Gamepad2 size={18} />
                  <span className="text-[10px] tracking-widest font-bold uppercase tracking-tighter">System Ready</span>
                </div>
                <h4 className="text-2xl font-serif uppercase">Metal Symphony</h4>
                <button className="bg-red-900 hover:bg-red-800 text-white py-4 font-serif text-[10px] tracking-[0.4em] transition-all">
                  START MISSION
                </button>
              </div>
              <div className="lg:col-span-2 bg-zinc-950 flex items-center justify-center italic text-zinc-700 text-xs tracking-widest uppercase">
                Awaiting Engine...
              </div>
            </div>
          </GameFrame>
        </section>

      </main>

      <footer className="py-12 border-t border-zinc-900 text-center opacity-40">
        <p className="text-[9px] tracking-[0.5em] uppercase font-serif">
          Cristina Scabbia // 2026
        </p>
      </footer>
    </div>
  );
}

export default App;