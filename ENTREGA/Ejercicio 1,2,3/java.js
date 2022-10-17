//EJERCICiO 1
console.log(4.3 >= 4,  1 == 2, 4 < 4, 2 !== 5,  5 == '5',5 === '5',5 == 5,5 === 5,)

//EJERCICIO 2
let a = 4,
    b = 3,
    c = 2,
    d = 1;

let sumaab = a + b;     let sumacd = c + d;
if(sumaab > sumacd) {
console.log("suma de a + b es mayor que c+d");
}

else{
    console.log("la suma de c + d es mayor que a+b");
}

//EJERCICIO 3
let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 45;

let angulos = (angulo1+angulo2+angulo3);

if(angulos ===180){
    console.log("la suma de los angulos de 180 es un triangulo valido");
}

else{
console.log("la suma de los angulos nos es 180");
}
//Ejercicio 4

let h = 90;

if(h%2 ===0){
    console.log("es par");
}

else{
    console.log("es impas");
}