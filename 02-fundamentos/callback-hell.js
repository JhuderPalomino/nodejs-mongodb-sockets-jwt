const usuarios = [
    {
        id: 1,
        nombre: 'JHUDER'
    },
    {
        id: 2,
        nombre: 'LINDA'
    },
    {
        id: 3,
        nombre: 'KAREN'
    }
]

const salarios = [
    {
        id: 2,
        monto: 3000
    },
    {
        id: 2,
        monto: 1000
    }
]

 getEmpleado = (id, callback) => {
    const empleado = usuarios.find(e => e.id === id);
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe !`)
    }
    
}

getEmpleado(10, (err, empleado) => { 
    if (err) {
        return console.log(err);
    }

    console.log(empleado);

});

