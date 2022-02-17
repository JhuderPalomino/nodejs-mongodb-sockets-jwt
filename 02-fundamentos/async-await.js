const empleados = [
    {
        id: 1,
        nombre: 'LIZBETH'
    },
    {
        id: 2,
        nombre: 'LEO'
    },
    {
        id: 3,
        nombre: 'KAREN'
    }
]

const salarios = [
    {
        id: 1,
        monto: 1000
    },
    {
        id: 2,
        monto: 2000
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
