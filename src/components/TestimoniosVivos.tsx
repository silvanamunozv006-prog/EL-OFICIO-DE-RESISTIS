import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RECYCLERS } from '../data';
import AudioPlayer from './AudioPlayer';
import { 
  Camera, 
  MessageSquare, 
  ChevronRight, 
  ArrowLeft, 
  Quote, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  HeartHandshake,
  User,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';

export default function TestimoniosVivos() {
  const mauricioProfile = RECYCLERS.find(r => r.id === 'mauricio-peraza') || RECYCLERS[2];
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Mauricio's chronicled photo narrative
  const mauricioPhotos = [
    {
      src: '/input_file_1.png',
      alt: 'Mauricio Peraza en entrevista de calle',
      caption: 'Rostro de la Resistencia',
      description: 'Mauricio durante el registro de su testimonio oral en la Comuna 4. A sus 32 años, representa a la generación de relevo que defiende un oficio tradicional con dignidad, reclamando derechos y reconocimiento social para los recicladores autónomos de Buga.',
      badge: 'Testimonio'
    },
    {
      src: '/input_file_2.png',
      alt: 'Mauricio empujando su carreta de madera',
      caption: 'Fuerza de Arrastre',
      description: 'Mauricio empujando su carreta o "zorra" cargada con bolsas de plástico frente a la icónica pared roja del centro histórico. Una lucha diaria contra el pavimento ardiente bajo el sol de Guadalajara de Buga.',
      badge: 'Arduo Labor'
    },
    {
      src: '/input_file_4.png',
      alt: 'Mauricio haciendo separación de materiales',
      caption: 'La Cirugía del Residuo',
      description: 'Seleccionando minuciosamente botellas de plástico PET de un saco verde. Un proceso quirúrgico de clasificación en plena calle que requiere experiencia para distinguir polímeros al tacto y evitar fragmentos cortantes.',
      badge: 'Clasificación'
    },
    {
      src: '/input_file_5.png',
      alt: 'Mauricio ordenando cartones en la calle',
      caption: 'De Rodillas ante el Detalle',
      description: 'Mauricio trabaja arrodillado en la acera junto a su medio de transporte alternativo, asegurando que cada lámina de cartón esté libre de humedad y suciedad. El cartón seco cotiza a la mitad del precio si se moja.',
      badge: 'Cuidado Físico'
    },
    {
      src: '/input_file_3.png',
      alt: 'Detalle de la carreta de madera cargada',
      caption: 'El Vehículo del Sobreviviente',
      description: 'Vista detallada del carro de madera, herrajes y llantas industriales. Es una herramienta rústica heredada de su padre, capaz de soportar hasta un cuarto de tonelada (250 kg) de material compactado.',
      badge: 'Tecnología Rústica'
    },
    {
      src: '/input_file_0.png',
      alt: 'Punto de recolección en calle de Buga',
      caption: 'El Umbral del Descarte',
      description: 'Montones de cartón y múltiples bolsas de reciclaje descartadas sin clasificar en una esquina. Así inician las jornadas de Mauricio: desenredando y recuperando valor entre el desorden de los hogares urbanos.',
      badge: 'Punto Cero'
    }
  ];

  // Additional street quotes from other community members in Buga
  const communityVoices = [
    {
      name: 'Doña Rosaura Ordóñez',
      age: 64,
      neighborhood: 'El Albergue',
      quote: 'Si Mauricio o don Omar no pasaran a las 6:00 a.m., toda esta basura iría directo al camión de aseo y terminaría enterrada en el relleno de Yotoco. Ellos salvan al planeta a diario, pero la gente finge no verlos.',
      role: 'Vecina Colaboradora'
    },
    {
      name: 'Don Carlos Julio Bedoya',
      age: 48,
      neighborhood: 'Serranía',
      quote: 'La gente bota el vidrio roto suelto en la bolsa común. Un día ayudé a Mauricio a curarse un corte profundo en la mano por culpa de una botella rota. Deberíamos tener más empatía y entregarles las cosas ya limpias y separadas.',
      role: 'Pulpero y Comerciante'
    },
    {
      name: 'Mónica Valencia',
      age: 42,
      neighborhood: 'Comuna 1',
      quote: 'Ver a muchachos jóvenes como Mauricio defender la calle nos da esperanza de que el gremio no va a morir. Necesitamos que las alcaldías les paguen la tarifa del Decreto de forma justa y oportuna.',
      role: 'Líder Gremial de FUVAR'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Editorial Header Cover */}
      <section className="bg-primary text-white py-16 px-6 md:px-12 rounded-2xl relative overflow-hidden shadow-md">
        {/* Abstract background graphics representing paper fibers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container-low to-secondary/30 mix-blend-overlay opacity-30 select-none pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Rostros del reciclaje
          </h1>

          <p className="font-serif text-lg text-slate-100 max-w-2xl leading-relaxed text-justify">
            La transición ecológica no ocurre en decretos impresos en papel bond blanco; ocurre en el esfalto bugueño, empujando madera pesada y separando el polietileno en las aceras bajo la brisa caliente. Presentamos a <strong>Mauricio</strong> y los ecos orales de su lucha habitual.
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-white/15 max-w-lg">
            <span className="material-symbols-outlined text-secondary text-2xl">photo_camera</span>
            <div>
              <p className="text-xs font-mono text-slate-300">Fotografías y testimonios in situ:</p>
              <p className="text-xs font-bold text-white">Guadalajara de Buga, Comuna 4 & Sector Histórico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Mauricio Peraza Profile Breakdown */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Left Side: Photo Portrait and Interview Audio */}
        <div className="md:col-span-5 space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-outline-variant/30 shadow-md group">
            <img 
              src="/input_file_1.png" 
              alt="Mauricio Peraza retrato" 
              className="w-full h-[380px] object-cover filter contrast-[1.03] grayscale transition-all duration-500 group-hover:grayscale-0 select-none cursor-pointer"
              referrerPolicy="no-referrer"
              onClick={() => setSelectedPhotoIndex(0)}
            />
            <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-xs text-white p-3 rounded rounded-sm">
              <span className="font-mono text-[9px] uppercase text-secondary font-bold tracking-widest block mb-0.5">Retrato Principal</span>
              <h4 className="text-sm font-bold font-sans">Mauricio Peraza, 32 años</h4>
              <p className="text-[10px] text-slate-300 italic font-serif">Reciclador Autónomo de Buga</p>
            </div>
            
            <div className="absolute top-4 right-4 bg-primary text-white rounded-full p-2 text-xs" title="Ampliar imagen">
              <span className="material-symbols-outlined text-sm">fullscreen</span>
            </div>
          </div>

          {/* Core metadata card */}
          <div className="bg-surface-container p-5 rounded-lg border border-outline-variant/20 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-outline-variant/10 text-xs">
              <span className="font-mono font-bold text-secondary uppercase">Estado Gremial</span>
              <span className="bg-orange-50 text-orange-850 px-2.5 py-1 rounded-sm text-[10px] font-bold">INDEPENDIENTE AUTOMÁTICO</span>
            </div>
            
            <div className="space-y-2 text-xs text-on-surface-variant leading-relaxed">
              <p className="text-justify">
                <strong>Orígenes:</strong> Heredó el trayecto y la carreta de su padre, un ex-trabajador fabril que recurrió al reciclaje para educarlo tras los cierres industriales del departamento en la década pasada.
              </p>
              <p className="text-justify">
                <strong>Especialidad:</strong> Metales (cobre, bronce, silicio), PET transparente y cartón corrugado de alto gramaje para tiendas de autopartes.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative Body and Quote Block */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block">Crónica Oral Registrada</span>
            <h2 className="font-display text-3xl font-bold text-primary">"La calle enseña todo, menos a rendirse"</h2>
            <div className="w-12 h-0.5 bg-secondary" />
          </div>

          <div className="font-serif text-base text-on-surface leading-relaxed text-justify gap-4 space-y-4">
            <p>
              A diferencia del reciclador cooperado de FUVAR, Mauricio no posee chaleco de color llamativo ni botas robustas entregadas por presupuesto oficial. Utiliza una camisa amarilla desgastada y una fanny pack cruzada en el pecho donde guarda una libreta artesanal, llaves de cierres y un gancho de tender ropa para sostener las fundas limpias de plástico.
            </p>

            <blockquote className="bg-primary/5 rounded-r-lg border-l-4 border-secondary p-5 my-6 italic font-display text-[15px] sm:text-base text-primary font-semibold leading-relaxed relative">
              <Quote className="absolute top-3 right-3 text-secondary/15 w-12 h-12 -z-0 pointer-events-none" />
              <p className="relative z-10 text-justify">
                "La gente cree que uno rasga las bolsas por maldad o por dejar reguero. Uno abre con cuidado porque cada segundo cuenta. Si el carro de aseo viene atrás, se lleva el sustento de la comida de mi vieja. Aprendemos a leer las bolsas por fuera: si se ve plástico de gaseosa limpio, ahí meto la mano con orgullo."
              </p>
              <cite className="block text-[10px] uppercase font-mono font-bold tracking-widest text-secondary mt-3 not-italic">
                — Mauricio Peraza
              </cite>
            </blockquote>

            <p className="text-sm text-on-surface-variant text-justify">
              Mauricio camina un promedio de <strong>16 kilómetros diarios</strong> empujando un carro que pesa vacío más de 45 kilos, y que al concluir el recorrido acaricia la cifra de los 180 kilos. La volatilidad del mercado del metal representa su mayor angustia: el cobre, que un lunes se paga a $12.000 pesos la libra en Buga, puede derrumbarse a $8.000 al siguiente día si el intermediario mayorista cambia la tarifa del galpón aduciendo fletes elevados.
            </p>
          </div>

          {/* Real Audio Player instantiation for Mauricio */}
          <div className="mt-8">
            <AudioPlayer profile={mauricioProfile} />
          </div>
        </div>

      </section>

      {/* Grid Chronology Flow of Images */}
      <section className="space-y-8 max-w-5xl mx-auto pt-8 border-t border-outline-variant/20">
        
        <div className="space-y-2 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">Lente Documental</span>
          <h3 className="font-display text-2xl font-bold text-primary">Un Día en los Zapatos de Mauricio</h3>
          <p className="text-xs text-on-surface-variant max-w-2xl text-justify md:text-left">
            Haz clic en cualquiera de estas fotografías capturadas durante la investigación en territorio para ampliar y leer la crónica sociocultural de cada escena.
          </p>
        </div>

        {/* 3x2 Bento Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mauricioPhotos.map((photo, index) => (
            <div 
              key={index}
              onClick={() => setSelectedPhotoIndex(index)}
              className="bg-surface border border-outline-variant/25 rounded-md overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white font-mono text-[8px] uppercase tracking-wider px-2 py-1 rounded">
                  {photo.badge}
                </span>
                
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-surface text-primary p-2 rounded-full shadow-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Ampliar
                    <ExternalLink size={11} />
                  </span>
                </div>
              </div>
              
              <div className="p-4 space-y-1 bg-surface-container-low">
                <h4 className="font-display font-bold text-sm text-primary group-hover:text-secondary transition-colors truncate">
                  {photo.caption}
                </h4>
                <p className="text-[11px] text-on-surface-variant leading-relaxed line-clamp-2 text-justify">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Structural Realities of independent recycling: Fact Cards */}
      <section className="bg-surface-container-high/60 rounded-xl p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="space-y-2">
          <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center">
            <ShieldAlert size={20} />
          </div>
          <h4 className="font-display font-bold text-primary text-base">Riesgos Sanitarios</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
            Los recicladores independientes se enfrentan a microorganismos patógenos, jeringas de insulina descartadas incorrectamente y vidrios rotos sin envolver, provocando cortes crónicos y tétanos sin seguro social activo.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center">
            <TrendingUp size={20} />
          </div>
          <h4 className="font-display font-bold text-primary text-base">Especulación de Báscula</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
            Las denominadas "chatarrerías de paso" calibran de forma fraudulenta sus pesas analógicas, restando un promedio estimado de entre el 10% y el 15% del tonelaje neto aportado por el reciclador de calle.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center">
            <HeartHandshake size={20} />
          </div>
          <h4 className="font-display font-bold text-primary text-base">El Rol del Ciudadano</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
            Separar el residuo seco de los restos de comida, rotular las botellas rotas con cinta adhesiva y entregar el cartón amarrado ahorra hasta un 40% del tiempo de búsqueda e impide el deterioro de la salud de Mauricio.
          </p>
        </div>

      </section>

      {/* Voice of the Neighbors sliders */}
      <section className="py-8 max-w-5xl mx-auto space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="font-mono text-xs uppercase text-secondary font-bold">Ecos Colectivos</span>
          <h3 className="font-display text-2xl font-bold text-primary">La Comunidad Opina</h3>
          <p className="text-xs text-on-surface-variant">Voces vecinas del municipio de Buga analizan el impacto diario de los recicladores de calle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityVoices.map((voice, idx) => (
            <div key={idx} className="bg-surface border border-outline-variant/15 rounded-lg p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[24px] text-secondary font-serif leading-none block">“</span>
                <p className="text-xs text-on-surface italic leading-relaxed text-justify">
                  {voice.quote}
                </p>
              </div>
              <div className="border-t border-outline-variant/10 pt-3 flex justify-between items-center text-[10px]">
                <div>
                  <h6 className="font-bold text-primary font-sans">{voice.name}, {voice.age} años</h6>
                  <span className="text-on-surface-variant font-mono">{voice.neighborhood}</span>
                </div>
                <span className="bg-primary/5 text-primary px-2 py-0.5 rounded uppercase font-bold text-[8px]">
                  {voice.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Modal Lightbox */}
      {selectedPhotoIndex !== null && (
        <div 
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in cursor-zoom-out select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-surface max-w-3xl w-full rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col relative"
          >
            {/* Close trigger button */}
            <button 
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white hover:text-secondary rounded-full p-2 transition-colors duration-150 z-10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg block">close</span>
            </button>

            {/* Modal Body image */}
            <div className="relative h-[250px] sm:h-[400px] bg-black">
              <img 
                src={mauricioPhotos[selectedPhotoIndex].src} 
                alt={mauricioPhotos[selectedPhotoIndex].alt} 
                className="w-full h-full object-contain filter contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal footer descriptions */}
            <div className="p-6 space-y-4 bg-surface">
              <div className="flex items-center justify-between border-b border-outline-variant/10 pb-2">
                <div>
                  <span className="font-mono text-[9px] uppercase text-secondary font-bold tracking-widest block">
                    CAPÍTULO {selectedPhotoIndex + 1} DE {mauricioPhotos.length}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary">
                    {mauricioPhotos[selectedPhotoIndex].caption}
                  </h3>
                </div>
                <span className="bg-primary-container text-on-primary-container font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-sm">
                  {mauricioPhotos[selectedPhotoIndex].badge}
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed text-justify">
                {mauricioPhotos[selectedPhotoIndex].description}
              </p>

              {/* Slider controls inside modal */}
              <div className="flex justify-between items-center pt-2 border-t border-outline-variant/10">
                <button 
                  onClick={() => setSelectedPhotoIndex((prev) => prev !== null ? (prev - 1 + mauricioPhotos.length) % mauricioPhotos.length : null)}
                  className="theme-btn border border-outline-variant/20 hover:bg-surface-container rounded p-2 text-primary font-bold text-xs uppercase flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                  Anterior
                </button>
                <button 
                  onClick={() => setSelectedPhotoIndex((prev) => prev !== null ? (prev + 1) % mauricioPhotos.length : null)}
                  className="theme-btn border border-outline-variant/20 hover:bg-surface-container rounded p-2 text-primary font-bold text-xs uppercase flex items-center gap-1 cursor-pointer"
                >
                  Siguiente
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
