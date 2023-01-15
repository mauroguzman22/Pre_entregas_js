const guardarProductosCarrito = () => {

localStorage.setItem("carrito", JSON.stringify(Producto));

}

const cargarProductoCarrito = () => {

return JSON.parse(localStorage.getItem("carrito")) || []

}

const agregarAlCarrito = (id) => {

    const Productos= cargarProductosLS();
    const productos_carrito = cargarProductoCarrito();
    const Producto = Productos.find(item => item.id === id)
    productos_carrito.push(Producto);
    guardarProductosCarrito(productos_carrito);

}
const vaciarCarrito = () => {

    localStorage.removeItem("carrito");
}


const totalCarrito = () =>{
    const productos_carrito = cargarProductoCarrito();
    return productos_carrito.length;
}


const sumaCarrito = () =>{
    const productos_carrito = cargarProductoCarrito();
    return productos_carrito.reduce((total, item) => total += item.precio, 0);
}

const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-warning position-relative">
        <img src="img/descarga.png" alt="Carrito" width="24">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}