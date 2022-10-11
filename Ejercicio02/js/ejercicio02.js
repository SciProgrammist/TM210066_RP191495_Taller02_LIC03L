//Criterio de cuado de texto
function criterio() {
    let message = "Taller Practico 02 - LIC";
    window.alert(message);
}

function validar(valido) {
    var validarNumeros = document.querySelectorAll("#form input[type=number]");
    for (var i = 0, element; (element = validarNumeros[i++]); ) {
        if (element.value == "") {
            alert("Favor completar los campos de números.");
            valido = false;
            element.focus();
            return valido;
        } else {
            valido = true;
        }
    }
    return valido;
}

function procesar() {
    var valido = false;
    if (!validar()) {
        return;
    }

    var numeros = document.querySelectorAll("#form input[type=number]");
    var Arrnumeros = [];
    for (var i = 0, element; (element = numeros[i++]); ) {
        Arrnumeros.push(parseInt(element.value));
    }
    Arrnumeros = Arrnumeros.sort();
    var ul = document.getElementById("lista");
    var elementoLista = "";
    for (i = 0; i < Arrnumeros.length; i++) {
        elementoLista += '<li class="list-group-item">' + Arrnumeros[i] + "</li>";
        ul.innerHTML = elementoLista;
    }
}