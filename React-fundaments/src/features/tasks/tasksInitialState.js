export const tasksInitialState = {
    items: [
        {
            id: 1,
            tittle: 'Practicar React Router con enfoque moderno',
            description: 'Implementar createBrowserRouter, y lazy para mejor uso del routing en React',
            status: 'Completado'
        },
        {
            id: 2,
            tittle: 'Practicar Redux con Redux Toolkit',
            description: 'Repasar configuración de Store, Slices y uso adecuado de reducers y actions ',
            status: 'En proceso'
        },
        {
            id: 3,
            tittle: 'Practicar Material UI',
            description: 'Crear interfaces modernas',
            status: 'Pendiente'
        },
    ],

    nextId: 4
}