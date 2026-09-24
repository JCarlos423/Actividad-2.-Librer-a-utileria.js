const formulario = document.getElementById('formLogin');

        // Cuando el usuario le dé click al botón "Ingresar"
        formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evita que la página recargue al instante

        // Sacamos lo que el usuario escribió
        const correo = document.getElementById('correo').value;
        const password = document.getElementById('pass').value;

        // LLAMAMOS LAS FUNCIONES DE TU utileria.js
        if (!validarCorreo(correo)) {
            // Modal de error para el correo
            Swal.fire({
            icon: 'error',
            title: 'Correo inválido',
            text: 'El formato del correo no es válido.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#ffc115'
            });
            return; // Detiene la ejecución si hay error
        }

        if (!validarPassword(password)) {
            // Modal de error para la contraseña
            Swal.fire({
                icon: 'error',
                title: 'Contraseña débil',
                text: 'Debe tener mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#ffc115'
            });
        return; // Detiene la ejecución si hay error
        }

        // Si pasó las validaciones, mostramos el modal de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            html: `Bienvenido de vuelta. Se ha verificado el correo: <strong>${correo}</strong>`,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#ffc115'
        }).then((result) => {
            // .then() espera a que el usuario cierre el modal para ejecutar esto
            if (result.isConfirmed) {
                formulario.reset(); // Limpia los inputs para que queden en blanco
            }
        });
    });