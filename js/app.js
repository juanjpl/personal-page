

const { animate, scroll } = Motion


const caja = document.querySelectorAll("box")
var booleano = false;
/*
animate(boxes ,  { scale: [0.4, 1] },
    { ease: "circInOut", duration: 1.2 })


const pageTransition = document.getElementById("linkPage");

pageTransition.addEventListener(click , function()=>{
    console.log("Click!")
})
    


function clickMe(boolean){
      
    console.log(`Ingresó ${boolean}`)

    if(booleano===false){
   
        booleano = true
        console.log(booleano)         
    }else{

        booleano = false 
        console.log(booleano)         
    }
}


*/






function clickMe (llave){
    setTimeout(() => {
    const caja = document.getElementById("box")
    caja.classList.add("box-motion")
      }, "200");
 
}

function clickMeTwo (){
    console.log("Bounjour!")
    const caja = document.getElementById("box")
    caja.classList.remove("box-motion")
    caja.classList.add("box-motion-two")
}
