import React from 'react';
import { Shield } from 'lucide-react';

// Cadastro de Personagens - Atualizado com duas fileiras completas (8 integrantes)
const characters = [
  // --- PRIMEIRA FILEIRA ---
  {
    id: 1,
    name: 'The Shadow Queen',
    role: 'Cristina Scabbia',
    description: 'A soberana do abismo que canaliza o poder do Metal Cósmico através de sua voz rúnica.',
    imageUrl: '/assets/participante.png'
  },
  {
    id: 2,
    name: 'Void Seeker',
    role: 'Mage',
    description: 'Manipulador das energias escuras e guardião dos sussurros perdidos no vazio.',
    imageUrl: '/assets/participante.png'
  },
  {
    id: 3,
    name: 'Iron Vanguard',
    role: 'Warrior',
    description: 'Forjado nas chamas do heavy metal, protege o reino com sua armadura de puro aço.',
    imageUrl: '/assets/participante.png'
  },
  {
    id: 4,
    name: 'Ritualist',
    role: 'Cleric',
    description: 'Sacerdote que evoca as melodias ancestrais para curar aliados e amaldiçoar os opositores.',
    imageUrl: '/assets/participante.png'
  },
  
  // --- SEGUNDA FILEIRA (Nova) ---
  {
    id: 5,
    name: 'Nightstalker',
    role: 'Rogue',
    description: 'Mestre da furtividade que se move entre as sombras das runas, desferindo golpes fatais.',
    imageUrl: '/assets/char5.jpg'
  },
  {
    id: 6,
    name: 'Abyssal Siren',
    role: 'Bard',
    description: 'Sua melodia hipnótica distorce a realidade e despedaça a mente dos inimigos despreparados.',
    imageUrl: '/assets/char6.jpg'
  },
  {
    id: 7,
    name: 'Runebound Berserker',
    role: 'Barbarian',
    description: 'Consumido pela fúria do metal rúnico, ele quebra as linhas de defesa com força bruta.',
    imageUrl: '/assets/char7.jpg'
  },
  {
    id: 8,
    name: 'Void Weaver',
    role: 'Necromancer',
    description: 'Comanda as almas caídas e tece a escuridão do abismo para moldar o campo de batalha.',
    imageUrl: '/assets/char8.jpg'
  }
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