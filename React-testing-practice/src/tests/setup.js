// Sirve para inicializar cosas antes de ejecutar cualquier test
// Crear mocks globales
// Agregar funciones globales que Vitest no trae

import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpia el DOM después de cada test
afterEach(() => {
  cleanup();
});

