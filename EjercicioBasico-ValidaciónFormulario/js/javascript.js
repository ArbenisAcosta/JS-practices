  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida

  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad

  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado

  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida

function recogeDatos(evento) {
    evento.preventDefault();

    // Obteniendo el año
    let anno = new Date().getFullYear()

    const nombre = document.querySelector("#nombre").value,
        bienvenida = document.querySelector("#bienvenida"),
        fecha = document.querySelector("#fecha").value,
        edad = anno - fecha;

    let mensajeEdad;
    let mensaje;

    if(edad < 18) {
        mensajeEdad = "aun eres un niño";
    } else if (edad >= 30) {
        mensajeEdad = "eres un abuelo";
    } else {
        mensajeEdad = " eres mayor de edad";
    }

    mensaje = `hola, ${nombre}, tienes ${edad}, ${mensajeEdad}`;

    bienvenida.innerHTML = mensaje;
}

let miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
