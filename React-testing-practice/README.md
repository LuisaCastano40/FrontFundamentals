# 🧪 Configuración de Vitest en el proyecto

Este proyecto utiliza **Vitest + React Testing Library** para pruebas unitarias, con soporte para JSDOM y jest-dom.

---

## ⚙️ Instalación

```bash
npm install --save-dev vitest jsdom @vitest/coverage-v8
npm install --save-dev @testing-library/react @testing-library/dom @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```

---

## 🛠 Configuración (`vitest.config.js`)

```js
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
```

---

## 📄 Archivo de setup: `src/tests/setup.js`

```js
import '@testing-library/jest-dom';
```

---

## ▶️ Scripts disponibles

```bash
npm run test          # Ejecutar pruebas
npm run test:watch    # Ejecutar en modo watch
npm run test:ui       # Interfaz visual de tests
npm run test:coverage # Generar reporte de cobertura
```
