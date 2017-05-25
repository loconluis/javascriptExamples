const luis = {
  nombre: 'Luis',
  apellido: 'Locon'
}

function saludar(veces) {
  for (let i=0; i<veces; i++){
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}

//No sabe cual es el contexto, de momento el global
saludar(3)

//Devuelve la funcion con el contexto de la variable
saludar.bind(luis, 3)
//Devuelve la funcion con el contexto de la variable y la llama
saludar.call(luis, 3)
//Devuelve la funcion con el contexto de la variable
saludar.apply(luis, [3, true])
