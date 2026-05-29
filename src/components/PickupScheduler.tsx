import React, { useState } from 'react';
import { Calendar, Truck, CheckCircle2, ListFilter, Users, MapPin, Sparkles, Send } from 'lucide-react';
import { PickupRequest } from '../types';

export default function PickupScheduler() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('Centro Histórico');
  const [materialType, setMaterialType] = useState('Cartón Corrugado');
  const [date, setDate] = useState('2026-05-29');
  const [successMsg, setSuccessMsg] = useState(false);
  const [assignedRecycler, setAssignedRecycler] = useState<string | null>(null);

  const [pickups, setPickups] = useState<PickupRequest[]>([
    {
      id: 'r-1',
      name: 'Restaurante El Portalón',
      address: 'Calle 6 # 14-22',
      materialType: 'Cartón (40kg)',
      date: '2026-05-29',
      status: 'scheduled'
    },
    {
      id: 'r-2',
      name: 'Notaría Primera de Buga',
      address: 'Carrera 13 # 5-41',
      materialType: 'Papel de Archivo (25kg)',
      date: '2026-05-29',
      status: 'scheduled'
    },
    {
      id: 'r-3',
      name: 'Miscelánea El Cisne',
      address: 'Calle 7 # 16-12',
      materialType: 'Plástico PET (12kg)',
      date: '2026-05-30',
      status: 'pending'
    }
  ]);

  const NEIGHBORHOODS = [
    'Centro Histórico',
    'El Albergue',
    'San Antonio',
    'Prados de Oriente',
    'Santa Rita',
    'Aures',
    'Fuenmayor',
    'La Revolución'
  ];

  const RECYCLERS_POOL = [
    'Juan Carlos (Colección FUVAR Norte)',
    'Mónica Valencia (Colección FUVAR Centro)',
    'Don Omar Antonio (Comunidad Independiente Asignada)',
    'Mauricio Peraza (Sectores Periurbanos)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address) return;

    const newId = `r-${Date.now()}`;
    const newRequest: PickupRequest = {
      id: newId,
      name,
      address: `${address} (${neighborhood})`,
      materialType,
      date,
      status: 'pending'
    };

    setPickups([newRequest, ...pickups]);
    
    // Choose a random recycler to assign
    const randomIndex = Math.floor(Math.random() * RECYCLERS_POOL.length);
    setAssignedRecycler(RECYCLERS_POOL[randomIndex]);
    setSuccessMsg(true);

    // Clean form
    setName('');
    setAddress('');
  };

  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant/30 p-6 md:p-8 paper-grain">
      
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold inline-block mb-1">
            Ciudadanía en Acción
          </span>
          <h3 className="font-display text-2xl font-bold text-primary mb-2">
            Canal Directo de Recogida Ética de Buga
          </h3>
          <p className="text-xs text-on-surface-variant max-w-2xl text-justify">
            La mejor forma de acortar la brecha del valor es separando en la fuente y entregando el material de manera limpia y selectiva. Programa una ruta de recogida gratuita para tu hogar o negocio en Buga.
          </p>
        </div>

        <div className="flex-shrink-0 bg-primary/10 border border-primary/20 p-3 rounded text-center">
          <Truck className="text-primary mx-auto mb-1" size={24} />
          <span className="font-mono text-[9px] block uppercase font-bold text-primary">CAMPAÑA CIVICA 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Input Scheduling Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-6 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/20 shadow-sm space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary flex items-center gap-2 border-b border-outline-variant/10 pb-2">
            <Sparkles size={16} />
            Programar Nueva Carga limpia
          </h4>

          {successMsg && (
            <div className="p-4 bg-green-50 border border-green-200 rounded text-xs text-green-800 space-y-1.5 animate-fade-in">
              <div className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 size={16} className="text-green-600" />
                ¡Solicitud Registrada en Buga!
              </div>
              <p>Tu solicitud ha sido incorporada a las asambleas logísticas de FUVAR.</p>
              {assignedRecycler && (
                <p className="font-semibold text-primary pt-1">
                  📍 Reciclador sugerido asignado: <span className="underline">{assignedRecycler}</span>
                </p>
              )}
              <button 
                type="button"
                onClick={() => setSuccessMsg(false)} 
                className="text-[10px] text-primary underline block pt-0.5"
              >
                Programar otra recogida
              </button>
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Nombre de Hogar o Establecimiento
            </label>
            <input 
              type="text" 
              placeholder="Ej. Casa de la Familia Toro o Zapatería Central"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface border border-outline-variant/40 px-3 py-2 rounded text-xs text-primary focus:outline-none focus:ring-1 focus:ring-secondary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                Barrio / Sector de Buga
              </label>
              <select 
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full bg-surface border border-outline-variant/40 px-3 py-2 rounded text-xs text-primary focus:outline-none focus:ring-1 focus:ring-secondary"
              >
                {NEIGHBORHOODS.map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                Dirección exacta
              </label>
              <input 
                type="text" 
                placeholder="Ej. Calle 7 # 12-45"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-surface border border-outline-variant/40 px-3 py-2 rounded text-xs text-primary focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                Tipo de Material Predominante
              </label>
              <select 
                value={materialType}
                onChange={(e) => setMaterialType(e.target.value)}
                className="w-full bg-surface border border-outline-variant/40 px-3 py-2 rounded text-xs text-primary focus:outline-none"
              >
                <option value="Cartón Corrugado">Cartón Corrugado</option>
                <option value="Plástico PET">Plástico PET</option>
                <option value="Vidrio de Botella">Vidrio de Botella</option>
                <option value="Papel de Archivo">Papel de Archivo</option>
                <option value="Metales / Latas">Metales / Latas</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                Fecha del Retiro
              </label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-surface border border-outline-variant/40 px-3 py-2 rounded text-xs text-primary font-mono focus:outline-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/95 text-white py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2"
          >
            <Send size={14} />
            Registrar Solicitud en la Ruta
          </button>
        </form>

        {/* Right: Active Live Pickup Log */}
        <div className="lg:col-span-6 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/20 shadow-sm flex flex-col justify-between h-full min-h-[350px]">
          <div>
            <div className="flex justify-between items-center mb-4 border-b border-outline-variant/10 pb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Calendar size={16} className="text-secondary" />
                Rutas Logísticas Pendientes
              </h4>
              <span className="font-mono text-[10px] bg-secondary/15 text-secondary px-2 py-0.5 rounded font-bold uppercase">
                Buga Urbana
              </span>
            </div>

            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
              {pickups.map((pick) => (
                <div key={pick.id} className="p-3 bg-surface rounded border border-outline-variant/10 text-xs flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="font-semibold text-primary block">{pick.name}</span>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
                      <MapPin size={12} className="text-secondary" />
                      <span>{pick.address}</span>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-bold font-mono">
                      {pick.materialType} • {pick.date}
                    </span>
                  </div>

                  <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                    pick.status === 'scheduled' 
                      ? 'bg-primary-container text-on-primary-container' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {pick.status === 'scheduled' ? 'Asignado' : 'Por Validar'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/10 text-[11px] text-on-surface-variant text-justify italic font-serif leading-relaxed">
            * Al consolidar estas recogidas, los recicladores de FUVAR pueden optimizar los trayectos de empuje de sus carretas y bicicletas, minimizando el cansancio corporal y asegurando que los materiales críticos no se mezclen con residuos orgánicos.
          </div>
        </div>

      </div>
    </div>
  );
}
