# Conceptos fundamentales de React Testing Library
## Filosofía principal: 
"Testea como los usuarios interactúan con tu app, no detalles de implementación"

## 3 pilares básicos:
* Render - Renderizar el componente
* Query - Buscar elementos en el DOM
* Interact & Assert - Interactuar y verificar resultados

## Patrón AAA:

* Arrange (Preparar): Configurar el escenario
* Act (Actuar): Ejecutar la acción del usuario
* Assert (Verificar): Comprobar el resultado

### Paso 1: Estructura básica de un test

```js
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CounterApp from './CounterApp';

describe('CounterApp', () => {
  test('debe renderizar el título', () => {
    // 1. ARRANGE (preparar)
    render(<CounterApp />);
    
    // 2. ACT (actuar) - en este caso no hay acción
    
    // 3. ASSERT (verificar)
    expect(screen.getByText('Contador Interactivo')).toBeInTheDocument();
  });
});
```
##  Paso 2: Queries – Cómo buscar elementos

Hay 3 tipos de queries:

---

###  1. `getBy*` — Encuentra 1 elemento (falla si no existe)

```js
screen.getByText('Incrementar');      // Por texto visible
screen.getByRole('button');           // Por rol ARIA
screen.getByLabelText('Incremento:'); // Por label asociado
screen.getByTestId('counter-value');  // Por data-testid
```

---

###  2. `queryBy*` — Encuentra 1 elemento (retorna null si no existe)

```js
// Útil para verificar que algo NO existe
const element = screen.queryByText('No existe');
expect(element).not.toBeInTheDocument();
```

---

###  3. `findBy*` — Asíncrono (espera hasta que el elemento aparezca)

```js
// Para elementos que aparecen después
const element = await screen.findByText('Cargado');
```

---

##  Paso 4: Test de interacciones — fireEvent vs userEvent

Hay 2 formas de simular interacciones:

---

###  fireEvent (básico y síncrono)

```js
import { fireEvent } from '@testing-library/react';

fireEvent.click(button);
fireEvent.change(input, { target: { value: '5' } });
```

---

###  userEvent (recomendado, más realista)

```js
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
await user.click(button);
await user.type(input, '5');
```

---

##  Paso 9: Matchers más comunes

```js
// Verificar texto
expect(element).toHaveTextContent('Hola');

// Verificar que existe
expect(element).toBeInTheDocument();

// Verificar que NO existe
expect(element).not.toBeInTheDocument();

// Verificar valor de input
expect(input).toHaveValue(5);

// Verificar atributo
expect(button).toHaveAttribute('disabled');

// Verificar clase CSS
expect(element).toHaveClass('active');

// Verificar visibilidad
expect(element).toBeVisible();
```

---

##  Comandos para ejecutar

```bash
# Ejecutar todos los tests
npm run test

# Ejecutar en modo watch (se re-ejecutan al guardar)
npm run test -- --watch

# Ver UI de tests
npm run test:ui

# Ver cobertura
npm run test -- --coverage
```

---

##  Tips importantes

- Prioriza queries por accesibilidad: **getByRole > getByLabelText > getByText > getByTestId**
- Usa **userEvent** en lugar de fireEvent (más realista)
- No testees implementación — **testea comportamiento**
- Un concepto por test (tests pequeños y claros)
- Usa `screen.debug()` para inspeccionar el HTML renderizado