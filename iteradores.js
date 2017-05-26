//Entendiendo iteradores

function  fibonacci(){
  let a = 0, b=1;
  //retornar un objeto donde podemos pedir numeros
  return {
    next: function (){
      let f = a;
      console.log('F es: ' + f);
      a = b;
      console.log('a es: '+a);
      b= f + a;
      console.log('b es: '+b);
      return {value: f, done: false}
    }
  }
}


const fibo = fibonacci()
fibo.next().value //0
fibo.next().value //1
fibo.next().value //1
fibo.next().value //2
fibo.next().value //3
fibo.next().value //5
fibo.next().value //8
fibo.next().value //13
fibo.next().value //21
fibo.next().value //34
fibo.next().value //55
fibo.next().value //89
