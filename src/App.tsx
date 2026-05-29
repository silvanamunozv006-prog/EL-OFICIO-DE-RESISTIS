import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RECYCLERS, 
  MATERIALS, 
  MAP_POINTS, 
  TIMELINE 
} from './data';
import { RecyclerProfile } from './types';
import AudioPlayer from './components/AudioPlayer';
import ValueGapCalculator from './components/ValueGapCalculator';
import MapExplorer from './components/MapExplorer';
import TestimoniosVivos from './components/TestimoniosVivos';
import Estigmatizacion from './components/Estigmatizacion';
import { 
  BookOpen, 
  Map, 
  Calculator, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  Layers, 
  Heart, 
  Scale, 
  ChevronRight, 
  FileText, 
  Check, 
  AlertTriangle,
  Flame,
  Volume2,
  CheckCircle2,
  Camera
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'cronica' | 'cartografia' | 'simulador' | 'testimonios' | 'estigmatizacion'>('cronica');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedRecycler, setSelectedRecycler] = useState<RecyclerProfile>(RECYCLERS[0]);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [institutionTab, setInstitutionTab] = useState<'fundamentos' | 'cooperativas'>('fundamentos');

  // Track page scroll percentage for the custom reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscriptionSuccess(true);
      setTimeout(() => {
        setShowNewsletterModal(false);
        setSubscriptionSuccess(false);
        setSubscribedEmail('');
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      
      {/* 1. Sticky Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-secondary z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Sticky Editorial Top Navbar */}
      <nav className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 px-4 md:px-12 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl text-primary tracking-tight select-none">
              Narrativa Terrosa
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-secondary font-bold -mt-1 block">
              Buga • Periodismo Lento
            </span>
          </div>
        </div>

        {/* Navigation Tabs (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 bg-surface-container-low p-1 rounded-md border border-outline-variant/15">
          <button 
            onClick={() => setActiveTab('cronica')}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cronica' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface-container/30 hover:text-primary'
            }`}
          >
            <BookOpen size={13} />
            Recicladores
          </button>
          <button 
            onClick={() => setActiveTab('cartografia')}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cartografia' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface-container/30 hover:text-primary'
            }`}
          >
            <Map size={13} />
            Cartografía de Buga
          </button>
          <button 
            onClick={() => setActiveTab('simulador')}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulador' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface-container/30 hover:text-primary'
            }`}
          >
            <Calculator size={13} />
            La Brecha (Calculadora)
          </button>
          <button 
            onClick={() => setActiveTab('testimonios')}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'testimonios' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface-container/30 hover:text-primary'
            }`}
          >
            <Camera size={13} />
            Rostros del reciclaje
          </button>
          <button 
            onClick={() => setActiveTab('estigmatizacion')}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'estigmatizacion' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface-container/30 hover:text-primary'
            }`}
          >
            <AlertTriangle size={13} />
            Estigmas
          </button>
        </div>

        {/* Subscribe Action Button */}
        <div>
          <button 
            onClick={() => setShowNewsletterModal(true)}
            className="bg-primary hover:bg-primary-container text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-xs"
          >
            Suscribirse
          </button>
        </div>
      </nav>

      {/* Navigation Tabs (Mobile Bottom Bar for fast access) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-outline-variant/35 grid grid-cols-5 py-1">
        <button 
          onClick={() => { setActiveTab('cronica'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 text-[10px] uppercase font-bold tracking-tight ${
            activeTab === 'cronica' ? 'text-secondary-container bg-primary/10 font-bold' : 'text-on-surface-variant'
          }`}
        >
          <BookOpen size={16} className="mb-0.5" />
          <span>Recicladores</span>
        </button>
        <button 
          onClick={() => { setActiveTab('cartografia'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 text-[10px] uppercase font-bold tracking-tight ${
            activeTab === 'cartografia' ? 'text-secondary-container bg-primary/10 font-bold' : 'text-on-surface-variant'
          }`}
        >
          <Map size={16} className="mb-0.5" />
          <span>Mapa</span>
        </button>
        <button 
          onClick={() => { setActiveTab('simulador'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 text-[10px] uppercase font-bold tracking-tight ${
            activeTab === 'simulador' ? 'text-secondary-container bg-primary/10 font-bold' : 'text-on-surface-variant'
          }`}
        >
          <Calculator size={16} className="mb-0.5" />
          <span>Brecha</span>
        </button>
        <button 
          onClick={() => { setActiveTab('testimonios'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 text-[10px] uppercase font-bold tracking-tight ${
            activeTab === 'testimonios' ? 'text-secondary-container bg-primary/10 font-bold' : 'text-on-surface-variant'
          }`}
        >
          <Camera size={16} className="mb-0.5" />
          <span>Rostros</span>
        </button>
        <button 
          onClick={() => { setActiveTab('estigmatizacion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center py-1 text-[10px] uppercase font-bold tracking-tight ${
            activeTab === 'estigmatizacion' ? 'text-secondary-container bg-primary/10 font-bold' : 'text-on-surface-variant'
          }`}
        >
          <AlertTriangle size={16} className="mb-0.5" />
          <span>Estigmas</span>
        </button>
      </div>

      {/* 3. Main Container Area */}
      <main className="flex-1 pb-16 md:pb-0">
        <AnimatePresence mode="wait">
          {activeTab === 'cronica' && (
            <motion.div
              key="cronica"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              
              {/* 3.1 Hero Longform Title Cover Banner */}
              <header className="relative w-full h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden">
                <img 
                  alt="Recicladores en Buga" 
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-[0.7] contrast-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOzA8oXAFFiohiXG7tK_mHwcOMztZzDd_x9uh-L0CyHihVdeEXDBJQxOBwSfQnzZzy7jPdZi6CGnc5oKSDrIL4mIOm2S8iIkzZxJxi1yUXAjR06TRJiH-DzO31WkZrL9UvGSPBjo_X5KBdXF9nPCMJmeTl8JJQbT66t4VskSguX16FbLSPyQy-rLi6Z0LMFceWcXlVDMNhiR4ruNC7ADzocrMCy9HplJW0-KYzXJwo-LPry9hHZ8UxNplb1suoEh6-oCHMXl87AW4"
                  referrerPolicy="no-referrer"
                />
                {/* Visual tactile screen tint layer to honor the forest and paper theme */}
                <div className="absolute inset-0 bg-primary/75 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-15" />
                
                <div className="relative z-25 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-secondary-container bg-white/10 px-3.5 py-1.5 rounded-full font-bold mb-6">
                    Comunicación, cultura y sociedad
                  </span>
                  
                  <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight select-all">
                    Los recicladores y el oficio de resistir
                  </h1>
                  
                  <div className="w-16 h-0.5 bg-secondary my-6" />
                  
                  <p className="font-sans text-lg sm:text-xl text-on-primary-container max-w-2xl leading-relaxed text-slate-100">
                    El eslabón invisible que sostiene las arterias ecológicas y la limpieza urbana de Guadalajara de Buga
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-300">
                    <span>Investigación por: <strong className="text-white">ashly.munoz@correounivalle.edu.co</strong></span>
                    <span>•</span>
                    <span>Buga, Valle del Cauca, Colombia</span>
                  </div>

                  <a 
                    href="#historia-inicio" 
                    className="mt-12 text-slate-300 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
                    title="Desplazarse hacia abajo"
                  >
                    <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
                  </a>
                </div>
              </header>

              {/* 3.2 "El mapa del residuo" (Data Stats Section) */}
              <section id="historia-inicio" className="py-20 px-4 md:px-12 max-w-6xl mx-auto space-y-12">
                <header className="max-w-3xl mx-auto text-center space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
                    El Mapa de la Contención
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                    La Crisis Silenciosa del Residuo
                  </h2>
                  <p className="text-sm md:text-base text-on-surface-variant text-justify">
                    Para dimensionar de forma precisa el impacto ecológico de los recicladores de oficio en Guadalajara de Buga, es imperativo confrontar las asimetrías de las métricas nacionales e institucionales colombianas.
                  </p>
                </header>

                {/* Dashboard Stats Block Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1: Residuos */}
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase font-bold font-mono text-secondary tracking-wider block mb-1">
                        PRODUCCIÓN NACIONAL
                      </span>
                      <h4 className="font-display text-4xl font-bold text-primary">
                        24.8M
                      </h4>
                      <p className="text-xs text-on-surface-variant font-semibold mt-1">
                        Toneladas de residuos sólidos al año en Colombia
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-outline-variant/10">
                      <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden block">
                        <div className="bg-secondary h-full rounded-full" style={{ width: '17%' }} />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-on-surface-variant font-mono mt-2">
                        <span>Apenas el 17% se recicla</span>
                        <span className="font-bold">Meta 2026: 30%</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Fuerza laboral */}
                  <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase font-bold font-mono text-secondary tracking-wider block mb-1">
                        TRABAJADORES DE BASE
                      </span>
                      <h4 className="font-display text-4xl font-bold text-primary">
                        100K+
                      </h4>
                      <p className="text-xs text-on-surface-variant font-semibold mt-1">
                        Recicladores manuales de oficio activos en el país
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-outline-variant/10 text-xs text-on-surface-variant leading-relaxed text-justify">
                      Sostienen el <strong className="text-primary text-sm font-bold">80% de todo el material recuperado</strong> a nivel nacional, liberando de forma constante la saturación de los rellenos sanitarios.
                    </div>
                  </div>

                  {/* Card 3: Jurisprudencia */}
                  <div className="bg-surface-container-high p-6 rounded-lg border-l-4 border-secondary flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase font-bold font-mono text-secondary tracking-wider block mb-1">
                        MARCO LEGAL
                      </span>
                      <h4 className="font-display text-2xl font-bold text-primary">
                        Sentencia T-724
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed text-justify">
                        La Corte Constitucional reconoce al reciclador de oficio como sujeto especial de protección del Estado, forzando a los municipios a estructurar rutas de pago directo.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-outline-variant/10 text-[10px] font-mono text-secondary font-bold">
                      DECRETO 0271 EN ACCIÓN
                    </div>
                  </div>

                </div>
              </section>

              {/* 3.3 "FUVAR vs Independientes" Interactive Segment */}
              <section className="py-20 bg-surface-container-low border-y border-outline-variant/20 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                  <div className="max-w-3xl mb-12 space-y-3">
                    <span className="text-xs uppercase font-bold font-mono text-secondary tracking-widest block">
                      Estudio Gremial en Buga
                    </span>
                    <h3 className="font-display text-3xl font-bold text-primary">
                      Asociación FUVAR: El Poder de la Organización
                    </h3>
                    <p className="text-sm text-on-surface-variant text-justify">
                      La Fundación Voluntad de Acopio y Reciclaje de Buga (FUVAR) actúa como un amortiguador colectivo de defensa tarifaria frente a la hostilidad de la intermediación independiente. Compara las dos realidades del territorio.
                    </p>
                  </div>

                  {/* Tab switches Inside Section */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Left List Options */}
                    <div className="md:col-span-4 space-y-4">
                      <button 
                        onClick={() => setInstitutionTab('fundamentos')}
                        className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                          institutionTab === 'fundamentos' 
                            ? 'bg-primary text-white border-primary shadow-sm' 
                            : 'bg-surface border-outline-variant/20 hover:bg-surface-container'
                        }`}
                      >
                        <h4 className="font-bold text-sm uppercase font-sans tracking-wide">Recicladores de Acopio Asociados</h4>
                        <p className="text-xs opacity-85 mt-1">Protección social, tarifas fijas y carnetización oficial en Buga.</p>
                      </button>

                      <button 
                        onClick={() => setInstitutionTab('cooperativas')}
                        className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                          institutionTab === 'cooperativas' 
                            ? 'bg-primary text-white border-primary shadow-sm' 
                            : 'bg-surface border-outline-variant/20 hover:bg-surface-container'
                        }`}
                      >
                        <h4 className="font-bold text-sm uppercase font-sans tracking-wide">Recicladores Independientes de Calle</h4>
                        <p className="text-xs opacity-85 mt-1">Incertidumbre absoluta, precios desregulados y alta desconfianza social.</p>
                      </button>
                    </div>

                    {/* Right Details Container */}
                    <div className="md:col-span-8 bg-surface border border-outline-variant/20 rounded-xl p-6 md:p-8 relative">
                      <div className="absolute top-4 right-4 text-xs font-mono font-bold text-secondary-container bg-primary px-3 py-1 rounded-full uppercase">
                        {institutionTab === 'fundamentos' ? 'FUVAR GREMIO' : 'CALLE ABIERTA'}
                      </div>

                      {institutionTab === 'fundamentos' ? (
                        <div className="space-y-6">
                          <h4 className="font-display text-2xl font-bold text-primary">La Dignificación Institucional</h4>
                          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed text-justify">
                            El agremiado de FUVAR cuenta con un chaleco reflectivo naranja y botas de seguridad certificadas. Esta indumentaria opera como un <strong>escudo sociológico</strong>: los hogares e instituciones de Buga identifican al reciclador como un profesional idóneo de los servicios públicos, ganando confianza para la entrega formal de residuos limpios.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-3 bg-surface-container rounded border-l-2 border-secondary flex gap-2 items-start text-xs">
                              <Check size={16} className="text-secondary mt-0.5" />
                              <div>
                                <strong className="block text-primary">Tarifas garantizadas</strong>
                                Retribución de peso justa que neutraliza los cobros leoninos de pesas informales.
                              </div>
                            </div>
                            <div className="p-3 bg-surface-container rounded border-l-2 border-secondary flex gap-2 items-start text-xs">
                              <Check size={16} className="text-secondary mt-0.5" />
                              <div>
                                <strong className="block text-primary">Rutas Urbanas Claras</strong>
                                Itinerarios estables concertados en asamblea para no disputar material violentamente.
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <h4 className="font-display text-2xl font-bold text-red-800">La Vulnerabilidad Intemperie</h4>
                          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed text-justify">
                            Para el recolector independiente, cada amanecer es un lienzo vacío y riesgoso. Son catalogados injustamente por el imaginario social bajo estereotipos de inseguridad, indigencia y desorden. Deben mendigar en vía pública la apertura de bolsas y se enfrentan al chantaje de los intermediarios en el pesaje final.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-3 bg-red-50 text-red-950 rounded border-l-2 border-error flex gap-2 items-start text-xs">
                              <AlertTriangle size={16} className="text-error mt-0.5" />
                              <div>
                                <strong className="block">Fluctuación hostil</strong>
                                El cartón puede caer a la mitad del precio si la bodega local amanece con sobrecupo.
                              </div>
                            </div>
                            <div className="p-3 bg-red-50 text-red-950 rounded border-l-2 border-error flex gap-2 items-start text-xs">
                              <AlertTriangle size={16} className="text-error mt-0.5" />
                              <div>
                                <strong className="block">Deterioro Físico Extremo</strong>
                                Inexistencia absoluta de aportes a salud, riesgos laborales u orientación previsional.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </section>

              {/* 3.4 "La Voz: Don Omar Antonio" - High fidelity Narrative Block */}
              <section className="py-24 px-4 md:px-12 max-w-5xl mx-auto space-y-12">
                <header className="border-b border-outline-variant/30 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold block">
                      Retrato Humano y Estigma
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-1">
                      La Voz: Don Omar Valdés
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-on-surface-variant font-medium">
                    Guadalajara de Buga, Comuna 4
                  </span>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Portrait Box Column */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="relative group overflow-hidden rounded-xl border border-outline-variant/30 shadow-md">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoRs5GETci9chckriB9GPzpL22onOLK8wHbJKG6KRfLX71XQQ70pEt7oeJOZYzePHAKs4x1A4q7uLi0URREdJNrnVjmXgCZMTGpmN3tD0AdOld0G3vSjcu60UTuxqF_3kmrTXvR8XZzbH_nKtjtlfILqfgUBfP3vMJI-geJ9em-Ig8L-dOFyBuG_E0PaZS0clGgPDlRYpBVnrae0iDlXBvbjlwYooLQ_0lxo6mBH96QBqYKtZhShmE59yQvx-rdxfWIQDV4Am88q4" 
                        alt="Don Omar Antonio Valdés" 
                        className="w-full h-[320px] object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-color opacity-30 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 bg-black/75 text-white font-mono text-[10px] uppercase px-3 py-1.5 rounded rounded-sm tracking-wider">
                        Omar Antonio Valdés, 70 años.
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-on-surface-variant text-justify italic font-serif leading-relaxed">
                      "Para el ciudadano promedio en Buga, el reciclador que rasga una bolsa es un objeto de desprecio higiénico; cruza una frontera de basura que nadie desea encarar."
                    </p>
                  </div>

                  {/* Narrative body Column with custom Dropcap */}
                  <div className="md:col-span-7 space-y-6">
                    <p className="font-serif text-lg leading-relaxed text-on-surface text-justify">
                      <span className="float-left text-5xl sm:text-6xl font-bold font-display text-secondary leading-none mr-3 mt-1.5 ">D</span>
                      on Omar Antonio Valdés Herrera tiene 70 años y las manos profundamente talladas por el peso constante de la madera, herrajes viejos y el cartón mojado. Cada día, empuja su carretilla improvisada bajo el ardiente sol de Guadalajara de Buga, buscando entre las bolsas de basura lo que el resto de los ciudadanos descartan sin un segundo de duda. En una jornada amarga, su extenuante labor de doce horas apenas le reporta generosos $5.000 pesos colombianos.
                    </p>

                    <p className="text-sm md:text-base text-on-surface-variant leading-relaxed text-justify">
                      La estigmatización que Don Omar enfrenta no es un fenómeno aislado. Como argumentaba el célebre sociólogo Erving Goffman, el estigma funciona desacreditando profundamente a la persona, reduciéndola en la mente del observador de un individuo poliédrico a uno "manchado" e invisible. El ciudadano de a pie prefiere mirar hacia otro lado; evaden el contacto visual para no admitir que su bienestar material descansa sobre la fatiga extrema de una persona mayor.
                    </p>

                    <blockquote className="pull-quote-border pl-6 py-2 my-8">
                      <p className="font-display text-lg sm:text-xl text-primary italic font-semibold">
                        "La gente le teme a lo que bota a la caneca, nos asocian con lo que se desecha, pero nosotros somos los que limpiamos el futuro de sus hijos en Buga."
                      </p>
                      <cite className="block text-[10px] uppercase font-bold font-sans tracking-widest text-secondary mt-2">
                        — DON OMAR ANTONIO
                      </cite>
                    </blockquote>
                  </div>

                </div>

                {/* Interactive Immersive Voice Audio Player Box */}
                <div id="reproductor-voces" className="pt-8 scroll-mt-24">
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                      <Volume2 size={20} className="text-secondary" />
                      Voces de la Resistencia: Archivo de Tradiciones Orales
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Haz clic en un perfil para cargar su historia y activar el reproductor acústico realista de Buga.
                    </p>
                  </div>

                  {/* Profile Picker Bubbles Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {RECYCLERS.map((recycler) => {
                      const isActive = recycler.id === selectedRecycler.id;
                      return (
                        <button
                          key={recycler.id}
                          onClick={() => setSelectedRecycler(recycler)}
                          className={`flex items-center gap-2.5 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                            isActive 
                              ? 'bg-primary-container border-primary text-primary shadow-xs' 
                              : 'bg-surface border-outline-variant/15 hover:bg-surface-container-low'
                          }`}
                        >
                          <img 
                            src={recycler.image} 
                            alt={recycler.name} 
                            className="w-10 h-10 rounded-full object-cover filter grayscale"
                            referrerPolicy="no-referrer"
                          />
                          <div className="overflow-hidden">
                            <h5 className="text-[11px] font-bold tracking-tight text-primary truncate leading-tight">
                              {recycler.name}
                            </h5>
                            <span className="text-[9px] text-on-surface-variant block font-semibold truncate">
                              {recycler.role}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Current Loaded Recycler Audio Deck */}
                  <AudioPlayer profile={selectedRecycler} />
                </div>
              </section>

              {/* 3.5 "Juan Carlos: El Rostro de la Gestión Ambiental" (Photo Essay Section) */}
              <section className="py-24 bg-surface-container-high border-t border-outline-variant/35 px-4 md:px-12">
                <div className="max-w-6xl mx-auto space-y-16">
                  
                  {/* Photo essay heading */}
                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
                      Ensayos Fotográficos de Buga
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
                      Juan Carlos: El Orgullo del Uniforme Naranja
                    </h2>
                    <p className="text-sm md:text-base text-on-surface-variant text-justify md:text-center">
                      La formalización no es sólo un debate burocrático de planillas; de manera visceral, reconfigura el orgullo laboral. Las siguientes postales retratan la jornada de Juan Carlos, operario cooperativo de la Fundación FUVAR.
                    </p>
                  </div>

                  {/* Photos Grid representation containing requested image links */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    
                    {/* Portrait Card */}
                    <div className="bg-surface rounded-lg overflow-hidden border border-outline-variant/25 flex flex-col justify-between">
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOdSyBy16dwKJd4xUdq457A1bGJNoJPO0PGJ2wclvwNAlyRZB70JIWfjiBrzPRpM6jhnwbXdeqJoyVy399KlO8U6fN1ah85b7BCYMmxjpLt8dinZ4znodWzJSjL3RPBNZJmbGnXakkashAPJ1rHV4DZo2wDWok1jH-xJYFATiitbajt5v3n7dG2XTYrPVejyScwdvVUTZTPH2xyJNyiyd9z64k8dES3p2UN-45mG2_uT_V552l0agf1UwkyU5kZSashnogGPFeRjY" 
                          alt="Juan Carlos sonriendo uniforme" 
                          className="w-full h-full object-cover filter contrast-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block">POSTAL I • IDENTIDAD</span>
                        <h4 className="font-display font-bold text-lg text-primary select-all">El Orgullo Naranja</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                          "Antes nos veían como residuos que caminaban. Hoy con el chaleco naranja y las botas, el dueño de la casa me saluda y me guarda el cartón amarrado."
                        </p>
                      </div>
                    </div>

                    {/* Hands closeup card */}
                    <div className="bg-surface rounded-lg overflow-hidden border border-outline-variant/25 flex flex-col justify-between">
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRx3h6QDEnVQrC2wrnY4hj233ijvdqOalTTsMR0Db0eLWUBPApQ90TF5dagwaVu-FNxhhT48fmQDRcw70PhALNmOc-2EgwM4NqkaoKm92OfydPZFLKbY07-XhMrbHNBA27VuAo7B6Qsk-sGMk69DtatZgNUHEiAOWtBcLeekN6ArZ5PzDOgUxxJq4paypJ6RFEpjkwsKwt9yb4yQ43nwFzpOFP4Ve_LNx9yrGrWOi9JCv7dQ0SqsqQQyYyekfb--7yDOQASyOpZNk" 
                          alt="Manos primer plano" 
                          className="w-full h-full object-cover filter contrast-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block">POSTAL II • HUELLAS</span>
                        <h4 className="font-display font-bold text-lg text-primary select-all">Herramientas Curtidas</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                          Las manos describen los kilómetros recorridos. Cada surco y cicatriz en la piel representa el contacto continuo con el cristal roto de botellas que ciudadanos desconsiderados descantillan sueltas.
                        </p>
                      </div>
                    </div>

                    {/* Safety boots card */}
                    <div className="bg-surface rounded-lg overflow-hidden border border-outline-variant/25 flex flex-col justify-between">
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7IoGaE8lmK2GSFO7d7t1ZE7B9I9dpyzreF9_51ySkbob6MzgeIJpIkAsWx7yn3qRq7NPhjwTBLGGdlMpKCkx83PczcLzHRWLUEDlIDUHKf7VsNIT_9IEQGoQb_7RZ5veynXb7dfNi2lRGt81AakFqPGT-bjowt98We7Lc7u2557Vn1gyuaa5QJl6nxlkLwr9fxTGynv-CW8XxCoBs7oLsIJci2yWJASixHobB66tWmuCHQQ4ljmLiGyEZqHarsZQFK0_t9FngtY0" 
                          alt="Botas gastadas" 
                          className="w-full h-full object-cover filter contrast-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block">POSTAL III • PASOS</span>
                        <h4 className="font-display font-bold text-lg text-primary select-all">Soporte Sólido</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                          Las botas de seguridad con punta de acero representan la transición vital de la carretilla descalza a una logística dignificada. Brindan el apoyo vital para empujar carros con más de un cuarto de tonelada.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Bicycle transport full width */}
                  <div className="bg-surface rounded-lg overflow-hidden border border-outline-variant/25 grid grid-cols-1 md:grid-cols-12 items-center">
                    <div className="h-80 md:col-span-7 overflow-hidden relative">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTStsNRwBywItW-6GmUp0D0GRi5o_KcKQYluKZz5cbJlfCE5k782yJqQQIhEWk2vTucjRGlUGDUy8di5emg4HUiVIpd2khhpbZYo_FCRx4t0a2_LolqCZrOuh2SJk6Erib_ca-cN39RIBCMR-GffaSslR_oCuJ03UY8vxtN0sj-CHMq8ZPTfkC7t1s0mSwogkj0XBbJJnO7e5p2RD5btcED6KvEFSiPpkn7__66cA9SVFXfXzOVBeO9iCJR4mOnHG9A058MeVyTWY" 
                        alt="Juan Carlos transportando carga" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 md:p-8 md:col-span-5 space-y-4">
                      <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block">POSTAL IV • TRASLADO CORAL</span>
                      <h4 className="font-display font-bold text-2xl text-primary leading-tight select-all">El Vehículo Adaptado</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed text-justify">
                        En Guadalajara de Buga, la sustitución de carretillas manuales por bicicletas de alta resistencia con remolque articulado es el paso decisivo del plan maestro de FUVAR. Disminuye la tracción directa de la columna vertebral y acorta a un tercio el trayecto de regreso al centro de pesaje.
                      </p>
                      <div className="flex gap-4 pt-1 items-center">
                        <div className="flex flex-col">
                          <span className="font-mono font-bold text-lg text-primary">280 kg</span>
                          <span className="text-[10px] text-on-surface-variant uppercase">Carga de arrastre promedio</span>
                        </div>
                        <div className="w-px h-8 bg-outline-variant/30" />
                        <div className="flex flex-col">
                          <span className="font-mono font-bold text-lg text-primary">FUVAR</span>
                          <span className="text-[10px] text-on-surface-variant uppercase">Marca del Colectivo</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* 3.6 Simple call to action to move tabs */}
              <section className="py-20 text-center bg-primary text-white select-none">
                <div className="max-w-3xl mx-auto px-6 space-y-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold">Continúa el Descubrimiento</h3>
                  <p className="text-slate-100 text-sm max-w-lg mx-auto">
                    La historia de los recicladores se complementa con la geografía de Guadalajara de Buga. Explora la cartografía interactiva o simula el impacto social de la brecha del valor.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => { setActiveTab('cartografia'); window.scrollTo({ top: 0 }); }}
                      className="bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90 px-5.5 py-2.5 rounded text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                    >
                      Explorar la Cartografía de Espacios
                    </button>
                    <button 
                      onClick={() => { setActiveTab('simulador'); window.scrollTo({ top: 0 }); }}
                      className="bg-white/10 hover:bg-white/20 text-white px-5.5 py-2.5 rounded text-xs uppercase font-bold tracking-wider transition-colors border border-white/20 cursor-pointer"
                    >
                      Calcular Brechas de Mercado
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {activeTab === 'cartografia' && (
            <motion.div
              key="cartografia"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="font-display text-4xl font-bold text-primary">Atlas Histórico de Buga</h2>
                <div className="w-12 h-1 bg-secondary mx-auto" />
                <p className="text-sm text-on-surface-variant">
                  Explora las capas de memoria compartida, lucha gremial y geohistoria de la llamada "Ciudad Señora".
                </p>
              </div>

              {/* Integrating Map component */}
              <MapExplorer />
            </motion.div>
          )}

          {activeTab === 'simulador' && (
            <motion.div
              key="simulador"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="font-display text-4xl font-bold text-primary">Báscula y Retribución Real</h2>
                <div className="w-12 h-1 bg-secondary mx-auto" />
                <p className="text-sm text-on-surface-variant">
                  Calcula la diferencia económica que expropia la industria del esfuerzo directo de los recicladores bugueños.
                </p>
              </div>

              {/* Integrating Slider Calculator */}
              <ValueGapCalculator />
            </motion.div>
          )}

          {activeTab === 'testimonios' && (
            <motion.div
              key="testimonios"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-12"
            >
              <TestimoniosVivos />
            </motion.div>
          )}

          {activeTab === 'estigmatizacion' && (
            <motion.div
              key="estigmatizacion"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-12"
            >
              <Estigmatizacion />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Elegant Editorial Timeline (Only showed under Crónica tab or as a common story footer inside tabs) */}
      {activeTab === 'cronica' && (
        <section className="py-24 bg-surface px-4 md:px-12 max-w-5xl mx-auto border-t border-outline-variant/30">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">Hitos Críticos</span>
            <h3 className="font-display text-3xl font-bold text-primary">Cronología del Oficio</h3>
            <p className="text-sm text-on-surface-variant">El tránsito histórico desde la persecución urbana en Buga hasta la organización ética coordinada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal timeline connect line */}
            <div className="hidden md:block absolute top-[18px] left-[30px] right-[30px] h-0.5 bg-outline-variant/50 z-0" />
            
            {TIMELINE.map((time, idx) => (
              <div key={idx} className="relative z-10 space-y-3">
                <div className="w-9 h-9 rounded-full bg-secondary text-white font-mono text-xs font-bold flex items-center justify-center border-4 border-surface shadow-xs">
                  {idx + 1}
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-secondary block">{time.year}</span>
                  <h5 className="font-display font-bold text-base text-primary mt-1">{time.title}</h5>
                  <p className="text-xs text-on-surface-variant leading-relaxed text-justify mt-1">
                    {time.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Purely Handcrafted Aesthetic Footer */}
      <footer className="bg-surface-container-high border-t border-outline-variant/30 px-6 md:px-12 py-12 text-on-surface mt-auto select-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs">
          
          <div className="space-y-2">
            <h4 className="font-display font-bold text-primary text-base">Narrativa Terrosa</h4>
            <p className="text-on-surface-variant max-w-xs text-justify">
              Perfiles de recicladores, investigaciones y cartografías de profundidad sobre Guadalajara de Buga creadas para fomentar el entendimiento social de base.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase font-bold text-secondary">Documentación</span>
              <a href="#don-omar" onClick={() => { setActiveTab('cronica'); }} className="hover:text-secondary hover:underline transition-colors">Relatos Orales</a>
              <a href="#reproductor-voces" onClick={() => { setActiveTab('cronica'); }} className="hover:text-secondary hover:underline transition-colors">Archivo de Audio de Don Omar</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase font-bold text-secondary">Investigación</span>
              <a href="#contexto" onClick={() => { setActiveTab('cronica'); }} className="hover:text-secondary hover:underline transition-colors">Metas 2026 de Reciclaje</a>
              <button onClick={() => { setActiveTab('cartografia'); }} className="hover:text-secondary text-left hover:underline transition-colors">Cartografía Histórica</button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase font-bold text-secondary">Participación</span>
              <button onClick={() => { setActiveTab('testimonios'); }} className="hover:text-secondary text-left hover:underline transition-colors block">Rostros del reciclaje</button>
              <button onClick={() => { setActiveTab('estigmatizacion'); }} className="hover:text-secondary text-left hover:underline transition-colors block">Estigmas</button>
              <button onClick={() => setShowNewsletterModal(true)} className="hover:text-secondary text-left hover:underline transition-colors">Suscribirse al Boletín</button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-outline-variant/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-on-surface-variant">
          <p>© 2026 Narrativa Terrosa. Todos los derechos reservados. Periodismo de profundidad.</p>
          <div className="flex gap-4">
            <span className="hover:text-primary cursor-help">Ética Editorial</span>
            <span>•</span>
            <span className="hover:text-primary cursor-help">Buga, Colombia</span>
          </div>
        </div>
      </footer>

      {/* 6. Newsletter Subscription Modal Drawer (Aesthetic/Fully functional state) */}
      {showNewsletterModal && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-surface rounded-xl border border-outline-variant/30 max-w-md w-full p-6 paper-grain relative shadow-xl"
          >
            <button 
              onClick={() => setShowNewsletterModal(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-black hover:scale-110 transition-all font-bold text-base cursor-pointer"
              title="Cerrar"
            >
              &times;
            </button>

            <span className="font-mono text-[10px] uppercase font-bold text-secondary block mb-1">Boletines Especiales</span>
            <h4 className="font-display text-xl font-bold text-primary mb-2">Únete a Narrativa Terrosa</h4>
            <p className="text-xs text-on-surface-variant mb-6 text-justify">
              Recibe notificaciones periódicas sobre relatos de recicladores de Guadalajara de Buga y reportes analíticos de economía circular. Sin publicidad deshonesta.
            </p>

            {subscriptionSuccess ? (
              <div className="p-4 bg-primary-container text-on-primary-container rounded text-xs block text-center space-y-2 py-8">
                <CheckCircle2 size={32} className="mx-auto text-secondary animate-bounce" />
                <p className="font-semibold text-sm">¡Suscripción confirmada!</p>
                <p className="text-[11px] opacity-90">Te incorporamos para recibir futuros reportajes de Buga.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    placeholder="tucorreo@correounivalle.edu.co"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/30 px-3 py-2.5 rounded text-xs text-primary focus:outline-none"
                  />
                </div>

                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={() => setShowNewsletterModal(false)}
                    className="w-1/3 bg-slate-200 text-on-surface rounded text-xs font-bold py-2 hover:bg-slate-300 transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                  <button 
                    type="submit"
                    className="w-2/3 bg-primary hover:bg-primary-container text-white rounded text-xs font-bold py-2 tracking-wide transition-colors cursor-pointer"
                  >
                    Confirmar Registro
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      )}

    </div>
  );
}
