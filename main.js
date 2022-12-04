//Variables del Estudio Contable
const suma_maxima_servicios = 15000;
const max_servicios = 2;
const descuento = 0.15;
const iva = 0.105;

//Variables aplicadas
let suma_servicio = 0;
let total_servicio = 0;
let nombre_servicio = prompt("Seleccione el Servicio:");
let valor_servicio = parseFloat(prompt("Ingrese el Valor del Servicio:"));

while ((nombre_servicio != "ESC") && (nombre_servicio != null)) {
    suma_servicio = suma_servicio + valor_servicio;
    console.log("Suma Servicios: " + suma_servicio);

    total_servicio++;
    console.log("Total Servicios: " + total_servicio);
    nombre_servicio = prompt("Seleccione el Servicio: (ESC para salir)"); 
    valor_servicio = parseFloat(prompt("Ingrese el Valor del Servicio:"));

    if (valor_servicio == null) {
        valor_servicio = 0;
    }
}

// Aplico el IVA sobre el servicio
suma_servicio = suma_servicio + (suma_servicio * iva);
console.log("c/IVA: " + suma_servicio);

// Valido si supera la cantidad max de servicios y el monto máximo
if ((suma_servicio >= suma_maxima_servicios) || (total_servicio >= max_servicios)) {
    suma_servicio = suma_servicio - (suma_servicio * descuento);
    console.log("c/Descuento: " + suma_servicio);
}

// Salida Final
alert("La Suma Total de Servicios es: $" + suma_servicio.toFixed(2) + " Pesos!");