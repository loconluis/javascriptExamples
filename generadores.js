//Entendiendo Generadores
function* fibonacci() {
  let a=0, b=1
  while (true) {
    let f = a;
    a = b;
    b = f+a;
    //Se ejecuta la linea de codigo hasta yield y la proxima vez que se llama la funcion
    //se ejecuta desde el final de ese yield
    yield f;
  }
}
