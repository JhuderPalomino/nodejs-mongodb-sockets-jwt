const empleados = [
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
        id: 1,
        monto: 3000
    },
    {
        id: 2,
        monto: 1000
    }
]

 const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe !`)
    }
    
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.monto;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`no tiene salario!`)
    }
    
}

const id = 3;

getEmpleado(id, (err, empleado) => { 
    if (err) {
        return console.error(err);
    }


    getSalario(id, (err, salario) => { 
        if (err) {
            
            return console.log(`Empleado ${empleado} ${err}` );
        }
            console.log(`Empleado ${empleado} tiene un salario de ${salario}`);
        
    

    
    });

});







