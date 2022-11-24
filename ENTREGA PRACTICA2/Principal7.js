
//Ejercicio 4
//se muestra por consola
// objeto del gestor
class datosGestor {
    constructor(gestor) {
        this.gestor = gestor;

    }
}

let dato1 = new datosGestor("Lic.Natalia");
let dato2 = new datosGestor("Lic. Gabriela");
let dato3 = new datosGestor("Lic. Clariza");




//const contenedorGestor = document.getElementById("contenedor-gestor")
//contenedorGestor.innerHTML= "gs"


console.log("GESTORES")


console.log(dato1);
console.log(dato2);
console.log(dato3);


//OBJETO DE CLIENTE
class datosCliente {
    constructor(cliente) {
        this.cliente = cliente;

    }
}

let dato4 = new datosCliente("Leonardo");
let dato5 = new datosCliente("Dariana");
let dato6 = new datosCliente("Cristian");

console.log("CLIENTES")

console.log(dato4);
console.log(dato5);
console.log(dato6);

//OBJETO DE MENSAJE
class datosMensaje {
    constructor(mensaje) {
        this.mensaje = mensaje;

    }
}

let dato7 = new datosMensaje(" Vacaciones");
let dato8 = new datosMensaje("Finiquito");
let dato9 = new datosMensaje(" fin de mes");

console.log("MENSAJES")

console.log(dato7);
console.log(dato8);
console.log(dato9);


//OBJETO TRANSFERENCIA
class datosTransferencia {
    constructor(Transferencia) {
        this.Transferencia = Transferencia;

    }
}

let dato10 = new datosTransferencia("1000$");
let dato11 = new datosTransferencia("500$");
let dato12 = new datosTransferencia("600$");

console.log("TRANSFERENCIA")

console.log(dato10);
console.log(dato11);
console.log(dato12);

///EJERCICIO 5
console.log("ARRAY")
let arrayGestor = [dato1, dato2, dato3];

console.log(arrayGestor);

let arrayCliente = [dato4, dato5, dato6];

console.log(arrayCliente);

let arrayMensaje = [dato7, dato8, dato9];

console.log(arrayMensaje);

let arrayTransferencia = [dato10, dato11, dato12];

console.log(arrayTransferencia);

//EJERCICIO 6

let TodosLosArray = [arrayGestor, arrayCliente, arrayMensaje, arrayTransferencia];

let deObjetoJson = JSON.stringify(TodosLosArray);

console.log(typeof (deObjetoJson));

let deJsonAObjeto = JSON.parse(deObjetoJson);

console.log(typeof (deJsonAObjeto));


//EJERCICIO 7
// PETICION AJAX

const url = 'https://randomuser.me/api/?results=10';


function peticionAjax(){
        fetch(url)
            .then(response => response.json())
            .then(apis => {
                console.log({ apis })

                 const contenedorApis = document.getElementById("authors")
                 contenedorApis.innerHTML = apis
            })
        }
        peticionAjax()


//EJERCICIO 8

    let empezar = setInterval(() => {
        console.log(arrayGestor)
    }, 5000)


function parar() {

    let paraIntervalo = document.getElementById('parar')
    paraIntervalo.addEventListener('click', boton)

    function boton() {
        return window.clearInterval(empezar), alert("se detuvo la operacion de setInterval");
    };
}

window.addEventListener('load', parar);



