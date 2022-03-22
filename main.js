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
    animate();
    let spawn = spawnCircle();
    let timer1 = setTimeout(()=>{
        audio.play();    
    },3200);
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



class Circle{
    constructor(x, y, radio, color, velocidad){
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
        this.velocidad = velocidad;
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update(){
        this.draw();
        this.x = this.x - this.velocidad;
        
    }
}
let i = 0
const times = [[3581,"blue"],[850,"blue"],[777,"blue"],[926,"blue"],[834,"blue"],[890,"blue"],[968,"orange"],[375,"orange"],[413,"blue"],[453,"orange"],[417,"blue"],[393,"blue"],[444,"orange"],[460,"blue"],[422,"blue"],[417,"orange"],[479,"orange"],[440,"orange"],[391,"blue"],[433,"blue"],[407,"orange"],[483,"orange"],[413,"blue"],[423,"blue"],[399,"orange"],[482,"orange"],[399,"blue"],[356,"orange"],[443,"blue"],[477,"blue"],[452,"orange"],[420,"orange"],[449,"orange"],[427,"blue"],[413,"blue"],[399,"orange"],[1091,"orange"],[183,"orange"],[218,"blue"],[3342,"blue"],[370,"blue"],[455,"orange"],[380,"orange"],[395,"blue"],[388,"blue"],[457,"orange"],[449,"orange"],[534,"blue"],[412,"blue"],[403,"orange"],[394,"orange"],[411,"blue"],[423,"blue"],[403,"orange"],[427,"orange"],[488,"orange"],[256,"orange"],[65,"orange"],[258,"blue"],[212,"blue"],[412,"orange"],[419,"orange"],[457,"blue"],[245,"blue"],[244,"orange"],[404,"orange"],[420,"orange"],[408,"blue"],[426,"blue"],[455,"orange"],[390,"orange"],[311,"blue"],[89,"blue"],[314,"blue"],[211,"blue"],[361,"orange"],[445,"orange"],[445,"blue"],[392,"orange"],[476,"blue"],[396,"blue"],[449,"orange"],[185,"orange"],[205,"blue"],[427,"orange"],[218,"blue"],[254,"blue"],[202,"orange"],[241,"orange"],[221,"blue"],[268,"blue"],[320,"blue"],[418,"blue"],[424,"blue"],[748,"blue"],[186,"blue"],[219,"orange"],[171,"orange"],[214,"blue"],[3236,"blue"],[341,"blue"],[2031,"orange"],[235,"orange"],[238,"blue"],[385,"blue"],[412,"orange"],[349,"orange"],[1748,"orange"],[239,"orange"],[434,"blue"],[410,"blue"],[431,"orange"],[2096,"orange"],[690,"orange"],[222,"orange"],[390,"blue"],[892,"blue"],[305,"orange"],[1835,"orange"],[331,"orange"],[115,"orange"],[384,"blue"],[654,"blue"],[621,"blue"],[438,"orange"],[903,"orange"],[327,"orange"],[111,"orange"],[397,"blue"],[644,"orange"],[586,"blue"],[436,"blue"],[923,"blue"],[351,"blue"],[488,"orange"],[1132,"orange"],[198,"orange"],[399,"blue"],[296,"blue"],[319,"orange"],[3752,"orange"],[321,"blue"],[416,"blue"],[659,"orange"],[597,"blue"],[429,"blue"],[890,"orange"],[412,"blue"],[422,"blue"],[667,"orange"],[624,"blue"],[377,"blue"],[928,"orange"],[422,"blue"],[467,"blue"],[1064,"orange"],[227,"orange"],[461,"blue"],[261,"orange"],[336,"orange"]]
//times[0][0] = 4085;
let circles = [];
function spawnCircle(){
    function next(){
        const x = window.innerWidth;
        const y = 97;
        const radio = 55;
        const color = times[0][1]
        const velocidad = 10;
        circles.push(new Circle(x,y,radio,color,velocidad))
        times.shift();
        let duration = 1000
        if(times.length != 0){
            duration = 1000;
            duration = times[0][0]
            console.log(duration)
            console.log(times)
        }
        else{
           return 0;
        }
        timer = setTimeout(next,duration)
    }
    let timer = setTimeout(next,3581);
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
        circle.update();
    });

}

document.addEventListener("keydown", function(e){
    if(e.key == "n"){
        orange_rigth.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            orange_rigth.style.visibility = "hidden"
        }, 100);  
    }
    if(e.key == "b"){
        orange_left.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            orange_left.style.visibility = "hidden"
        }, 100);  
    }
    if(e.key == "m"){
        blue_right.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            blue_right.style.visibility = "hidden"
        }, 100);  
    }
    if(e.key == "v"){
        blue_left.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            blue_left.style.visibility = "hidden"
        }, 100);  
    }
});


