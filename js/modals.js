let modal = document.getElementById("myModal");
let acceptBtn = document.getElementById("acceptBtn");
let cancelBtn = document.getElementById("cancelBtn");

//Espero a boton de aceptar presionado
acceptBtn.addEventListener('click', ()=>{
  location.reload();
});


//Espero a boton de cancelar presionado
cancelBtn.addEventListener('click', ()=>{
  modal.style.display = "none";
});


//Almaceno el boton que va a mostrar el modal
let btn = document.getElementById("resetBtn");

// cuando el usuario presional el boton se muestra el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// cual el usuario presiona en cualquier parte fuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}