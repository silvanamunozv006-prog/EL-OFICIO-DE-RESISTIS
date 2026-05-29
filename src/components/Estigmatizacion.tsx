import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartCrack, 
  HelpCircle, 
  MessageSquare, 
  ShieldAlert, 
  Sparkles, 
  UserX, 
  Frown, 
  CheckCircle,
  AlertCircle,
  EyeOff,
  Quote,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

interface Anecdote {
  id: number;
  title: string;
  initialResponse: string;
  unfoldingReality: string;
  category: string;
  victim: string;
  location: string;
}

export default function Estigmatizacion() {
  const [activeAnecdoteId, setActiveAnecdoteId] = useState<number>(1);
  const [showAnalysis, setShowAnalysis] = useState<boolean>(true);

  const anecdotes: Anecdote[] = [
    {
      id: 1,
      title: 'El Rechazo Invisible de la Reja',
      initialResponse: '“No, a mí nadie me discrimina en los conjuntos. La gente de los apartamentos ya me conoce y es bien conmigo.”',
      unfoldingReality: '“Tienen un citófono en la portería del conjunto residencial. Apenas me ven acercarme con la carreta para recoger el cartón que don Carlos me guarda, el vigilante llama rápido al administrador. Me gritan por el parlante que no raye los portones, que espere afuera en la acera solitaria, como si yo fuera a ensuciar los vidrios con solo mirarlos. Me toca quedarme parado bajo el agua para que saquen las cajas rotas.”',
      category: 'Invisibilización Espacial',
      victim: 'Omar Valdés',
      location: 'Conjunto Residencial del Norte de Buga'
    },
    {
      id: 2,
      title: 'El "Ladrón" de Perfil Metálico',
      initialResponse: '“La policía de Buga hace su trabajo, ellos no me molestan porque saben que yo solo ando recogiendo lo seco.”',
      unfoldingReality: '“Hace tres meses un vecino de un restaurante reportó por el chat comunal de seguridad que había \'un sospechoso merodeando a deshoras\'. Yo solo estaba esperando que terminaran de vaciar las cajas de cerveza para rescatar los canastos plásticos partidos. Llegaron dos patrullas en moto, me tiraron las bolsas al suelo, regaron todo lo que ya llevaba clasificado en el día buscando cables robados mientras me decían que me fuera de la Comuna o me quitaban la zorra.”',
      category: 'Sospecha Sistemática',
      victim: 'Mauricio',
      location: 'Sector del Parque Cabal'
    },
    {
      id: 3,
      title: 'La Limosna que Lastima',
      initialResponse: '“La gente aquí es caritativa, a veces me dan comida o café caliente en las mañanas.”',
      unfoldingReality: '“A veces te extienden una bolsa amarrada diciendo con ojos de lástima: \'Tenga, para que se alimente hoy\'. Cuando abro la bolsa alegre con la ilusión de un almuerzo caliente, me encuentro con arroz rancio de hace cuatro días, sopa ácida que ellos mismos no se comerían, mezclada con cáscaras húmedas. Es doloroso. Sienten que como uno mete las manos entre la basura, su estómago también es un basurero. Yo tengo dignidad, yo no soy mendigo, yo soy un trabajador ambiental.”',
      category: 'Deshumanización Higiénica',
      victim: 'Mónica Valencia',
      location: 'Barrio El Albergue'
    },
    {
      id: 4,
      title: 'Las Monedas del Silencio',
      initialResponse: '“No, todo el mundo respeta que esto es para cuidar el medio ambiente.”',
      unfoldingReality: '“Cuando voy a los locales comerciales del centro, me dan 200 pesos para que me vaya rápido y no \'espante\' a los compradores elegantes que están almorzando o mirando vitrinas. Les digo que no vengo a pedir limosna, sino a que me vendan o regalen el cartón acumulado atrás. Prefieren regalarlo a la empresa de aseo pública antes de dejarme entrar al patio trasero a cargarlo yo mismo.”',
      category: 'Subvaloración Laboral',
      victim: 'Juan Carlos',
      location: 'Calle de los Callejones Históricos'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Cover Header */}
      <section className="bg-slate-900 text-white py-16 px-6 md:px-12 rounded-2xl relative overflow-hidden shadow-md border border-slate-800">
        <div className="absolute inset-0 bg-radial-gradient from-slate-800/40 via-transparent to-transparent opacity-55 select-none pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase bg-red-950/50 text-red-400 border border-red-900/45 px-3.5 py-1.5 rounded-full font-bold">
              Estigmas
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Estigma Silencioso: La Doble Respuesta
          </h1>

          <p className="font-serif text-lg text-slate-300 max-w-3xl leading-relaxed text-justify">
            Durante la investigación etnográfica en Guadalajara de Buga, se identificó un fenómeno recurrente: al preguntarles directamente si sufren estigmatización o discriminación, los recicladores de oficio responden inmediatamente con orgullo: <span className="text-secondary font-sans font-bold">“No, la gente de Buga me respeta y me quiere”</span>. Sin embargo, al avanzar la conversación y adentrarse en sus anécdotas diarias, confiesan de forma natural situaciones de profunda humillación, exclusión y violencia sistemática.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="material-symbols-outlined text-red-400">psychology</span>
              <span><strong>Mecanismo de Defensa:</strong> Preservación de la dignidad personal</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="material-symbols-outlined text-red-400">supervisor_account</span>
              <span><strong>Metodología:</strong> Entrevistas orales vs. Observación participativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Structural Contrast Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Left: The Sociological Explanation (Why do they say 'no' but act 'yes'?) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 space-y-5">
            <div className="flex items-center gap-2 text-primary font-bold">
              <ShieldAlert size={22} className="text-secondary" />
              <h3 className="font-display text-lg font-bold">La Paradoja de la Autodefensa</h3>
            </div>
            
            <div className="font-sans text-sm text-on-surface-variant leading-relaxed space-y-4 text-justify">
              <p>
                En sociología, este contraste se denomina <strong>mecanismo de blindaje contra la estigmatización</strong>. Un reciclador de oficio, al declararse marginado ante un micrófono, valida de forma pública su estatus de vulnerabilidad e inferioridad social.
              </p>
              <p>
                Contestar <span className="font-semibold text-primary">“aquí todos me tratan bien”</span> es un acto de resistencia emocional activa que les permite levantarse a las 4:00 a.m. sin sentirse víctimas.
              </p>
              <p>
                Sin embargo, la realidad de la calle no perdona. Al desgranar los relatos particulares, sale a flote que la discriminación no siempre es un golpe directo; a menudo se manifiesta como <strong>indiferencia, miedo, asco higiénico o sospecha policial</strong>, normalizados por los propios recuperadores como condiciones naturales de su oficio terroso.
              </p>
            </div>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/25 text-xs text-secondary-container font-mono text-justify">
              <strong>Reflexión:</strong> "Normalizar el desprecio ciudadano es el peaje psicológico que pagan diariamente para poder limpiar nuestra ciudad sin quebrarse por dentro."
            </div>
          </div>

          {/* Real Photo showing the hard street conditions */}
          <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200">
            <img 
              src="/input_file_2.png" 
              alt="Reciclador empujando carreta" 
              className="w-full h-64 object-cover filter contrast-[1.04] brightness-95"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4">
              <h4 className="text-sm font-bold text-white">Soportando el peso del desprecio físico</h4>
              <p className="text-[10px] text-slate-300">Trabajando frente a las fachadas de Buga</p>
            </div>
          </div>
        </div>

        {/* Right: Interactive Anecdote Explorer */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase text-secondary font-bold tracking-wider">Explorador de Contrastes</span>
            <h2 className="font-display text-2xl font-bold text-primary">La Doble Narrativa en Territorio</h2>
            <p className="text-xs text-on-surface-variant">
              Selecciona una de las anécdotas reales recopiladas en Buga para comparar la respuesta inicial frente al relato descriptivo de su vivencia.
            </p>
          </div>

          {/* Tabs header list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-container-low p-1.5 rounded-lg border border-outline-variant/15">
            {anecdotes.map((anecdote) => (
              <button
                key={anecdote.id}
                onClick={() => setActiveAnecdoteId(anecdote.id)}
                className={`py-2 px-1 text-center rounded text-xs font-mono font-bold transition-all truncate hover:bg-surface-container/20 cursor-pointer ${
                  activeAnecdoteId === anecdote.id
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant'
                }`}
              >
                Relato {anecdote.id}
              </button>
            ))}
          </div>

          {/* Current selected anecdote content with smooth transitions */}
          <AnimatePresence mode="wait">
            {anecdotes.map((anecdote) => anecdote.id === activeAnecdoteId && (
              <motion.div
                key={anecdote.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 bg-surface border border-outline-variant/25 rounded-xl p-6 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/15 pb-3">
                  <div>
                    <span className="bg-red-50 text-red-800 px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
                      {anecdote.category}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-primary mt-1">
                      {anecdote.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs block font-bold text-on-surface">{anecdote.victim}</span>
                    <span className="text-[10px] text-on-surface-variant block font-mono italic">{anecdote.location}</span>
                  </div>
                </div>

                {/* Grid Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* The conscious public response */}
                  <div className="bg-emerald-50/50 rounded-lg p-5 border border-emerald-100/60 relative flex flex-col justify-between">
                    <div className="absolute top-2.5 right-2.5 bg-emerald-100 text-emerald-800 font-mono text-[8px] uppercase font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      <CheckCircle size={9} />
                      Respuesta Inicial
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <p className="font-serif italic text-xs text-emerald-950 leading-relaxed text-justify">
                        {anecdote.initialResponse}
                      </p>
                    </div>

                    <div className="text-[10px] text-emerald-800 font-mono mt-4 pt-2 border-t border-emerald-100/50">
                      <strong>Actitud:</strong> Autoprotección identitaria
                    </div>
                  </div>

                  {/* The real lived story */}
                  <div className="bg-red-50/50 rounded-lg p-5 border border-red-100/60 relative flex flex-col justify-between">
                    <div className="absolute top-2.5 right-2.5 bg-red-100 text-red-800 font-mono text-[8px] uppercase font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      <AlertCircle size={9} />
                      Anécdota Real
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <p className="font-serif italic text-xs text-red-950 leading-relaxed text-justify">
                        {anecdote.unfoldingReality}
                      </p>
                    </div>

                    <div className="text-[10px] text-red-800 font-mono mt-4 pt-2 border-t border-red-100/50">
                      <strong>Consecuencia:</strong> Exclusión social velada
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
