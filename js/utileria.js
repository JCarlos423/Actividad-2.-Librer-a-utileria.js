
/** validarCorreo(correo) -> boolean*/
function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const resultado = regex.test(correo);
    console.log(`[Utilería] validarCorreo: "${correo}" ->`, resultado);
    return resultado;
}

/**soloLetras(texto) -> boolean*/

function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const resultado = regex.test(texto);
    console.log(`[Utilería] soloLetras: "${texto}" ->`, resultado);
    return resultado;
}

/*validarLongitud(numero, maxLongitud) -> boolean*/
function validarLongitud(numero, maxLongitud) {
    const resultado = String(numero).length <= maxLongitud;
    console.log(`[Utilería] validarLongitud: número "${numero}", máximo ${maxLongitud} ->`, resultado);
    return resultado;
}

/*calcularEdad(fechaNacimiento) -> numero entero*/
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento + 'T00:00:00'); // Evita desfase de zona horaria
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    // Si el mes actual es menor al mes de nacimiento, o si es el mismo mes pero el día actual es menor, restamos un año.
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    console.log(`[Utilería] calcularEdad: nacimiento "${fechaNacimiento}" -> ${edad} años`);
    return edad;
}

/* esMayorDeEdad(fechaNacimiento) -> boolean*/
function esMayorDeEdad(fechaNacimiento) {
    const resultado = calcularEdad(fechaNacimiento) >= 18;
    console.log(`[Utilería] esMayorDeEdad: nacimiento "${fechaNacimiento}" ->`, resultado);
    return resultado;
}

/*validarPassword(password) -> boolean*/
function validarPassword(password) {
    // Expresión regular para los requisitos:
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$\%^&*(),.?":{}\vert{}<>]{8,}$/;
    const resultado = regex.test(password);
    console.log(`[Utilería] validarPassword: [oculto por seguridad] ->`, resultado);
    return resultado;
}

/*capitalizarNombre(nombreCompleto) -> string*/
function capitalizarNombre(nombreCompleto) {
    if (!nombreCompleto) return "";
    const resultado = nombreCompleto.toLowerCase().trim().split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    
    console.log(`[Utilería] capitalizarNombre: de "${nombreCompleto}" a -> "${resultado}"`);
    return resultado;
}

/*diasParaCumpleanos(fechaNacimiento) -> numero entero*/
function diasParaCumpleanos(fechaNacimiento) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); 
    const nacimiento = new Date(fechaNacimiento + 'T00:00:00');
    
    let proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
    
    if (hoy.getTime() > proximoCumple.getTime()) {
        proximoCumple.setFullYear(hoy.getFullYear() + 1);
    }
    
    const diferencia = proximoCumple.getTime() - hoy.getTime();
    const resultado = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    
    console.log(`[Utilería] diasParaCumpleanos: nacimiento "${fechaNacimiento}" -> faltan ${resultado} días`);
    return resultado;
}