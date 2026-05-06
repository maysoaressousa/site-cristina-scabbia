import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import GameSection from './components/GameSection';
import GameFrame from './components/GameFrame';

const images = [
  { id: 1, url: '/assets/banner-Cristina Scabbia.png'},
  { id: 2, url: '/assets/frame-runas.png', title: 'Eternal Echoes' },
  { id: 3, url: '/assets/frame-runas.png', title: 'Void Ritual' },
];

function App() {
  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-red-900 relative">
      
      {/* BACKGROUND FIXO - Otimizado para imagens grandes */}
      <div 
        className="fixed inset-0 z-[-1] bg-black"
        style={{ 
          backgroundImage: "url('/assets/background-geral.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Ajuda no desempenho de imagens grandes
          filter: "brightness(0.3) contrast(1.1)" 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-20 space-y-24 relative z-10">
        {/* Container do Banner com largura máxima controlada para não esticar demais */}
        <section className="max-w-[1400px] mx-auto px-4">
          <GameFrame>
            <Banner images={images} />
          </GameFrame>
        </section>

        <div className="max-w-7xl mx-auto px-4">
          <GameSection />
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-900/50 text-center bg-black/80">
        <p className="text-[9px] tracking-[0.5em] uppercase font-serif text-zinc-500">
          Cristina Scabbia // 2026
        </p>
      </footer>
    </div>
  );
}

export default App;