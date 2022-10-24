function iniciarArchivo() {

    let llamado = document.getElementById("llamadoG")
    llamado.addEventListener("click", aggGestores)

    let llamado1= document.getElementById("llamadoG")
    llamado1.addEventListener("click", aggCliente)

    let llamado2= document.getElementById("llamadoG")
    llamado2.addEventListener("click", aggMensaje)

    let llamado3= document.getElementById("llamadoG")
    llamado3.addEventListener("click", aggTransferencia)

    
}


function aggGestores() {
   
   
    let gestores = document.getElementById("gestor").value;
      let gestor = {
        name: gestores
    }
    

    console.log(gestor);

}

function aggCliente() {
    let clientes = document.getElementById("cliente").value;
        let cliente = {
            name: clientes
        }
    console.log(cliente);

}

function aggMensaje() {
    let mensajes = document.getElementById("Mensaje").value;
        let mensaje = {
            name: mensajes
        }
    console.log(mensaje);

}

function aggTransferencia() {
    let transferencias = document.getElementById("Transferencia").value;
        let transferencia = {
            name: transferencias
        }
    console.log(transferencia);

}












window.addEventListener('load', iniciarArchivo)
