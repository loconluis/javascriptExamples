//Entendiendo THIS

class Persona {
  constructor(nombre, amigos=[]){
    this.nombre = nombre
    this.amigos = amigos //puede ser amigos || []
  }

  listarAmigos(){
    this.amigos.forEach((amigo)=> {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }
}

const luis = new Persona("Luis", ["Diego", "Monica", "Fernando"])
