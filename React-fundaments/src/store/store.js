import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../features/tasks/tasksSlice';

/**
 * STORE DE REDUX
 * 
 * El store es el contenedor global del estado.
 * configureStore simplifica la configuración:
 * - Incluye Redux DevTools automáticamente
 * - Configura middleware por defecto
 * - Combina reducers
 */

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});
