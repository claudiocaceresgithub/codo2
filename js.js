const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalAPagar = document.getElementById('total');
const borrarButton = document.getElementById('boton');
const resumenButton = document.getElementsByClassName('boton2');
const inputNombre2 = document.getElementById('nombre');
const inputApellido2 = document.getElementById('apellido');
const inputEmail1 = document.getElementById('correo');



resumenButton.addEventListener('click',function()  {          // Agregar un evento al botón "Resumen"
const cantidad = parseInt(cantidad.value);          // Obtener la cantidad y la categoría seleccionada
const categoria = categoria.value;
 

  
let costo = 200;                                         // Precio base de las entradas
    if (categoria === 'Estudiante') {
    costo *= 0.2;                                         // Aplico descuento uso un codigo abreviado 
    } else if (categoria === 'Trainee') {
    costo *= 0.5; 
    } else if (categoria === 'Junior') {
    costo *= 0.85; 
    }

  
    const totalAPagar = costo * cantidad;                  // Calculo el costo total de la compra
    total.value = `Total a Pagar: $${total}`;// Muestro el costo total en el campo de texto
});

document.getElementById("borrarButton").addEventListener("click", function() {

    cantidad.value = '';
    categoria.value = '';
    total.value = '';

    inputNombre2.value = '';
    inputApellido2.value = '';
    inputEmail1.value = '';
    
  });