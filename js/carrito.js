const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.some(item => item.id === id);
}

const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();

    if (estaEnElCarrito(id)) {
        let pos = productos_carrito.findIndex(item => item.id === id);
        productos_carrito[pos].cantidad += 1;
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }   
    
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
}

const eliminarProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const productos = productos_carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad, 0);
}

const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-dark position-relative">
        <img src="images/descarga.png" alt="Carrito" width="24">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}