//Criterio de cuado de texto
function criterio() {
    let message = "Taller Practico 02 - LIC";
    window.alert(message);
}


//Problema 01
function validacion(validar) {
  var nombre = document.getElementById("nombre");
  var sueldo = document.getElementById("sueldo");

  if (nombre.value == "") {
    alert("Favor completar el campo de nombre.");
    validar = false;
    return validar;
  } else {
    validar = true;
  }
  if (sueldo.value == "") {
    alert("Favor completar el campo de sueldo.");
    validar = false;
    return validar;
  } else {
    validar = true;
  }
  return validar;

}

function calcular() {
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const nombre = document.getElementById('nombre').value;

  const descuentoAfp = parseFloat(calculoAfp(sueldo));
  const descuentoIsss = calculoIsss(sueldo);
  const descuentoRenta = calculoRenta(sueldo, descuentoAfp, descuentoIsss);
  const SueldoNeto = CalculoSueldoNeto(sueldo, descuentoAfp, descuentoIsss, descuentoRenta);
  
  if(!validacion()){
    return;
  } 

  mostrarDatos(nombre,sueldo,descuentoRenta,descuentoAfp,descuentoIsss, SueldoNeto);
}

function calculoIsss(sueldo) {
  if (sueldo <= 1000) {
    return sueldo * 0.03;
  } else {
    return 30;
  }
}

function calculoAfp(sueldo) {
  if (sueldo) {
    return sueldo * 0.0725;
  } 

}

function calculoRenta(sueldo, descuentoAfp, descuentoIsss) {
  let sueldoAjustado = sueldo - (descuentoAfp + descuentoIsss);
  if (sueldoAjustado < 472) {
    return 0;
  }
  if (sueldoAjustado >= 472.01 && sueldoAjustado <= 895.24) {
    return (sueldoAjustado - 472.01) * 0.1 + 17.67;
  }
  if (sueldoAjustado >= 895.25 && sueldoAjustado <= 2038.1) {
    return (sueldoAjustado - 895.24) * 0.2 + 60;
  } else {
    return (sueldoAjustado - 2038.1) * 0.3 + 288.57;
  }
}

function CalculoSueldoNeto(sueldo, descuentoAfp, descuentoIsss, descuentoRenta) {
  if (sueldo) {
      return sueldo - descuentoAfp - descuentoIsss - descuentoRenta;
  }
}

function mostrarDatos(nombre, sueldo, descuentoRenta, descuentoAfp, descuentoIsss, sueldoNeto){
    var bodyMostrar = document.getElementById('bodyMostrar');
    var fila =  '<tr id="fila">' +
    '<td scope="col">' + nombre + '</td>' +
    '<td scope="col">' + sueldo.toFixed(2) + '</td>' +
    '<td scope="col">' + descuentoRenta.toFixed(2) + '</td>' +
    '<td scope="col">' + descuentoAfp.toFixed(2) + '</td>' +
    '<td scope="col">' + descuentoIsss.toFixed(2) + '</td>' +
    '<td scope="col">' + sueldoNeto.toFixed(2) + '</td>' +
    '</tr>';

    bodyMostrar.innerHTML = fila;
}