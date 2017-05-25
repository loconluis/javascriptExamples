//Entiende los CLOSURES
function saludarFamilia(apellido){
  return function saludarMiembroFamilia(nombre){
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

const saludarGomez = saludarFamilia("Gomez");
const saludarPerez = saludarFamilia("Perez")

function makePrefixer(prefijo){
	return (palabra)=>console.log(`${prefijo}${palabra}`);
}
const prefijoRe = makePrefixer('re');
prefijoRe('bueno');



saludarGomez("Maria");
saludarGomez("Laura");
saludarPerez("Maria");
saludarPerez("Laura");
