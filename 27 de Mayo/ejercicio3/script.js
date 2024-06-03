function enviarFormulario() {
    // obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // muestra los valores en la consola
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', correo);
    console.log('Mensaje:', mensaje);
}
