class Punto{
  constructor(x, y){
    this.x =x;
    this.y = y;
  }
  moverX(x){
    this.x+=x;
  }
  moverY(y){
    this.y+=y;
  }
  distancia(p){
    const x = this.x - p.x;
    const y = this.y - p.y;
    return Math.sqrt(x*x + y*y)
  }
}

const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);

//p1.init(0,4);
//p2.init(3,0)

// const p1 = new Punto(0,4);
// const p2 = new Punto(3,0);

console.log(`La distancia es ${p1.distancia(p2)}`);
p1.moverX(10);
console.log(`La distancia es ${p1.distancia(p2)}`);
p2.moverY(-4);
console.log(`La distancia es ${p1.distancia(p2)}`);

//Crear objetos como arrays
/*const p1 = {
  x: 0,
  y: 4,
  moverX: function(x){this.x+= x},
  moverY: function(y){this.y+=y}
};

const p2 = {
  x: 3,
  y: 0,
  moverX: function(x){this.x+= x},
  moverY: function(y){this.y+=y}
};*/

//Objetos en javascript
//Forma de crear objetos con una funcion
// function Punto(x, y){
//   this.x = x;
//   this.y = y;
// }
// Punto.prototype.moverX = function moverX(x){
//   this.x+=x;
// }
// Punto.prototype.moverY = function moverY(y){
//   this.y+=y;
// }
//
// Punto.prototype.distancia = function distancia(p){
//   const x = this.x - p.x;
//   const y = this.y - p.y;
//
//   return Math.sqrt(x*x + y*y)
// }

// const Punto = {
//   init: function init(x, y){
//     this.x = x;
//     this.y = y;
//   },
//   moverX: function moverX(x){
//     this.x+=x;
//   },
//   moverY: function moverY(y){
//     this.y+=y;
//   },
//   distancia: function distancia(p){
//     const x = this.x - p.x;
//     const y = this.y - p.y;
//
//     return Math.sqrt(x*x+y*y);
//   }
// }
//
// const p1 = Object.create(Punto);
// const p2 = Object.create(Punto);
