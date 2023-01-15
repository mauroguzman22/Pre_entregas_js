const Productos = [
    {id:1, nombre: "Auditorias", precio:120000},
    {id:2, nombre: "Contabilidad General", precio:80000},
    {id:3, nombre: "Armado de papeles de trabajo", precio:100000},
    {id:4, nombre: "Facturaicon", precio:10000},
    {id:5, nombre: "Armado de Balances", precio:300000},
];

const guardarProductosLS = (Productos) => {
    localStorage.setItem("Productos", JSON.stringify(Productos));
} 

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("Productos")) || [];
} 

guardarProductosLS(Productos)