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


const getEmpleado = (id) => { 
    return new Promise ((resolve, reject) => { 
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`)

    })

}
const getSalario = (id) => { 
    return new Promise ((resolve, reject) => { 
        const salario = salarios.find(s => s.id === id)?.monto;

        (salario)
            ? resolve(salario)
            : reject(`no tiene salario`)

    })

}

const id = 2;

/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch (err=> console.log(err));
getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err)); */

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
 
    .then(salario => console.log(`Empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => {
        (nombre)
            ? console.log(`Empleado ${nombre} ${err}`)
            : console.log(err);
        
    });
    
    