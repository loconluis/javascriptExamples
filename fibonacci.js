//Entendiendo recursividad en JS
//Esta funcion utiliza Memoizacion, lo cual la hace mas optima
let contadorMemo = 0;
function fibonacciMemoizacion(num, memoria={}){
  contadorMemo++;
  if(memoria[num]) return memoria[num]
  if(num==1) return 0;
  if(num==2) return 1;
  //recursividad
  return memoria[num] = fibonacciMemoizacion(num-1, memoria) + fibonacciMemoizacion(num-2, memoria)

}

//Esta funcion solo es recursiva
let contadorRecursivo = 0;
function fibonacciRecursiva(num, memoria={}){
  contadorRecursivo++;
  if(num==1) return 0;
  if(num==2) return 1;
  //recursividad
  return fibonacciRecursiva(num-1) + fibonacciRecursiva(num-2)
}

// fibonacci(1)//0
// fibonacci(2)//1
// fibonacci(3)//1
// fibonacci(4)//2
// fibonacci(5)//3
// fibonacci(6)//5
// fibonacci(7)//8
// fibonacci(8)//13

//Las veces que se llamo a la funcion
// contadorMemo
// 37
// contadorRecursivo
// 13529
