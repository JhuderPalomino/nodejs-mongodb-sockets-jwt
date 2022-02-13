const deadpool = {
    nombre : 'WADE',
    apellido: 'WILSON',
    edad: 30,
    poder: 'REGENERARSE',
    getName() {
        return `${this.nombre} ${this.apellido}`    
    }
}

console.log(deadpool.getName());

/* onst nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;
 */
function imprimeHero(heroe) {
    const {nombre,apellido,poder,edad } = heroe;
    console.log(nombre, apellido,poder,edad); 
}

function imprimeHeroMejorado({nombre,apellido,poder,edad }) {
    console.log(nombre, apellido,poder,edad); 
}

//imprimeHero(deadpool);
//imprimeHeroMejorado(deadpool);

/* const {nombre,apellido,poder,edad } = deadpool;
console.log(nombre, apellido,poder,edad); */

const heroes = ['BATMAN', 'SUPERMAN', 'SPIDERMAN'];

/* const heroe1 = heroes[0];
const heroe2 = heroes[1];
const heroe3 = heroes[2];

console.log(heroe1, heroe2, heroe3); */

const [ heroe1, heroe2, heroe3 ]  = heroes;
console.log(heroe1, heroe2, heroe3);