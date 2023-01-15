const guardarProductosCarrito = () => {

localStorage.setItem("carrito", JSON.stringify(Producto));

}

const cargarProductoCarrito = () => {

return JSON.parse(localStorage.getItem("carrito")) || []

}

const agregarAlCarrito = (id) => {

    const Productos= cargarProductosLS();
    const Productos_carrito = cargarProductoCarrito();
    console.log(Productos_carrito)
    const Producto = Productos.find(item => item.id === id)
    console.log(Producto)
    productos_carrito.push(Producto);
    console.log(Productos_carrito)
    guardarProductosCarrito(Productos_carrito);
    renderBotonCarrito();
}
const vaciarCarrito = () => {

    localStorage.removeItem("carrito");
}


const totalCarrito = () =>{
    const Productos_carrito = cargarProductoCarrito();
    return Productos_carrito.length;
}


const sumaCarrito = () =>{
    const Productos_carrito = cargarProductoCarrito();
    return Productos_carrito.reduce((total, item) => total += item.precio, 0);
}

const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-warning position-relative">
        <img src="img/descarga.png" alt="Carrito" width="24">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}