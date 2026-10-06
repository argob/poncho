<!-- omit in toc -->
# Changelog - Color Module

Todos los cambios notables en este módulo serán documentados en este archivo.

- [🎨 Refactorización](#-refactorización)
  - [Extracción de `replaceSpecialChars`](#extracción-de-replacespecialchars)
- [✨ Nuevas funcionalidades](#-nuevas-funcionalidades)
  - [Conversiones de color expandidas](#conversiones-de-color-expandidas)
- [📚 Documentación](#-documentación)
  - [JSDoc completado](#jsdoc-completado)
  - [README mejorado](#readme-mejorado)
- [🔧 Mantenimiento](#-mantenimiento)
  - [Cambios internos](#cambios-internos)
  - [Scripts de demostración](#scripts-de-demostración)
- [🧪 Tests](#-tests)
- [📝 Notas](#-notas)


<!-- omit in toc -->
## Release 1.0.0

### 🎨 Refactorización

#### Extracción de `replaceSpecialChars`
- Se extrajo la funcionalidad de `replaceSpecialChars` de la clase `Color` y se movió a un módulo independiente
- Nueva ubicación: `src/js/utils/replace-special-chars/`
- La clase `Color` ahora usa `replaceChars()` que delega a la función global `replaceSpecialChars`
- Beneficio: Reutilización de la lógica en otros módulos del proyecto

### ✨ Nuevas funcionalidades

#### Conversiones de color expandidas
- **`ponchoColor(color, mode)`**: Ahora soporta convertir colores a múltiples formatos:
  - `"hex"` (default): Retorna color en hexadecimal (ej: `#2897d4`)
  - `"rgb"`: Retorna array RGB (ej: `[40, 151, 212]`)
  - `"hsl"`: Retorna array HSL (ej: `[205, 73.3%, 49.4%]`)

- **`rgbToHsl(r, g, b)`**: Nueva función para convertir valores RGB a HSL
  - Parámetros: Valores de rojo, verde y azul (0-255)
  - Retorna: Array con [Hue (0-360), Saturation (%), Lightness (%)]

### 📚 Documentación

#### JSDoc completado
Se agregaron comentarios JSDoc a las siguientes funciones/métodos:
- `constructor(colorDefinitions)`: Constructor de la clase Color
- `spaces` (getter): Lista de espacios de color disponibles
- `groupsBySpace(space)`: Obtiene grupos dentro de un espacio

#### README mejorado
- Nuevo archivo `README.md` en el módulo `replace-special-chars`
- Documentación clara de sintaxis, parámetros y ejemplos de uso

### 🔧 Mantenimiento

#### Cambios internos
- Removido `debugger` statement del método `colorDefinitions`
- Mejorado formato y legibilidad del código en `variables` getter
- Mensajes de error más consistentes en español

#### Scripts de demostración
- Actualizado `demo/index.html` para cargar los nuevos scripts modulares
- Removidas referencias a scripts antiguos y consolidados

### 🧪 Tests

- Agregados tests para `replaceSpecialChars` en `test/replace-special-chars.test.js`
- Validación de comportamiento con caracteres acentuados y especiales

### 📝 Notas

- La compatibilidad con el código existente se mantiene
- `replaceChars()` es una envoltura que mantiene la compatibilidad interna
