# TECNOLOGICO NACIONAL DE MEXICO
# INSTITUTO TECNOLOGICO DE OAXACA
# Utilería JS - Validación de Formularios
# Autor: Canseco Reyes Juan Carlos
# Materia: Programacion Web
# Profesor Martinez Nieto Adelina
# Problema que resuelve: Evita la entrada de datos basura (nombres con números, correos mal formados, contraseñas débiles o menores de edad) en los formularios web, centralizando las validaciones en una sola librería ligera sin dependencias.

---

## Instalación
Para utilizar esta librería en cualquier proyecto, simplemente enlaza el script en tu documento HTML, preferentemente antes del cierre de la etiqueta `</body>` o en el `<head>` con el atributo `defer`:

```html
    <head>
        <script src="js/utileria.js" defer></script>
    </head>

    o
    
    <script src="js/utileria.js"></script> --antes de finalizar el body



```
## Libreria utileria.js

### 1. Validar Correo Electrónico
Valida que una cadena cumpla con la estructura oficial de un correo electrónico.

```js
     /** validarCorreo(correo) -> boolean*/
    function validarCorreo(correo) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const resultado = regex.test(correo);
        console.log(`[Utilería] validarCorreo: "${correo}" ->`, resultado);
        return resultado;
    }

```