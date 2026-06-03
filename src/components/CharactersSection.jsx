import React from 'react';
import { Shield } from 'lucide-react';

// Cadastro de Personagens - Atualizado com duas fileiras completas (8 integrantes)
const characters = [
  // --- PRIMEIRA FILEIRA ---
  {
    id: 1,
    name: 'Mila',
    role: 'The Alchimist',
    description: 'Creator and mastermind of the game.',
    imageUrl: '/assets/1.png'
  },
  {
    id: 2,
    name: 'Mayara Piercer',
    role: 'May the Dreadful',
    description: 'Creator and mastermind behind the website. Creator of the Instagram account @ACERVOCRISTINASCABBIA.',
    imageUrl: '/assets/2.png'
  },
  {
    id: 3,
    name: 'Caron Dittel (Carontte)',
    role: 'Carrier of Souls',
    description: 'Navigator of twilight currents, she steers lost dreams through the veil of death.',
    imageUrl: '/assets/3.png'
  },
  {
    id: 4,
    name: 'Flavia',
    role: 'Cleric',
    description: '@flavia__lc',
    imageUrl: '/assets/4.png'
  },
  
  // --- SEGUNDA FILEIRA (Nova) ---
  {
    id: 5,
    name: 'Masha Wolff',
    role: 'Rogue',
    description: '@mashalc',
    imageUrl: '/assets/5.png'
  },
  {
    id: 6,
    name: 'Myke Dyer',
    role: 'Bard',
    description: '@mikey_dyer',
    imageUrl: '/assets/6.png'
  },
  {
    id: 7,
    name: 'Bruna Biagi',
    role: 'Barbarian',
    description: '@bru.biagi',
    imageUrl: '/assets/7.png'
  },
  {
    id: 8,
    name: 'Josh White',
    role: 'Josh The Green Monster',
    description: '@superjosh4424',
    imageUrl: '/assets/8.png'
  },
  {
    id: 9,
    name: 'HK',
    role: 'HK, Wielder of The Stylus Pen Artist',
    description: 'A traveling cartoon, HK utilizes the power of her pen to draw her way to victory.',
    imageUrl: '/assets/9.png'
  },
  {
    id: 10,
    name: 'Raffaella Fusi',
    role: 'Necromancer',
    description: '@raffy.roc',
    imageUrl: '/assets/10.png'
  },
  {
    id: 11,
    name: 'Opeth Gurl',
    role: 'Phoenix the Conjurer',
    description: 'The conjurer of hope and demise and all that falls in between, painting wishes into realities. @opethgurling.',
    imageUrl: '/assets/11.png'
  },
  {
    id: 12,
    name: 'Corinne',
    role: 'Ruler of Slippers @corinne.486',
    description: 'Carrier of the iconic Italian throwing weapon',
    imageUrl: '/assets/12.png'
  },
];

const CharactersSection = () => {
  return (
    <section id="characters" className="space-y-12 py-12">
      {/* Título da Seção */}
      <div className="text-center">
        <h3 className="text-3xl font-serif tracking-[0.4em] text-zinc-100 uppercase">
          The Alliance
        </h3>
        <p className="text-[10px] tracking-[0.3em] text-red-700 font-bold uppercase mt-3">
          Character Select // Active Party
        </p>
      </div>

      {/* Grid Responsiva: Mantém 4 por fileira perfeitamente alinhados no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <div 
            key={char.id} 
            className="bg-black/40 backdrop-blur-sm border border-zinc-900 hover:border-red-900/50 transition-all duration-500 group flex flex-col overflow-hidden"
          >
            {/* Espaço da Foto */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950 border-b border-zinc-900">
              <img 
                src={char.imageUrl} 
                alt={char.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <span className="absolute bottom-3 left-4 text-[9px] font-sans font-bold tracking-widest text-red-500 uppercase flex items-center gap-1">
                <Shield size={10} /> {char.role}
              </span>
            </div>

            {/* Nome e Descrição */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-lg font-serif font-bold text-zinc-200 tracking-wide group-hover:text-red-500 transition-colors">
                  {char.name}
                </h4>
                <div className="w-8 h-[1px] bg-red-900/60 my-2 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {char.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharactersSection;