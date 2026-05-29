import React, { useState } from 'react';
import { MAP_POINTS } from '../data';
import { MapPoint } from '../types';
import { Info, MapPin, Eye, Compass, History, HelpCircle } from 'lucide-react';

export default function MapExplorer() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'historico' | 'social' | 'ambiental'>('todos');
  const [selectedPointId, setSelectedPointId] = useState<string>(MAP_POINTS[0].id);

  const selectedPoint = MAP_POINTS.find(p => p.id === selectedPointId) || MAP_POINTS[0];

  const filteredPoints = MAP_POINTS.filter(p => {
    if (activeCategory === 'todos') return true;
    return p.category === activeCategory;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'historico': return 'bg-secondary text-white border-secondary-container';
      case 'social': return 'bg-primary text-white border-primary-container';
      case 'ambiental': return 'bg-green-700 text-white border-green-200';
      default: return 'bg-neutral text-on-surface border-outline-variant';
    }
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'historico': return 'Histórica';
      case 'social': return 'Social';
      case 'ambiental': return 'Ambiental / FUVAR';
      default: return 'General';
    }
  };

  return (
    <div className="bg-surface-container-low rounded-xl border border-outline-variant/30 p-6 md:p-8 paper-grain">
      
      {/* Intro banner */}
      <div className="max-w-3xl mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold inline-block mb-1">
          Cartografía del Territorio
        </span>
        <h3 className="font-display text-3xl font-bold text-primary mb-3">
          Arterias Históricas y Sociales de Guadalajara de Buga
        </h3>
        <p className="text-sm text-on-surface-variant text-justify">
          Las calles coloniales y pasajes no son un mero decorado neoclásico; constituyen el circuito latente de la economía de subsistencia. Filtra la cartografía por capas para explorar los puntos neurálgicos donde se cruzan la vida cotidiana, la memoria compartida y el circuito del reciclaje.
        </p>
      </div>

      {/* Tab filter controls */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-outline-variant/20 pb-4">
        <span className="text-xs uppercase tracking-wider font-bold text-on-surface-variant mr-2">Capas cartográficas:</span>
        <button
          onClick={() => setActiveCategory('todos')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
            activeCategory === 'todos' 
              ? 'bg-primary text-white' 
              : 'bg-surface hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/20'
          }`}
        >
          Ver Todas ({MAP_POINTS.length})
        </button>
        <button
          onClick={() => setActiveCategory('historico')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
            activeCategory === 'historico' 
              ? 'bg-secondary text-white' 
              : 'bg-surface hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/20'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-secondary block" />
          Histórica
        </button>
        <button
          onClick={() => setActiveCategory('social')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
            activeCategory === 'social' 
              ? 'bg-primary-container text-on-primary-container border border-primary' 
              : 'bg-surface hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/20'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-primary block" />
          Social
        </button>
        <button
          onClick={() => setActiveCategory('ambiental')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
            activeCategory === 'ambiental' 
              ? 'bg-green-800 text-white' 
              : 'bg-surface hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/20'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 block" />
          Ambiental (Bodegas)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Dynamic Stylized Vector Interactive SVG Map Node */}
        <div className="lg:col-span-7 bg-surface border border-outline-variant/35 rounded-lg h-[400px] md:h-[480px] relative overflow-hidden shadow-inner flex flex-col justify-between">
          
          {/* Stylized Cartesian Background Grid to look analog/blueprint */}
          <div className="absolute inset-0 z-0 opacity-[0.14] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Stylized Geography: Represents Buga streets layout cardstock-style */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Buga River (Río Guadalajara) flowing from East to West */}
              <path 
                d="M -50 480 C 200 460, 400 520, 600 490 C 700 470, 850 510, 900 500" 
                fill="none" 
                stroke="#163328" 
                strokeWidth="24" 
                strokeOpacity="0.15" 
              />
              <path 
                d="M -50 480 C 200 460, 400 520, 600 490 C 700 470, 850 510, 900 500" 
                fill="none" 
                stroke="#163328" 
                strokeWidth="4" 
                strokeOpacity="0.4" 
                strokeDasharray="5,5"
              />
              {/* Railway lines representing progress limit */}
              <line x1="180" y1="-50" x2="180" y2="650" stroke="#825510" strokeWidth="4" strokeOpacity="0.2" strokeDasharray="12,6" />
              <line x1="185" y1="-50" x2="185" y2="650" stroke="#825510" strokeWidth="1" strokeOpacity="0.3" />

              {/* Grid Roads of Buga Historic Center */}
              <line x1="-50" y1="120" x2="850" y2="120" stroke="#163328" strokeWidth="2" strokeOpacity="0.08" />
              <line x1="-50" y1="240" x2="850" y2="240" stroke="#163328" strokeWidth="2" strokeOpacity="0.08" />
              <line x1="-50" y1="360" x2="850" y2="360" stroke="#163328" strokeWidth="2" strokeOpacity="0.08" />
              
              <line x1="280" y1="-50" x2="280" y2="650" stroke="#163328" strokeWidth="2" strokeOpacity="0.08" />
              <line x1="440" y1="-50" x2="440" y2="650" stroke="#163328" strokeWidth="2" strokeOpacity="0.08" />
              <line x1="600" y1="-50" x2="600" y2="650" stroke="#163328" strokeWidth="2" strokeOpacity="0.08" />

              {/* Text labels on the map vector to emulate physical editorial map */}
              <text x="30" y="520" fill="var(--color-primary)" opacity="0.45" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.1em">RÍO GUADALAJARA</text>
              <text x="120" y="80" fill="var(--color-secondary)" opacity="0.45" fontSize="10" fontFamily="var(--font-mono)" transform="rotate(90 120 80)">VÍA FÉRREA LIMITROFE</text>
              <text x="520" y="140" fill="var(--color-on-surface-variant)" opacity="0.35" fontSize="10" fontFamily="var(--font-mono)">CRA. 15 (EJE AMBIENTAL)</text>
              <text x="520" y="260" fill="var(--color-on-surface-variant)" opacity="0.35" fontSize="10" fontFamily="var(--font-mono)">CALLE 7ª</text>
            </svg>
          </div>

          {/* Compass layout top left */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-surface/90 backdrop-blur-sm px-2.5 py-1.5 rounded-md border border-outline-variant/20 shadow-xs">
            <Compass className="text-secondary animate-pulse" size={16} />
            <span className="font-mono text-[9px] uppercase tracking-wider text-primary font-bold">ORIENTACIÓN BUGA COLONIAL</span>
          </div>

          {/* Active Points markers overlay */}
          <div className="absolute inset-0 z-20">
            {filteredPoints.map((point) => {
              const isActive = point.id === selectedPointId;
              return (
                <button
                  key={point.id}
                  onClick={() => setSelectedPointId(point.id)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus:outline-none"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    
                    {/* Ring highlight animation */}
                    {isActive ? (
                      <span className="absolute inline-flex h-12 w-12 rounded-full bg-secondary/20 animate-ping duration-1500" />
                    ) : (
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                    )}

                    {/* Marker solid dot pin */}
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-md ${
                      isActive 
                        ? 'bg-secondary text-white scale-110 border-white font-bold' 
                        : 'bg-primary text-white hover:bg-secondary border-surface'
                    }`}>
                      <MapPin size={15} />
                    </div>

                    {/* Simple tooltip box */}
                    <span className="absolute top-9 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-indigo-950 text-white text-[10px] font-bold px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 tracking-wider">
                      {point.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-surface/90 backdrop-blur-sm border-t border-outline-variant/20 relative z-10 text-[11px] font-mono text-on-surface-variant flex justify-between">
            <span>Visuales de Buga, Valle del Cauca</span>
            <span>Haz clic en un marcador para cargar metadatos</span>
          </div>

        </div>

        {/* Right Column: Editorial metadata and photos detailing the selected hito */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden shadow-sm">
          <div>
            <div className="h-44 overflow-hidden relative group">
              <img 
                src={selectedPoint.image} 
                alt={selectedPoint.title} 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply opacity-60 z-0" />
              
              <div className="absolute top-3 right-3 z-10">
                <span className={`text-[10px] uppercase font-bold tracking-widest leading-none px-2.5 py-1 rounded ${getCategoryColor(selectedPoint.category)}`}>
                  {getCategoryBadge(selectedPoint.category)}
                </span>
              </div>
              
              <div className="absolute bottom-3 left-4 z-10 text-white">
                <span className="text-[9px] uppercase tracking-wider font-mono text-secondary-container font-semibold">COFRE DE CRÓNICAS</span>
                <h4 className="font-display font-bold text-xl leading-snug">{selectedPoint.title}</h4>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-serif italic text-secondary block font-bold">
                  {selectedPoint.subtitle}
                </span>
                <p className="font-sans text-sm text-[15px] font-semibold text-primary">
                  {selectedPoint.description}
                </p>
              </div>

              <div className="text-xs text-on-surface-variant leading-relaxed text-justify space-y-3 pt-3 border-t border-outline-variant/10">
                <p>{selectedPoint.details}</p>
              </div>
            </div>
          </div>

          {/* Testimonial Quote in margin footer */}
          {selectedPoint.quote && (
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/15 flex gap-3.5 items-start">
              <span className="material-symbols-outlined text-secondary pt-0.5 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <div>
                <p className="font-serif italic text-xs leading-relaxed text-on-surface">
                  "{selectedPoint.quote}"
                </p>
                <span className="text-[10px] uppercase font-bold tracking-wider text-secondary font-sans block mt-1">
                  — {selectedPoint.quoteAuthor}
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
