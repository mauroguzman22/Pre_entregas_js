const productos = [
    {id:1, nombre: "Auditorias", precio:120000, imagen: "Auditorías-1.jpg"},
    {id:2, nombre: "Contabilidad General", precio:80000, imagen: "Auditorías-1.jpg"},
    {id:3, nombre: "Armado de papeles de trabajo", precio:100000, imagen: "Auditorías-1.jpg"},
    {id:4, nombre: "Facturacion", precio:10000, imagen: "Auditorías-1.jpg"},
    {id:5, nombre: "Armado de Balances", precio:300000, imagen: "Auditorías-1.jpg"},
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);