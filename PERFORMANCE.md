# Performance en React.js

## ¿Qué es?
Velocidad a la que una aplicación se descarga y muestra en pantalla.

## Como medirlo
1. Ir al performance tab del navegador.
2. Light house. SEO.
3. React Dev Tools

## ¿Qué consejos da React?
1. Utilizar el build de producción
2. Evitar las listas muy largas
3. Evitar mutar los datos
4. Evitar la reconciliación innecesaria.

## ¿Qué podemos hacer?
1. Usar useEffect para memoizar funciones caras: https://reactjs.org/docs/hooks-reference.html#usememo
2. Usar useCallback para memoizar referencias a funciones: https://reactjs.org/docs/hooks-reference.html#usecallback