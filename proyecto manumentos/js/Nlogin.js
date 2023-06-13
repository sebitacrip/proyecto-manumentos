$(document).ready(function(){
    $("#error").hide(function(){

    });
})

var nombre = document.getElementById('name')
var contra = document.getElementById('contra')
var correo = document.getElementById('correo')
var telefono= document.getElementById('telefono')
var error = document.getElementById('error')



var mensajeError =[];


var form = document.getElementById('formulario')
form.addEventListener('submit',function(evt){
    evt.defaultPrevented();
    if(nombre.value === null || nombre.value ===' '){
        mensajeError.push('ingresa tu nombre ')
    }
    if(contra.value === null || contra.value ===''){
        mensajeError.push('ingresa tu contraseña')
    }
    if(correo.value === null || correo.value ===''){
        mensajeError.push('ingresa tu correo ')
    }
    if(telefono.value === null || telefono.value === ' '){
        mensajeError.push('ingresa tu numero ')
    }
    error.innerHTML = mensajeError.join(', ');
    if(mensaje != ''){
        $('#error').html(mensaje);
        $('#error').show();
        event.preventDefault(); 
        return true// cancela el envio de los datos
    }
    return false;
})




function validarFormulario() {
    user = document.getElementById("name").value;
    password = document.getElementById("contra").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    edad = document.getElementById("edad").value;
    
    if(user === null && password === null && correo === null && telefono === null && edad === null){
      alert('Por favor, completa todos los campos.');
      return false;
    }
    alert("Formulario enviado :)")
    return true;
  }
  


