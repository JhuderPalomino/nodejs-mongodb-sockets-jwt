/* 
setTimeout(() =>{console.log('hola mundo')}
, 3000); */


const getUserById = (id,callback) => { 
    const user ={
        id,
        nombre : 'jhuder'
    }
    setTimeout(() => {
        callback(user);
        
    }, 1000);

}


getUserById(10, () => {console.log('Hola Mundo!') }); 


