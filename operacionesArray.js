//... spread para funciones
function suma(...numbers){
  //operacion reduce
  const resultado = numbers.reduce(function(acum, numero){
                      acum+=numero;
                      return acum;
                    }, 0);
  return resultado;
}

function dobles(...numeros){
  //Metodo Map
  return numeros.map(numero => numero * 2)
}

function pares(...numeros){
  //Metodo filer
  return numeros.filter(numero => numero % 2 == 0)
}

suma(4, 8, 12, 8954, 7, 9);
dobles(3, 9, 15);
