const typeProducts = [
   {id:1,
      name:'utils',
      description:'xd'
   },
   {id:2,
      name:'accesorios',
      description:'xd'
   },
   {id:3,
      name:'tecnology',
      description:'xd'
   }
]

let products =[
   {  id:1,
      name:'book',
      price:12,
      quantity: 15,
      typeId: 1 
   },
   {  id:1,
      name:'pencil',
      price:12,
      quantity: 15,
      typeId: 1 
   },
   {  id:1,
      name:'chair',
      price:12,
      quantity: 15,
      typeId: 2
   },
   {  id:1,
      name:'laptop',
      price:1200,
      quantity: 3,
      typeId: 3
   },
   {  id:1,
      name:'computer',
      price:1200,
      quantity: 3,
      typeId: 3
   },

]

/* products.map(product => {
   let typeName = typeProducts.find(type => type.id === product.typeId)?.name
   //console.log(typeName)
   product = { ...product, typeName }
   console.log(product)
})
 */

products = products.reduce((accumulate, product) => {
   let {name, description} = typeProducts.find(type => type.id === product.typeId)
   
   //let typeDescription= type.description
   return accumulate.concat({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      type: name,
      description
            
   });
}, []);

console.log('products',products);
