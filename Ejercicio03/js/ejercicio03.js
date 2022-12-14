//Criterio de cuado de texto
function criterio() {
    let message = "Taller Practico 02 - LIC";
    window.alert(message);
};

//Criterio de solucion de problema 03
//Variable de control para el cambio de elementos.
let current = 1;
//Clase persona, pago, boleto. solucion usando conceptos de Programacion orientada a objetos.

class persona {
    constructor(nombree, generoo, DUIi, direccionn, pasaportee, edadd, emaill) {
        this.nombre = nombree;
        this.genero = generoo;
        this.DUI = DUIi;
        this.direccion = direccionn;
        this.pasaporte = pasaportee;
        this.edad = edadd;
        this.email = emaill;
    }
}

class metodo_pago {
    constructor(formaa, numero_telefonoo) {
        this.forma = formaa;
        this.numero_telefono = numero_telefonoo;
    }
}

class boleto {

    constructor(pais_destinoo, fecha_partidaa, fecha_regresoo) {
        this.pais_destino = pais_destinoo;
        this.fecha_partida = fecha_partidaa;
        this.fecha_regreso = fecha_regresoo;
    }
    diasVisita() {
        let one_day = 1000 * 60 * 60 * 24;
        let fechaInicio = new Date(this.fecha_partida);
        let fechaFinal = new Date(this.fecha_regreso);

        //0-11 es mes en JS
        let christmas_day = new Date(fechaInicio.getFullYear(), 11, 25);

        //Para calcula el siguiente año si ya se paso
        if (fechaInicio.getMonth() == 11 && fechaInicio.getDate() > 25)
            christmas_day.setFullYear(christmas_day.getFullYear + 1);

        //Para tenes los dias tendremos que tener todo en milisegundos y 
        //luego divir por un dia para saber el numero de dias.
        let diasmilli = Math.round(christmas_day.getTime() - fechaInicio.getTime()) / (one_day);

        //Fijamos los decimales a 0 para los dias.
        let diastotales = diasmilli.toFixed(0);

        //Devolvemos dias.
        return diastotales;
    }
    costoDevuelo() {
        let costo = 0;
        switch (this.pais_destino) {
            case "Mexico":
                costo = 250;
                break;
            case "U.S.A":
                costo = 500;
                break;
            case "Costa Rica":
                costo = 200;
                break;
            case "Argentica":
                costo = 300;
                break;
            case "Ecuador":
                costo = 250;
                break;
            case "Rusia":
                costo = 700;
                break;
            case "Rusia 2.0":
                costo = 710;
                break;

        };

        return costo;
    }
}

const cliente = new persona();
const boletoCliente = new boleto();

//Constantes para obtener el valor de los elementos que toman parte en la animacion.
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

nextBtnFirst.addEventListener("click", function (event) {

    let nom = document.getElementById('nombre').value;
    let gene = document.getElementById('genero').value;
    let dui = document.getElementById('duii').value;
    let directioon = document.getElementById('direccion').value;
    let pasaport = document.getElementById('pasaporte').value;
    let eda = document.getElementById('eda').value;
    let correo = document.getElementById('correo').value;

    cliente.nombre = nom;
    cliente.genero = gene;
    cliente.DUI = dui;
    cliente.direccion = directioon;
    cliente.pasaporte = pasaport;
    cliente.edad = eda;
    cliente.email = correo;

    //Codigo para la animacion.
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current].classList.add("active");
    progressCheck[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;


});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current].classList.add("active");
    progressCheck[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
    //Animacion
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current].classList.add("active");
    progressCheck[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;

    //Capturando datos
    let destino = document.getElementById('destinos').value;
    let partida = document.getElementById('fecha_des').value.toString();
    partida = convertDigitIn(partida);
    let regreso = document.getElementById('fecha_reg').value.toString();
    regreso = convertDigitIn(regreso);
    //Creando objeto
    boletoCliente.pais_destino = destino;
    boletoCliente.fecha_partida = partida;
    boletoCliente.fecha_regreso = regreso;
    //Mostrando datos en el ultimo formulario costo
    document.getElementById('input-costo').value = "$" + boletoCliente.costoDevuelo();
    //Mostrando datos en el ultimo formulario dias 
    document.getElementById('input-dias').value = boletoCliente.diasVisita();
});
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        Horabuena();
        location.reload();
    }, 100);
});
prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 1].classList.remove("active");
    progressCheck[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.remove("active");
    progressCheck[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.remove("active");
    progressCheck[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    current -= 1;
});

//reverse date javascript from yyyy/mm/dd to mm/dd/yyyy” 
function convertDigitIn(str) {
    let date = str;
    let [year, month, day] = date.split('-');
    let result = [month, day, year].join('/');
    return result;
}

function Horabuena() {
    var myWindow = window.open("", "_blank");
    myWindow.document.write("<p>Gracias por tu interes en volar con nosotros!</p>");
    myWindow.document.write("<p>Querido cliente: </p>");
    myWindow.document.write(cliente.nombre);
    myWindow.document.write("<p>Que ha elegido como destino viajar a:</p>");
    myWindow.document.write(boletoCliente.pais_destino);
    myWindow.document.write("<p>Con su fecha de salida agendada el dia:</p>");
    myWindow.document.write(boletoCliente.fecha_partida);
    myWindow.document.write("<p>y fecha de regreso para el dia:</p>");
    myWindow.document.write(boletoCliente.fecha_regreso);

}
