import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "./tasksInitialState";

/**
 * SLICE DE REDUX TOOLKIT

 Un "slice" es una porción del estado global que incluye:
 - Estado inicial
 - Reducers (funciones que modifican el estado)
 - Actions (se generan automáticamente)
 
 Redux Toolkit usa Immer, lo que significa:
    *Tú puedes escribir código como si mutaras el estado (state.algo = ...).
    *Pero Immer detecta esos cambios y produce un nuevo estado inmutable por debajo.
 */

const tasksSlice = createSlice({
    name: tasks, //nombre del slice
    initialState: tasksInitialState,

    // Reducers: funciones que modifican el estado
    reducers: {
        /*
            state: Estado actual
            action: Acción con payload
        */

        addTask: (state, action) => {
            const newTask = {
                id: state.nextId,
                ...action.payload,
                status: 'Pendiente'
            }
            state.items.push(newTask);
            state.nextId++
        },

        // payload es solo un id
        deleteTask: (state, action) => {
            // me devuelve sólo los que cumplen la condición
            state.items = state.items.filter(task => task.id !== action.payload);
        },

        updateTask: (state, action) => {
            const index = state.items.findIndex(task => task.id === action.payload.id)
            // Si el elemento existe → index será un número
            // Si NO existe → index será - 1
            if (index !== -1) {
                state.items[index] = {
                    ...state.items,
                    ...action.payload
                }
            }
        }
    }

})

// creamos actions automaticamente
export const {addTask, deleteTask, updateTask} = tasksSlice.actions;

// Exportar reducer para store
export const tasksReducer = tasksSlice.reducer;