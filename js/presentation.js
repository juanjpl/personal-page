



function clickMe (){
    setTimeout(() => {
    const caja = document.getElementById("box")
    caja.classList.add("box-motion")
      }, "100");
 
}

window.onload = function(e){ 
    console.log("Bienvenidos")
    const caja = document.getElementById("box")
    caja.classList.add("box-motion")
}