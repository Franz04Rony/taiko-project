const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const orange_rigth = document.getElementById("orange_right");
const orange_left = document.getElementById("orange_left");
const blue_right = document.getElementById("blue_right");
const blue_left = document.getElementById("blue_left");

const modal_container = document.getElementById("modal_container");
const close_ = document.getElementById("close");
const audio = document.getElementById("audio");
// Botón inicial - Ventana modal
modal_container.classList.add("show");
close_.addEventListener("click", ()=>{
    modal_container.classList.remove("show")
    audio.play();
});

//start
window.addEventListener('load', ()=>{
    //Tamaño del canvas al cargar
    canvas.height = 185;
    canvas.width = window.innerWidth;
    
});

window.addEventListener("resize", function(){
    //tamaño del canvas cuando pantalla cambia de tamaño
    canvas.height = 185;
    canvas.width = window.innerWidth;
    
})
///////////


let start = new Date().getTime();
let times = []
let times_nuevo = []

document.addEventListener("keypress", function(e){
    if(e.key == "n"){
        orange_rigth.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            orange_rigth.style.visibility = "hidden"
        }, 100);
        let end = new Date().getTime();
        let tiempo = end - start;
        if(times.length == 0) {
            times.push([tiempo, "orange"]);
            times_nuevo.push([tiempo, "orange"]);
        }
        else{
            times_nuevo.push([tiempo - times[times.length - 1][0], "orange"]);
            times.push([tiempo, "orange"]);
            console.log(times_nuevo);   
        }
        let final = JSON.stringify(times_nuevo)
        // with regex
        console.log(final.replace(/^\[|\]$/g,''))
    }
    if(e.key == "b"){
        orange_left.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            orange_left.style.visibility = "hidden"
        }, 100);  
        let end = new Date().getTime();
        let tiempo = end - start;
        if(times.length == 0) {
            times.push([tiempo, "orange"]);
            times_nuevo.push([tiempo, "orange"]);
        }
        else{
            times_nuevo.push([tiempo - times[times.length - 1][0], "orange"]);
            times.push([tiempo, "orange"]);
            console.log(times_nuevo);   
        }
        let final = JSON.stringify(times_nuevo)
        // with regex
        console.log(final.replace(/^\[|\]$/g,''))
    }
    if(e.key == "m"){
        blue_right.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            blue_right.style.visibility = "hidden"
        }, 100);
        let end = new Date().getTime();
        let tiempo = end - start;
        if(times.length == 0) {
            times.push([tiempo, "blue"]);
            times_nuevo.push([tiempo, "blue"]);
        }
        else{
            times_nuevo.push([tiempo - times[times.length - 1][0], "blue"]);
            times.push([tiempo, "blue"]);
            console.log(times_nuevo);   
        }
        let final = JSON.stringify(times_nuevo)
        // with regex
        console.log(final.replace(/^\[|\]$/g,''))
    }
    if(e.key == "v"){
        blue_left.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            blue_left.style.visibility = "hidden"
        }, 100); 
        let end = new Date().getTime();
        let tiempo = end - start;
        if(times.length == 0) {
            times.push([tiempo, "blue"]);
            times_nuevo.push([tiempo, "blue"]);
        }
        else{
            times_nuevo.push([tiempo - times[times.length - 1][0], "blue"]);
            times.push([tiempo, "blue"]);
            console.log(times_nuevo);   
        }
        let final = JSON.stringify(times_nuevo)
        // with regex
        console.log(final.replace(/^\[|\]$/g,''))
    }
    
});





