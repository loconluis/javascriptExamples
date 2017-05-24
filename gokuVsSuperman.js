//Ciclos while

//Vida de los dos
let vidaGoku = 100;
let vidaSuperman = 100;

//Rango de poder
const MIN_POWER = 5;
const MAX_POWER = 12;

//Funciones para saber quien gana
const estanVivos = () => vidaGoku > 0 && vidaSuperman >0;
const calcularGolpe = ()=> Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER;
const gokuSigueVivo = ()=> vidaGoku>0;

let round = 0;

//Hasta que esten vivos es true;
while (estanVivos()) {
  round++;
  console.log(`Round ${round}`);
  const gokuPunch = calcularGolpe();
  const supermanPunch = calcularGolpe();

  if(gokuPunch>supermanPunch){
    //ataca goku
    console.log(`Goku ataca a superman ${gokuPunch}`);
    vidaSuperman-= gokuPunch;
    console.log(`Superman queda en ${vidaSuperman} de vida`);
  }else{
    //ataca superman
    console.log(`Superman ataca a Goku ${supermanPunch}`);
    vidaGoku-= supermanPunch;
    console.log(`Goku queda en ${vidaGoku} de vida`);
  }
}

if(gokuSigueVivo()){
  console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`);
}else{
  console.log(`Superman gano la pelea. Su vida es de: ${vidaSuperman}`);
}
