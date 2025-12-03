import { Plus, Minus, RotateCcw, History } from 'lucide-react';
import { useAppStore } from './store/useAppStore';

function App() {

  const count = useAppStore((state) => state.count);
  const step = useAppStore((state) => state.step);
  const history = useAppStore((state) => state.history);
  const increment = useAppStore((state) => state.increment);
  const decrement = useAppStore((state) => state.decrement);
  const reset = useAppStore((state) => state.reset);
  const setStep = useAppStore((state) => state.setStep);
  const clearHistory = useAppStore((state) => state.clearHistory);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Contador Interactivo
          </h1>

          {/* Display Counter */}
          <div className="bg-linear-to-r from-purple-500 to-pink-500 rounded-xl p-12 mb-8">
            <div className="text-center">
              <p className="text-white text-sm font-medium mb-2">Valor Actual</p>
              <p 
                className="text-7xl font-bold text-white"
                data-testid="counter-value"
              >
                {count}
              </p>
            </div>
          </div>

          {/* Step Control */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <label htmlFor="step-input" className="text-gray-700 font-medium">
              Incremento:
            </label>
            <input
              id="step-input"
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              min="1"
              className="w-24 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-center"
            />
          </div>

          {/* Control Buttons */}
          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            <button
              onClick={increment}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 font-medium"
              aria-label="Incrementar"
            >
              <Plus size={20} />
              Incrementar
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2 font-medium"
              aria-label="Decrementar"
            >
              <Minus size={20} />
              Decrementar
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2 font-medium"
              aria-label="Resetear"
            >
              <RotateCcw size={20} />
              Resetear
            </button>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-800" data-testid="current-value">
                  {count}
                </p>
                <p className="text-sm text-gray-600">Valor</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {step}
                </p>
                <p className="text-sm text-gray-600">Paso</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {history.length}
                </p>
                <p className="text-sm text-gray-600">Operaciones</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <History size={24} />
                Historial
              </h2>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-sm text-red-500 hover:text-red-700 font-medium"
                  aria-label="Limpiar historial"
                >
                  Limpiar
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <p className="text-center text-gray-400 py-8">
                No hay operaciones registradas
              </p>
            ) : (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-mono text-gray-800 font-medium">
                      {item.operation}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
