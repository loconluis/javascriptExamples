//Area de un triangulo
let base = 5;
let altura = 7;
//Usando arrow functions
const triangleArea = (base, altura)=> base*altura/2
console.log(`El area de un triangulo de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}`);


//Area de un circulo
let r = 4;
//Arrow function
const circleArea = (radio) => Math.PI * Math.pow(r, 2);
console.log(`El area de un circulo de radio ${r} es: ${circleArea(r)}`)
