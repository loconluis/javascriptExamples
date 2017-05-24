//Recorro el array con un for para mostrar sus datos
const dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
];
//Variables definidas
let nombre = "Luis";
let totalKm = 0;
const length = dias.length;

//Loop for para recorrer el array y un random para saber un numero entre 5-15
for (let i=0; i<length; i++){
  const km = correr();
  totalKm+=km;
  console.log(`El dia ${dias[i]} ${nombre} corrio ${km}kms.`);
}

//Funcion que devuelve el random
function correr() {
  const min = 5;
  const max = 15
  //Round redonde dependiendo el decimal 3.1 = 3 || 3.8 = 4
  return Math.round(Math.random() * (max-min)) + min;
}

//Promedio de Kms en la semana 
const promedioKm = Math.round(totalKm/length);
console.log(`En promedio ${nombre} corrio ${promedioKm}Kms`);
