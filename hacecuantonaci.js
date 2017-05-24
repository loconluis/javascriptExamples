//const nacimiento = new Date();
const nacimiento = new Date(1993, 8, 8)
console.log(nacimiento)
//1 Wed Sep 08 1993 00:00:00 GMT-0600 (CST)
const hoy = new Date()
console.log(hoy)
//1 Tue May 23 2017 18:27:49 GMT-0600 (CST)
const tiempo = hoy - nacimiento;
console.log(tiempo)
//1 748117669341
const tiempoSegundos = tiempo/1000
console.log(tiempoSegundos)
//1 748117669.341
const tiempoMin = tiempoSegundos/60
console.log(tiempoMin)
//1 12468627.82235
const tiempoHoras = tiempoMin/60
console.log(tiempoHoras)
//1 207810.46370583333
const dias = tiempoHoras/24
console.log(dias)
//1 8658.769321076388
const nextbday = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
//nextbday
//Fri Sep 08 2017 00:00:00 GMT-0600 (CST)
const proximodias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
//proximodias
