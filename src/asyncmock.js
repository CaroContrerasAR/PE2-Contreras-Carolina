const misProductos = [
    {id:1, nombre: "Yerba", precio: 500, img:"./img/yerba.jpg"},
    {id:2, nombre: "Fideos", precio: 200, img:"./img/fideos.jpg"},
    {id:3, nombre: "Arroz", precio: 180, img:"./img/arroz.jpg"},
    {id:4, nombre: "Aceite", precio: 900, img:"./img/aceite.jpg"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{    
            resolve(misProductos);
        }, 2000)
    })
}

//Creamos una nueva funcion similar que retorna un solo item

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {    
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 2000)
    })
}
