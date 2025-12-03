import { describe, test, expect, beforeEach } from 'vitest';
import { useAppStore } from './../store/useAppStore';

describe('Bloque de pruebas para testing del counterSlice', () => {
  
  beforeEach(() => {
    const state = useAppStore.getState();
    state.reset();
    state.clearHistory();
  });

  describe('Estado inicial', () => {
    
    test('debe tener count en 0', () => {
      const state = useAppStore.getState();
      expect(state.count).toBe(0);
    });

    test('debe tener step en 1', () => {
      const state = useAppStore.getState();
      expect(state.step).toBe(1);
    });

    test('debe tener historial vacío', () => {
      const state = useAppStore.getState();
      expect(state.history).toEqual([]);
    });
  });

  describe('setCount', () => {
    
    test('debe actualizar el contador', () => {
      const { setCount } = useAppStore.getState();
      setCount(5);
      expect(useAppStore.getState().count).toBe(5);
    });

    test('debe permitir valores negativos', () => {
      const { setCount } = useAppStore.getState();
      setCount(-10);
      expect(useAppStore.getState().count).toBe(-10);
    });
  });

  describe('setStep', () => {
    
    test('debe actualizar el paso', () => {
      const { setStep } = useAppStore.getState();
      setStep(5);
      expect(useAppStore.getState().step).toBe(5);
    });
  });

  describe('increment', () => {
    
    test('debe incrementar el contador con step por defecto', () => {
      const { increment } = useAppStore.getState();
      increment();
      expect(useAppStore.getState().count).toBe(1);
    });

    test('debe incrementar el contador con step personalizado', () => {
      const { setStep, increment } = useAppStore.getState();
      setStep(5);
      increment();
      expect(useAppStore.getState().count).toBe(5);
    });

    test('debe agregar la operación al historial', () => {
      const { increment } = useAppStore.getState();
      increment();
      const history = useAppStore.getState().history;
      expect(history).toHaveLength(1);
      expect(history[0].operation).toBe('+1');
    });
  });

  describe('decrement', () => {
    
    test('debe decrementar el contador con step por defecto', () => {
      const { decrement } = useAppStore.getState();
      decrement();
      expect(useAppStore.getState().count).toBe(-1);
    });

    test('debe decrementar el contador con step personalizado', () => {
      const { setStep, decrement } = useAppStore.getState();
      setStep(3);
      decrement();
      expect(useAppStore.getState().count).toBe(-3);
    });

    test('debe agregar la operación al historial', () => {
      const { decrement } = useAppStore.getState();
      decrement();
      const history = useAppStore.getState().history;
      expect(history).toHaveLength(1);
      expect(history[0].operation).toBe('-1');
    });
  });

  describe('reset', () => {
    
    test('debe resetear el contador a 0', () => {
      const { setCount, reset } = useAppStore.getState();
      setCount(10);
      reset();
      expect(useAppStore.getState().count).toBe(0);
    });

    test('debe agregar Reset al historial', () => {
      const { reset } = useAppStore.getState();
      reset();
      const history = useAppStore.getState().history;
      expect(history).toHaveLength(1);
      expect(history[0].operation).toBe('Reset');
    });
  });

  describe('addToHistory', () => {
    
    test('debe agregar una operación al historial', () => {
      const { addToHistory } = useAppStore.getState();
      addToHistory('+5');
      const history = useAppStore.getState().history;
      expect(history).toHaveLength(1);
      expect(history[0].operation).toBe('+5');
    });

    test('debe incluir timestamp en cada operación', () => {
      const { addToHistory } = useAppStore.getState();
      addToHistory('+1');
      const history = useAppStore.getState().history;
      expect(history[0].timestamp).toBeDefined();
      expect(typeof history[0].timestamp).toBe('string');
    });

    test('debe agregar al inicio del array', () => {
      const { addToHistory } = useAppStore.getState();
      addToHistory('Primera');
      addToHistory('Segunda');
      const history = useAppStore.getState().history;
      expect(history[0].operation).toBe('Segunda');
      expect(history[1].operation).toBe('Primera');
    });
  });

  describe('clearHistory', () => {
    
    test('debe limpiar el historial', () => {
      const { addToHistory, clearHistory } = useAppStore.getState();
      addToHistory('+1');
      addToHistory('+2');
      addToHistory('+3');
      
      clearHistory();
      
      expect(useAppStore.getState().history).toEqual([]);
    });

    test('no debe afectar el contador', () => {
      const { setCount, addToHistory, clearHistory } = useAppStore.getState();
      setCount(10);
      addToHistory('+1');
      
      clearHistory();
      
      expect(useAppStore.getState().count).toBe(10);
    });
  });

  describe('Flujo completo', () => {
    
    test('debe manejar múltiples operaciones correctamente', () => {
      const { increment, decrement, reset, setStep } = useAppStore.getState();
      
      increment(); // count = 1
      increment(); // count = 2
      
      setStep(5);
      increment(); // count = 7
      decrement(); // count = 2
      
      reset(); // count = 0
      
      const state = useAppStore.getState();
      expect(state.count).toBe(0);
      expect(state.history).toHaveLength(5);
    });
  });
});