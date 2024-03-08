function validarFormulario() {
    // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validar nombre (solo letras y espacios)
    var nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        mostrarError("Nombre no válido. Solo se permiten letras y espacios.");
        return;
    }

    // Validar email
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        mostrarError("Email no válido.");
        return;
    }

    // Validar contraseña (al menos 6 caracteres)
    if (password.length < 6) {
        mostrarError("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Verificar contraseña
    if (password !== confirmPassword) {
        mostrarError("Las contraseñas no coinciden.");
        return;
    }

    // Limpiar mensaje de error y enviar formulario (simulado)
    limpiarError();
    alert("¡Registro exitoso!");
}

function mostrarError(mensaje) {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = mensaje;
}

function limpiarError() {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "";
}
