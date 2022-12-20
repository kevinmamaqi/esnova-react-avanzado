# Testing

## ¿Por qué?
1. El código va a tener bugs.
2. Los bugs son caros de corregir una vez salen del entorno de desarrollo.
3. Los tests permiten entender mejor el código, especialmente el complejo.

## Herramientas
1. JEST: Framework para testear javascript.
2. VITEST: Framework para hacer unit testing en javascript.
3. JSDOM: Implementa el DOM, HTML, APIs web para permitir testear código fuera del navegador. Esencial para nuestro proposito de hacer tests con react.js.
4. React Testing Library: utilidades para testear react.js
5. Mock Service Worker: mockear peticiones asincronas.

## Setup
1. Instalar MSW siguiendo las isntrucciones
2. Añadir cross-fetch para dar soporte de fetch en node: https://markus.oberlehner.net/blog/using-mock-service-worker-with-vitest-and-fetch/
3. Crear un setup de react-testing-library para poder utilizar los providers: https://testing-library.com/docs/react-testing-library/setup/