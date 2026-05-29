import React, { useState } from 'react';
import { MATERIALS } from '../data';
import { MaterialCost } from '../types';
import { Plus, Trash2, ArrowRight, HelpCircle, Briefcase, TrendingUp } from 'lucide-react';

export default function ValueGapCalculator() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(MATERIALS[0].id);
  const [kilos, setKilos] = useState<number>(50); // Default to 50kg for custom calculation
  
  // Cart for the "Simulador de Jornada Completa"
  const [cart, setCart] = useState<Array<{ material: MaterialCost; quantity: number }>>([
    { material: MATERIALS[0], quantity: 150 }, // 150kg cardboard
    { material: MATERIALS[1], quantity: 15 }   // 15kg PET
  ]);

  const currentMaterial = MATERIALS.find(m => m.id === selectedMaterialId) || MATERIALS[0];

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Add item to cart
  const handleAddToCard = () => {
    const existing = cart.find(item => item.material.id === currentMaterial.id);
    if (existing) {
      setCart(cart.map(item => 
        item.material.id === currentMaterial.id 
          ? { ...item, quantity: item.quantity + kilos }
          : item
      ));
    } else {
      setCart([...cart, { material: currentMaterial, quantity: kilos }]);
    }
  };

  // Delete item from cart
  const handleRemoveFromCart = (id: string) => {
    setCart(cart.filter(item => item.material.id !== id));
  };

  // Cart total calculations
  const totalPaidRecycler = cart.reduce((sum, item) => sum + (item.material.paidToRecycler * item.quantity), 0);
  const totalPaidIndustry = cart.reduce((sum, item) => sum + (item.material.paidToIndustry * item.quantity), 0);
  const totalGap = totalPaidIndustry - totalPaidRecycler;
  const ratio = totalPaidIndustry > 0 ? (totalPaidRecycler / totalPaidIndustry) * 100 : 0;
  
  // Total physical bulk in kg
  const totalWeight = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Constants for comparison in Colombia 2026
  const DAILY_LEGAL_MINIMUM_WAGE_COP = 46600; // Approx 1.4M COP monthly split by 30 days

  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant/30 p-6 md:p-8 paper-grain relative">
      <div className="absolute top-3 right-4 flex items-center gap-1.5 bg-secondary-container/40 text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold">
        <TrendingUp size={14} />
        La Brecha Social de Buga
      </div>

      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">Simulador de Valor y Esfuerzo</h3>
        <p className="text-sm text-on-surface-variant max-w-2xl text-justify">
          El material recuperado por los recicladores se valoriza exponencialmente cuando pasa de las manos fatigadas de la calle a las básculas compactadoras de la industria siderúrgica y papelera. Calcula la brecha a continuación.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive individual material calculator */}
        <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/20 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary">
              1. Seleccione un Material
            </label>
            <select 
              value={selectedMaterialId} 
              onChange={(e) => setSelectedMaterialId(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant/30 text-primary py-2.5 px-3 rounded focus:outline-none focus:ring-1 focus:ring-secondary text-sm font-medium"
            >
              {MATERIALS.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name} (vía {item.unit})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-secondary">
                2. Cantidad Recolectada (Bulk)
              </label>
              <span className="font-mono text-sm font-bold bg-secondary/10 text-secondary px-2.5 py-0.5 rounded">
                {kilos} kg
              </span>
            </div>
            <input 
              type="range" 
              min={5} 
              max={500} 
              step={5}
              value={kilos} 
              onChange={(e) => setKilos(parseInt(e.target.value))}
              className="w-full accent-secondary h-1.5 rounded-lg bg-surface-container cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[10px] text-on-surface-variant">
              <span>5 kg (Una bolsa)</span>
              <span>250 kg (Media zorra)</span>
              <span>500 kg (Carga completa)</span>
            </div>
          </div>

          <div className="pt-4 border-t border-outline-variant/10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Precio Comparativo x {kilos}kg</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-3 rounded border-l-4 border-primary">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Al Reciclador</span>
                <span className="text-lg font-bold text-primary block">
                  {formatCOP(currentMaterial.paidToRecycler * kilos)}
                </span>
                <span className="text-[10px] text-on-surface-variant block font-mono">
                  {formatCOP(currentMaterial.paidToRecycler)}/kg
                </span>
              </div>

              <div className="bg-surface-container-low p-3 rounded border-l-4 border-secondary">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">A la Industria</span>
                <span className="text-lg font-bold text-secondary block">
                  {formatCOP(currentMaterial.paidToIndustry * kilos)}
                </span>
                <span className="text-[10px] text-on-surface-variant block font-mono">
                  {formatCOP(currentMaterial.paidToIndustry)}/kg
                </span>
              </div>
            </div>

            <div className="bg-primary-container/20 p-3.5 rounded border border-primary-container text-xs text-primary-container">
              <p className="italic text-justify font-serif text-[13px] text-primary">
                "{currentMaterial.description}"
              </p>
            </div>

            <button 
              onClick={handleAddToCard}
              className="w-full bg-primary hover:bg-primary/95 text-white py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Plus size={16} />
              Agregar a la Carga del Día
            </button>
          </div>
        </div>

        {/* Right Column: Simulated day's workload dashboard */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/20 shadow-sm flex flex-col justify-between h-full min-h-[500px]">
          <div>
            <div className="flex justify-between items-center mb-4 border-b border-outline-variant/20 pb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Briefcase size={16} className="text-secondary" />
                Carga de la Zorra Colectora ({cart.length} materiales)
              </h4>
              <span className="text-xs font-mono font-bold bg-surface px-2.5 py-1 rounded border border-outline-variant/20 text-on-surface select-none">
                {totalWeight} kg totales
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="py-12 text-center text-on-surface-variant space-y-3">
                <HelpCircle size={32} className="mx-auto text-outline-variant" />
                <p className="text-xs uppercase tracking-wider font-semibold">Zorra Colectora Vacía</p>
                <p className="text-xs max-w-md mx-auto">Selecciona materiales en la columna izquierda y agrégalos para ver el impacto conjunto de una jornada real de empuje humano en Buga.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {cart.map(item => (
                  <div key={item.material.id} className="flex justify-between items-center p-3 bg-surface rounded border border-outline-variant/15 text-sm hover:bg-surface-container-low transition-colors">
                    <div>
                      <span className="font-semibold text-primary">{item.material.name}</span>
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant mt-0.5">
                        <span className="font-bold">{item.quantity} kg</span>
                        <span>•</span>
                        <span>Precio base: {formatCOP(item.material.paidToRecycler)}/kg</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="font-mono font-bold text-primary block">
                          {formatCOP(item.material.paidToRecycler * item.quantity)}
                        </span>
                        <span className="text-[10px] text-on-surface-variant block">
                          Ind. {formatCOP(item.material.paidToIndustry * item.quantity)}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.material.id)}
                        className="text-error/75 hover:text-error hover:bg-error-container/20 p-1.5 rounded transition-all cursor-pointer"
                        title="Eliminar de la zorra"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-outline-variant/30 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded space-y-1">
                <span className="text-[10px] text-primary uppercase font-bold tracking-wider block">Ingreso de Don Omar / Reciclador</span>
                <span className="text-2xl font-bold text-primary block">{formatCOP(totalPaidRecycler)}</span>
                <p className="text-[10px] text-on-surface-variant text-justify mt-1">Suma pagada por el intermediario de bronce/centro en Buga.</p>
              </div>

              <div className="p-4 bg-secondary/5 rounded space-y-1">
                <span className="text-[10px] text-secondary uppercase font-bold tracking-wider block">Valor Comercial Final (Industria)</span>
                <span className="text-2xl font-bold text-secondary block">{formatCOP(totalPaidIndustry)}</span>
                <p className="text-[10px] text-on-surface-variant text-justify mt-1">Lo que el gran conglomerado siderúrgico o papelero ingresa.</p>
              </div>
            </div>

            {/* Explaining the metrics */}
            {totalPaidRecycler > 0 && (
              <div className="p-4 bg-surface rounded border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-primary uppercase">Diferencia / Plusvalía de Calle:</span>
                  <span className="font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded text-xs">
                    -{formatCOP(totalGap)} ({Math.round(100 - ratio)}% de Descuento estructural)
                  </span>
                </div>

                <div className="w-full bg-outline-variant/20 h-2.5 rounded-full overflow-hidden block">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-500"
                    style={{ width: `${ratio}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                  <span>Reciclador obtiene: {Math.round(ratio)}%</span>
                  <span>Intermediarios e Industria se quedan con: {Math.round(100 - ratio)}%</span>
                </div>

                {/* Economic comparison warning */}
                <div className="text-xs leading-relaxed space-y-2 pt-1 border-t border-outline-variant/10 text-on-surface-variant text-justify">
                  <span className="font-bold text-on-surface block">Evaluación de Alimentación y Sobrevivencia:</span>
                  {totalPaidRecycler >= DAILY_LEGAL_MINIMUM_WAGE_COP ? (
                    <p>
                      ✨ Con esta enorme carga de <strong className="text-primary">{totalWeight}kg</strong>, el reciclador alcanza un ingreso diario que supera el salario mínimo legal diario de Colombia ({formatCOP(DAILY_LEGAL_MINIMUM_WAGE_COP)}). Sin embargo, esto requiere un esfuerzo físico brutal, frecuentemente acarreando carretas de tracción humana por más de 12 kilómetros.
                    </p>
                  ) : (
                    <p>
                      ⚠️ Con <strong className="text-red-700">{totalWeight}kg</strong> acumulados, el pago total representa apenas el <strong className="text-red-700">{Math.round((totalPaidRecycler / DAILY_LEGAL_MINIMUM_WAGE_COP) * 100)}%</strong> del salario mínimo vital diario de Colombia ({formatCOP(DAILY_LEGAL_MINIMUM_WAGE_COP)}). Esto no alcanza para cubrir la canasta básica familiar de un solo día.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
