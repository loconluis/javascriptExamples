class Toggable{
  constructor(el){
    //Inicializar el estado interno
    this.el = el
    this.el.innerHTML = 'OFF'
    this.activated = false
    this.el.addEventListener('click', this.onClick.bind(this))//El alcance que obtendra ese callback
  }

  onClick(ev){
    //Cambiar el estado interno de on a off y viceversa
    //llamar  a toggleText
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText(){
    //Cambiar texto
    this.el.innerHTML = this.activated ? 'ON' : 'OFF'
  }
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)
