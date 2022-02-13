function saludar(nombre) {
    console.log('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    let nombre = 'jhuder'
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);