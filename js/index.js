// Seleccionamos tu formulario (nota: mantuviste el id="formLogin" en tu HTML de registro)
        const formularioRegistro = document.getElementById('formLogin');

        formularioRegistro.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Evita que la página recargue

            // Obtenemos los valores de los inputs usando tus IDs
            const nombre = document.getElementById('nombre').value;
            const fechaNac = document.getElementById('nac').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('tel').value;
            const password = document.getElementById('pass').value;

            // 1. VALIDACIONES OBLIGATORIAS
            if (!soloLetras(nombre)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Nombre inválido',
                    text: 'El nombre solo debe contener letras y espacios.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ffc115'
                });
                return;
            }

            if (!esMayorDeEdad(fechaNac)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Acceso denegado',
                    text: 'Debes ser mayor de 18 años para registrarte.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ffc115'
                });
                return;
            }

            if (!validarCorreo(correo)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Correo inválido',
                    text: 'Ingresa un formato de correo válido.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ffc115'
                });
                return;
            }

            if (!validarLongitud(telefono, 10)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Teléfono inválido',
                    text: 'El número de teléfono no puede tener más de 10 dígitos.'
                });
                return;
            }

            if (!validarPassword(password)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Contraseña débil',
                    text: 'Debe incluir mayúscula, minúscula, número, carácter especial y 8+ caracteres.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ffc115'
                });
                return;
            }

            // 2. USO DE FUNCIONES EXTRAS SI TODO ES VÁLIDO
            const nombreFormateado = capitalizarNombre(nombre);
            const edad = calcularEdad(fechaNac);
            const diasFaltantes = diasParaCumpleanos(fechaNac);

            // 3. VENTANA MODAL DE ÉXITO
            Swal.fire({
                icon: 'success',
                title: '¡Registro Completado!',
                html: `
                    Hola, <strong>${nombreFormateado}</strong>.<br><br>
                    Tu cuenta ha sido creada exitosamente.<br>
                    Tienes <strong>${edad}</strong> años de edad.<br>
                    Faltan <strong>${diasFaltantes}</strong> días para tu próximo cumpleaños.
                `,
                confirmButtonColor: '#ffc115', // Usé la variable --color-primario de tu CSS
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    formularioRegistro.reset(); // Limpia los campos del formulario
                }
            });
        });