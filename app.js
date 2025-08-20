//array para almacenar los amigos
let listaAmigos = [];

//funcion para obtener el valor del input o entrada, value obtiene text del input y trim elimina espacio vacio 
function getNombreAmigo() {
return document.getElementById("amigo").value.trim();
    }

// funcion para validar el nombre 
function validarNombre(nombre){
    if(nombre === ''){
        alert('Por favor, ingresa un nombre valido');
        return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert('Solo se permiten letras y espacios');
        return false;
    }
    //includes nos permite saber si fue agregado el nombre 
    if (listaAmigos.includes(nombre)){
        alert('Este nombre ya fue agregado');
        return false;
    } else{
        return true;
    }
}
// Funcion para limpiar la caja de texto (input), selecciona el ID del input y lo establece vacio
function limpiarInput(){
    document.getElementById("amigo").value = '';
    document.getElementById("amigo").focus();
}
//funcion para mostar amigos
function mostrarAmigos(){
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = '';

for (let i = 0; i < listaAmigos.length; i++){
    let elementoLista = document.createElement('li');
    elementoLista.textContent = (i + 1) +'. ' + listaAmigos [i];
    listaHTML.appendChild(elementoLista);
}

}
//funcion principal para agregar amigos 
function agregarAmigo(){
    //obtener el nombre escrito
    let nombre = getNombreAmigo();
    // validar nombre
    if(!validarNombre(nombre)){
        return;// si no es valido, salimos de la funcion.
    }
    //agregar a la lista
    listaAmigos.push(nombre);
    //limpia el campo de texto
    limpiarInput();
    //actualizar la lista 
    mostrarAmigos();
}

function sortearAmigo() {
    // 1. Verificar que haya al menos 2 participantes (o 1 si prefieres)
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos 2 amigos para sortear');
        return;
    }

    // 2. Preparar el contenedor de resultado
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = ''; // Limpiar resultados anteriores
    
    // 3. Seleccionar un ganador al azar
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];
    
    // 4. Crear y configurar el elemento de resultado
    let resultado = document.createElement('li');
    resultado.textContent = "¡El ganador es: " + amigoSecreto + "!";
    resultado.className = 'result-item';
    resultado.style.fontWeight = 'bold'; // Opcional: estilo adicional
    resultado.style.color = '#e74c3c';   // Opcional: color rojo
    
    // 5. Mostrar el resultado en pantalla
    resultadoHTML.appendChild(resultado);
}