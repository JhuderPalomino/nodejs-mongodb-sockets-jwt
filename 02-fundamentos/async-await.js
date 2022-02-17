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
            : reject(`No existe el empleado con ID ${id}`)

    })

}
const getSalario = (id) => { 
    return new Promise ((resolve, reject) => { 
        const salario = salarios.find(s => s.id === id)?.monto;
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (salario)
            ? resolve(salario)
            : reject(` ${empleado} no tiene salario`)

    })

}

getEmpleadosInfo = async(id)  =>{

    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;
    }catch (error) {
        return error;
        // throw error;
    }


}

const id=3;

getEmpleadosInfo(id)
    .then(msg=>{
        console.log('TODO BIEN')
        console.log(msg)})
    .catch(err=> {
        console.log('TODO MAL')
        console.log(err) }
    );

