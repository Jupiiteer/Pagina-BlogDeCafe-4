// Seleccionar elemento del formulario
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", (e) => datos[e.target.id] = e.target.value);
email.addEventListener("input", (e) => datos[e.target.id] = e.target.value);
mensaje.addEventListener("input", (e) => datos[e.target.id] = e.target.value);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
    mostrarAlerta("Mensaje enviado correctamente");
})

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add("alerta");
    }
    formulario.appendChild(alerta);
    setTimeout(() => { alerta.remove() }, 2000);
}