# testing-class1

Este proyecto usa Node.js + npm y Jest para ejecutar pruebas automáticas.

El objetivo de este README es servir para dos tipos de usuario en el mismo lugar:

- Persona principiante (paso a paso, explicado simple).
- Persona o agente con experiencia (comandos directos al final).

## 1) Qué necesitas antes de empezar

### Requisitos mínimos

- Node.js instalado (recomendado: versión LTS).
- npm instalado (viene incluido con Node.js).

### Cómo verificar que está todo bien instalado

Abre una terminal en tu computadora y ejecuta:

```bash
node -v
npm -v
```

Si ambos comandos devuelven una versión (por ejemplo `v22.x.x` y `10.x.x`), ya puedes continuar.

Si alguno falla, instala o reinstala Node.js desde su sitio oficial.

## 2) Abrir el proyecto correctamente

Debes ejecutar comandos dentro de la carpeta raíz del proyecto, donde está el archivo `package.json`.

En este caso, la raíz es esta carpeta:

`c:\Users\andre\Desktop\testing-class-PB`

Puedes verificar que estás en la carpeta correcta si al listar archivos ves `package.json`.

## 3) Instalar paquetes (dependencias)

### Para principiantes

Ejecuta este comando una sola vez al clonar/descargar el proyecto, o cada vez que cambie `package.json`:

```bash
npm i
```

Qué hace `npm i`:

- Lee el archivo `package.json`.
- Descarga las librerías necesarias (por ejemplo `jest`).
- Crea la carpeta `node_modules`.
- Deja el proyecto listo para correr pruebas.

Cuando termine, no debería haber errores en rojo.

## 4) Ejecutar tests

### Comando principal

```bash
npm test
```

Este comando ejecuta el script `test` definido en `package.json`, que corre Jest.

Comando equivalente:

```bash
npm run test
```

### Qué resultado esperar

- Si todo está bien: verás tests en estado `PASS`.
- Si algo falla: verás `FAIL` y el detalle del error para corregirlo.

Las pruebas del proyecto están en `src/tests/`.

## 5) Problemas comunes (rápido)

### Error: `npm` o `node` no se reconoce

Significa que Node.js no está instalado o no está en el PATH del sistema.

Solución:

1. Reinstalar Node.js.
2. Cerrar y abrir la terminal.
3. Volver a probar `node -v` y `npm -v`.

### Error al ejecutar `npm test` en Windows por variables de entorno

El script actual usa `NODE_OPTIONS=...` (formato estilo Unix). Si falla en tu terminal de Windows, prueba ejecutar los tests desde Git Bash. Otra opción técnica es ajustar el script con `cross-env`.

## 6) Resumen rápido (para quien ya sabe)

Desde la raíz del proyecto:

```bash
npm i
npm test
```

Listo. Con eso instalas dependencias y corres toda la suite de tests.
