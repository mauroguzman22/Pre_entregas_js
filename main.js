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
/* suma_servicio = suma_servicio + (suma_servicio * iva);
console.log("c/IVA: " + suma_servicio); */

//Funcion IVA
function Calculariva(){
    return suma_servicio = suma_servicio + (suma_servicio* iva)
}
let resultado = Calculariva() ;
console.log("c/IVA " + resultado)

//Proximos Servicios del Estudio contable para posicionar en un carrito
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.iva = 1.105;
    }

    sumaIva() {
        this.precio = this.precio * this.iva;
    }
}

const productos = [];
productos.push(new Producto("Auditorias", 120000));
productos.push(new Producto("Contabilidad General", 80000));
productos.push(new Producto("Armado de papeles de trabajo", 100000));
productos.push(new Producto("Facturacion", 10000));
productos.push(new Producto("Armado de Balances", 300000));
console.log(productos);

for (const producto of productos) {
    producto.sumaIva();
    console.log("Nombre: " + producto.nombre + ", Precio: $" + producto.precio);
}

// Valido si supera la cantidad max de servicios y el monto máximo
if ((suma_servicio >= suma_maxima_servicios) || (total_servicio >= max_servicios)) {
    suma_servicio = suma_servicio - (suma_servicio * descuento);
    console.log("c/Descuento: " + suma_servicio);
}

// Salida Final
alert("La Suma Total de Servicios es: $" + suma_servicio.toFixed(2) + " Pesos!");