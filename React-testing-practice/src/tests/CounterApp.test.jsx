import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { useAppStore } from './../store/useAppStore';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Bloque de pruebas para App de Counter', () => {
  
  // Limpia el store antes de cada test
  beforeEach(() => {
    const state = useAppStore.getState();
    state.reset();
    state.clearHistory();
  });

  describe('Renderizado inicial', () => {
    
    test('debe mostrar el título de la aplicación', () => {
      render(<App />);
      expect(screen.getByText('Contador Interactivo')).toBeInTheDocument();
    });

    test('debe mostrar el contador en 0 inicialmente', () => {
      render(<App />);
      const counterValue = screen.getByTestId('counter-value');
      expect(counterValue).toHaveTextContent('0');
    });

    test('debe mostrar el paso por defecto en 1', () => {
      render(<App />);
      const stepInput = screen.getByLabelText('Incremento:');
      expect(stepInput).toHaveValue(1);
    });

    test('debe mostrar todos los botones principales', () => {
      render(<App />);
      expect(screen.getByLabelText('Incrementar')).toBeInTheDocument();
      expect(screen.getByLabelText('Decrementar')).toBeInTheDocument();
      expect(screen.getByLabelText('Resetear')).toBeInTheDocument();
    });

    test('debe mostrar mensaje de historial vacío', () => {
      render(<App />);
      expect(screen.getByText('No hay operaciones registradas')).toBeInTheDocument();
    });
  });

  describe('Funcionalidad de incremento', () => {
    
    test('debe incrementar el contador en 1', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      expect(counterValue).toHaveTextContent('0');
      
      await user.click(incrementButton);
      
      expect(counterValue).toHaveTextContent('1');
    });

    test('debe incrementar múltiples veces correctamente', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.click(incrementButton);
      await user.click(incrementButton);
      await user.click(incrementButton);
      
      expect(counterValue).toHaveTextContent('3');
    });

    test('debe respetar el paso configurado', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const stepInput = screen.getByLabelText('Incremento:');
      const incrementButton = screen.getByLabelText('Incrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      // Cambiar el paso a 5
      await user.clear(stepInput);
      await user.type(stepInput, '5');
      
      // Incrementar
      await user.click(incrementButton);
      
      expect(counterValue).toHaveTextContent('5');
    });

    test('debe incrementar con pasos personalizados grandes', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const stepInput = screen.getByLabelText('Incremento:');
      const incrementButton = screen.getByLabelText('Incrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.clear(stepInput);
      await user.type(stepInput, '10');
      await user.click(incrementButton);
      await user.click(incrementButton);
      
      expect(counterValue).toHaveTextContent('20');
    });
  });

  describe('Funcionalidad de decremento', () => {
    
    test('debe decrementar el contador en 1', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const decrementButton = screen.getByLabelText('Decrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.click(decrementButton);
      
      expect(counterValue).toHaveTextContent('-1');
    });

    test('debe decrementar con pasos personalizados', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const stepInput = screen.getByLabelText('Incremento:');
      const decrementButton = screen.getByLabelText('Decrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.clear(stepInput);
      await user.type(stepInput, '3');
      await user.click(decrementButton);
      
      expect(counterValue).toHaveTextContent('-3');
    });

    test('debe permitir valores negativos', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const decrementButton = screen.getByLabelText('Decrementar');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.click(decrementButton);
      await user.click(decrementButton);
      await user.click(decrementButton);
      
      expect(counterValue).toHaveTextContent('-3');
    });
  });

  describe('Funcionalidad de reset', () => {
    
    test('debe resetear el contador a 0 desde valor positivo', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const resetButton = screen.getByLabelText('Resetear');
      const counterValue = screen.getByTestId('counter-value');
      
      // Incrementar varias veces
      await user.click(incrementButton);
      await user.click(incrementButton);
      await user.click(incrementButton);
      expect(counterValue).toHaveTextContent('3');
      
      // Resetear
      await user.click(resetButton);
      expect(counterValue).toHaveTextContent('0');
    });

    test('debe resetear el contador a 0 desde valor negativo', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const decrementButton = screen.getByLabelText('Decrementar');
      const resetButton = screen.getByLabelText('Resetear');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.click(decrementButton);
      await user.click(decrementButton);
      expect(counterValue).toHaveTextContent('-2');
      
      await user.click(resetButton);
      expect(counterValue).toHaveTextContent('0');
    });
  });

  describe('Historial de operaciones', () => {
    
    test('debe agregar operación de incremento al historial', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      
      // Verificar que no hay historial
      expect(screen.getByText('No hay operaciones registradas')).toBeInTheDocument();
      
      // Hacer una operación
      await user.click(incrementButton);
      
      // Verificar que aparece en el historial
      expect(screen.queryByText('No hay operaciones registradas')).not.toBeInTheDocument();
      expect(screen.getByText('+1')).toBeInTheDocument();
    });

    test('debe agregar operación de decremento al historial', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const decrementButton = screen.getByLabelText('Decrementar');
      
      await user.click(decrementButton);
      
      expect(screen.getByText('-1')).toBeInTheDocument();
    });

    test('debe agregar operación de reset al historial', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const resetButton = screen.getByLabelText('Resetear');
      
      await user.click(incrementButton);
      await user.click(resetButton);
      
      expect(screen.getByText('Reset')).toBeInTheDocument();
    });

    test('debe mostrar múltiples operaciones en orden', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const decrementButton = screen.getByLabelText('Decrementar');
      
      await user.click(incrementButton);
      await user.click(incrementButton);
      await user.click(decrementButton);
      
      // Debe haber 2 operaciones +1 y 1 operación -1
      const plusOnes = screen.getAllByText('+1');
      expect(plusOnes).toHaveLength(2);
      expect(screen.getByText('-1')).toBeInTheDocument();
    });

    test('debe limpiar el historial completamente', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      
      // Hacer varias operaciones
      await user.click(incrementButton);
      await user.click(incrementButton);
      await user.click(incrementButton);
      
      // Verificar que hay historial
      expect(screen.getAllByText('+1')).toHaveLength(3);
      
      // Limpiar historial
      const clearButton = screen.getByLabelText('Limpiar historial');
      await user.click(clearButton);
      
      // Verificar que se limpió
      expect(screen.getByText('No hay operaciones registradas')).toBeInTheDocument();
      expect(screen.queryByText('+1')).not.toBeInTheDocument();
    });

    test('debe mantener el contador al limpiar el historial', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const clearButton = screen.getByLabelText('Limpiar historial');
      const counterValue = screen.getByTestId('counter-value');
      
      await user.click(incrementButton);
      await user.click(incrementButton);
      expect(counterValue).toHaveTextContent('2');
      
      await user.click(clearButton);
      
      // El contador debe seguir en 2
      expect(counterValue).toHaveTextContent('2');
    });
  });

  describe('Estadísticas', () => {
    
    test('debe mostrar el total de operaciones', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      
      await user.click(incrementButton);
      await user.click(incrementButton);
      
      expect(screen.getByText(/2/)).toBeInTheDocument();
    });
  });

  describe('Integración con Zustand', () => {
    
    test('debe actualizar el store global al incrementar', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      await user.click(incrementButton);
      
      const storeCount = useAppStore.getState().count;
      expect(storeCount).toBe(1);
    });

    test('debe actualizar el historial en el store', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      await user.click(incrementButton);
      
      const storeHistory = useAppStore.getState().history;
      expect(storeHistory).toHaveLength(1);
      expect(storeHistory[0].operation).toBe('+1');
    });

    test('debe mantener sincronización entre múltiples acciones', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      const incrementButton = screen.getByLabelText('Incrementar');
      const decrementButton = screen.getByLabelText('Decrementar');
      
      await user.click(incrementButton);
      await user.click(incrementButton);
      await user.click(decrementButton);
      
      const state = useAppStore.getState();
      expect(state.count).toBe(1);
      expect(state.history).toHaveLength(3);
    });
  });

  describe('Flujo completo de usuario', () => {
    
    test('debe completar un flujo completo de operaciones', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      // Obtener elementos
      const stepInput = screen.getByLabelText('Incremento:');
      const incrementButton = screen.getByLabelText('Incrementar');
      const decrementButton = screen.getByLabelText('Decrementar');
      const resetButton = screen.getByLabelText('Resetear');
      const counterValue = screen.getByTestId('counter-value');
      
      // 1. Incrementar con paso 1
      await user.click(incrementButton);
      expect(counterValue).toHaveTextContent('1');
      
      // 2. Cambiar paso a 5
      await user.clear(stepInput);
      await user.type(stepInput, '5');
      
      // 3. Incrementar con paso 5
      await user.click(incrementButton);
      expect(counterValue).toHaveTextContent('6');
      
      // 4. Decrementar con paso 5
      await user.click(decrementButton);
      expect(counterValue).toHaveTextContent('1');
      
      // 5. Resetear
      await user.click(resetButton);
      expect(counterValue).toHaveTextContent('0');
      
      // 6. Verificar historial completo
      expect(screen.getByText('+1')).toBeInTheDocument();
      expect(screen.getByText('+5')).toBeInTheDocument();
      expect(screen.getByText('-5')).toBeInTheDocument();
      expect(screen.getByText('Reset')).toBeInTheDocument();
    });
  });
});