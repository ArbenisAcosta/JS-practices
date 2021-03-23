// Ejercicio 12: Estudiar el comportamiento del alcance o contexto funcional.


// Las variables a estan declaradas en el contexto local
function funcion1() {
    var a = 2;

    function funcion3() {
        var b = 5;

        function funcion5() {
            // Alcance funcional
            console.log(a, b);
        }
    }
}

function funcion2() {
    var b = 7;

    function funcion4() {
        console.log(a);
    }
}

// Estan declaradas desde el contexto global
funcion1();
funcion2();
