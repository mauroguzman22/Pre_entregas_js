const renderProductos = () => {
    const Productos = cargarProdcutosLS ();
    let salida = "";
    for (let Producto of Productos){
        salida += `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${Producto.nombre}</h5>
          <p class="card-text">${Producto.precio}</p>
          <a href="#" class="btn btn-primary" OnClick"agregarAlCarrito(${Producto.id});">Add Service</a>
        </div>
      </div>`;
    
    }
    
    document.getElementById("Productos").innerHTML = salida;
}

renderProductos(); 
renderBotonCarrito();
