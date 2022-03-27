const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const orange_rigth = document.getElementById("orange_right");
const orange_left = document.getElementById("orange_left");
const blue_right = document.getElementById("blue_right");
const blue_left = document.getElementById("blue_left");
const modal_container = document.getElementById("modal_container");
const audio = document.getElementById("audio");
const score_number = document.getElementById("score");
const combo_number = document.getElementById("combo");
//for carrusel
const name_song1 = document.getElementById("name_song1");
const name_song2 = document.getElementById("name_song2");
const name_song3 = document.getElementById("name_song3");
const image_song1 = document.getElementById("image_song1");
const image_song2 = document.getElementById("image_song2");
const image_song3 = document.getElementById("image_song3");
const dif_song1 = document.getElementById("dif_song1");
const dif_song2 = document.getElementById("dif_song2");
const dif_song3 = document.getElementById("dif_song3");
const jugar = document.getElementById("b-jugar");
const b_left = document.getElementById("b-left");
const b_right = document.getElementById("b-right");
const source = document.getElementById("source_");
const fondo = document.getElementById("fondo");

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
////////

const orange = "#e5432b";
const blue = "#007ca8";
let score = 0;
let combo = 0;
const nombres = ["Nadie te preguntó", "Reflect", "Charles"];
const images = ["images/nadie_te_pregunto.webp", "images/reflect.jpg", "images/charles1.jpg"];
const dif = ["Oni", "Kantan", "Oni"];
const d = "Dificultad: ";
const songs = ["songs/nadie_te_pregunto.mp3", "songs/reflect.mp3", "songs/charles.mp3"];
const times =[0,1,2];
let actual_song = [];
let delays = [3500, 8970, 3500]
// Botón inicial - Ventana modal
modal_container.classList.add("show");
jugar.addEventListener("click", ()=>{
    fondo.src = images[1];
    source.src = songs[1];
    actual_song = taiko_songs[times[1]]
    audio.load();
    modal_container.classList.remove("show")
    animate();
    let spawn = spawnCircle();
    let timer1 = setTimeout(()=>{
        audio.play();    
    },0);
});

//carrusel de canciones - menu inicial
name_song1.textContent = nombres[0];
name_song2.textContent = nombres[1];
name_song3.textContent = nombres[2];
image_song1.src = images[0];
image_song2.src = images[1];
image_song3.src = images[2];
dif_song1.textContent = d + dif[0];
dif_song2.textContent = d + dif[1];
dif_song3.textContent = d + dif[2];

b_right.addEventListener("click",()=>{
    let clon_images = images.slice();
    let clon_names = nombres.slice();
    let clon_dif = dif.slice();
    let clon_songs = songs.slice();
    let clon_times = times.slice();
    let clon_delays = delays.slice();
    for(let i=0; i < images.length; i++){
        if(i === images.length - 1){
            images[0] = clon_images[images.length - 1];
            nombres[0] = clon_names[images.length - 1];
            dif[0] = clon_dif[images.length - 1];
            songs[0] = clon_songs[images.length - 1];
            times[0] = clon_times[images.length - 1];
            delays[0] = clon_delays[images.length - 1];
        }
        else{
            images[i+1] = clon_images[i];
            nombres[i+1] = clon_names[i];
            dif[i+1] = clon_dif[i];
            songs[i+1] = clon_songs[i];
            times[i+1] = clon_times[i];
            delays[i+1] = clon_delays[i];
        }

    }
    name_song1.textContent = nombres[0];
    name_song2.textContent = nombres[1];
    name_song3.textContent = nombres[2];
    image_song1.src = images[0];
    image_song2.src = images[1];
    image_song3.src = images[2];
    dif_song1.textContent = d + dif[0];
    dif_song2.textContent = d + dif[1];
    dif_song3.textContent = d + dif[2];

})

b_left.addEventListener("click",()=>{
    let clon_images = images.slice();
    let clon_names = nombres.slice();
    let clon_dif = dif.slice();
    let clon_songs = songs.slice();
    let clon_times = times.slice();
    let clon_delays = delays.slice();
    for(let i=0; i < images.length; i++){
        if(i === images.length - 1){
            images[images.length - 1] = clon_images[0];
            nombres[images.length - 1] = clon_names[0];
            dif[images.length - 1] = clon_dif[0];
            songs[images.length - 1] = clon_songs[0];
            times[images.length - 1] = clon_times[0];
            delays[images.length - 1] = clon_delays[0];
        }
        else{
            images[i] = clon_images[i+1];
            nombres[i] = clon_names[i+1];
            dif[i] = clon_dif[i+1];
            songs[i] = clon_songs[i+1];
            times[i] = clon_times[i+1];
            delays[i] = clon_delays[i+1];
        }

    }
    name_song1.textContent = nombres[0];
    name_song2.textContent = nombres[1];
    name_song3.textContent = nombres[2];
    image_song1.src = images[0];
    image_song2.src = images[1];
    image_song3.src = images[2];
    dif_song1.textContent = d + dif[0];
    dif_song2.textContent = d + dif[1];
    dif_song3.textContent = d + dif[2];

})
///////Fin de carrusel
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
        ctx.stroke()
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 4
    }
    update(){
        this.draw();
        this.x = this.x - this.velocidad;
        
    }
}

class Hit{
    constructor(x, y, radio, color){
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        console.log("dibujando")
    }
    update(){
        this.draw();       
    }
}

let i = 0
taiko_songs = [[[3581,blue],[850,blue],[777,blue],[926,blue],[834,blue],[890,blue],[968,orange],[375,orange],[413,blue],[453,orange],[417,blue],[393,blue],[444,orange],[460,blue],[422,blue],[417,orange],[479,orange],[440,orange],[391,blue],[433,blue],[407,orange],[483,orange],[413,blue],[423,blue],[399,orange],[482,orange],[399,blue],[356,orange],[443,blue],[477,blue],[452,orange],[420,orange],[449,orange],[427,blue],[413,blue],[399,orange],[1091,orange],[183,orange],[218,blue],[3342,blue],[370,blue],[455,orange],[380,orange],[395,blue],[388,blue],[457,orange],[449,orange],[534,blue],[412,blue],[403,orange],[394,orange],[411,blue],[423,blue],[403,orange],[427,orange],[488,orange],[256,orange],[65,orange],[258,blue],[212,blue],[412,orange],[419,orange],[457,blue],[245,blue],[244,orange],[404,orange],[420,orange],[408,blue],[426,blue],[455,orange],[390,orange],[311,blue],[89,blue],[314,blue],[211,blue],[361,orange],[445,orange],[445,blue],[392,orange],[476,blue],[396,blue],[449,orange],[185,orange],[205,blue],[427,orange],[218,blue],[254,blue],[202,orange],[241,orange],[221,blue],[268,blue],[320,blue],[418,blue],[424,blue],[748,blue],[186,blue],[219,orange],[171,orange],[214,blue],[3236,blue],[341,blue],[2031,orange],[235,orange],[238,blue],[385,blue],[412,orange],[349,orange],[1748,orange],[239,orange],[434,blue],[410,blue],[431,orange],[2096,orange],[690,orange],[222,orange],[390,blue],[892,blue],[305,orange],[1835,orange],[331,orange],[115,orange],[384,blue],[654,blue],[621,blue],[438,orange],[903,orange],[327,orange],[111,orange],[397,blue],[644,orange],[586,blue],[436,blue],[923,blue],[351,blue],[488,orange],[1132,orange],[198,orange],[399,blue],[296,blue],[319,orange],[3752,orange],[321,blue],[416,blue],[659,orange],[597,blue],[429,blue],[890,orange],[412,blue],[422,blue],[667,orange],[624,blue],[377,blue],[928,orange],[422,blue],[467,blue],[1064,orange],[227,orange],[461,blue],[261,orange],[336,orange]],
[[8979,"#007ca8"],[451,"#007ca8"],[494,"#e5432b"],[500,"#e5432b"],[481,"#e5432b"],[508,"#007ca8"],[477,"#007ca8"],[445,"#e5432b"],[508,"#007ca8"],[489,"#007ca8"],[482,"#e5432b"],[479,"#007ca8"],[473,"#007ca8"],[349,"#e5432b"],[346,"#e5432b"],[462,"#e5432b"],[263,"#007ca8"],[489,"#007ca8"],[949,"#007ca8"],[964,"#007ca8"],[491,"#e5432b"],[518,"#e5432b"],[920,"#007ca8"],[479,"#007ca8"],[460,"#e5432b"],[449,"#e5432b"],[561,"#007ca8"],[240,"#007ca8"],[263,"#007ca8"],[242,"#007ca8"],[425,"#007ca8"],[260,"#007ca8"],[363,"#e5432b"],[610,"#007ca8"],[430,"#007ca8"],[859,"#e5432b"],[432,"#007ca8"],[383,"#007ca8"],[246,"#e5432b"],[386,"#e5432b"],[607,"#007ca8"],[366,"#e5432b"],[364,"#007ca8"],[3573,"#e5432b"],[456,"#007ca8"],[822,"#e5432b"],[183,"#e5432b"],[339,"#007ca8"],[412,"#007ca8"],[235,"#e5432b"],[377,"#007ca8"],[575,"#e5432b"],[758,"#007ca8"],[3493,"#e5432b"],[529,"#e5432b"],[362,"#007ca8"],[365,"#007ca8"],[278,"#e5432b"],[309,"#e5432b"],[384,"#e5432b"],[236,"#007ca8"],[499,"#007ca8"],[439,"#e5432b"],[972,"#e5432b"],[985,"#e5432b"],[336,"#007ca8"],[378,"#007ca8"],[218,"#e5432b"],[789,"#e5432b"],[76,"#007ca8"],[460,"#e5432b"],[352,"#e5432b"],[247,"#007ca8"],[980,"#007ca8"],[319,"#007ca8"],[399,"#e5432b"],[248,"#e5432b"],[359,"#007ca8"],[582,"#007ca8"],[390,"#007ca8"],[350,"#007ca8"],[249,"#007ca8"],[238,"#007ca8"],[234,"#007ca8"],[233,"#e5432b"],[239,"#e5432b"],[258,"#007ca8"],[1167,"#007ca8"],[378,"#007ca8"],[1440,"#e5432b"],[442,"#e5432b"],[1542,"#007ca8"],[510,"#007ca8"],[444,"#e5432b"],[358,"#e5432b"],[708,"#007ca8"],[474,"#007ca8"],[386,"#e5432b"],[324,"#007ca8"],[704,"#e5432b"],[324,"#e5432b"],[1333,"#007ca8"],[526,"#007ca8"],[1632,"#e5432b"],[468,"#e5432b"],[513,"#007ca8"],[330,"#007ca8"],[614,"#e5432b"],[484,"#e5432b"],[392,"#e5432b"],[311,"#007ca8"],[1714,"#007ca8"],[462,"#007ca8"],[303,"#e5432b"],[653,"#e5432b"],[470,"#007ca8"],[362,"#e5432b"],[250,"#007ca8"],[400,"#007ca8"],[715,"#e5432b"],[229,"#e5432b"],[434,"#007ca8"],[398,"#007ca8"],[535,"#e5432b"],[555,"#007ca8"],[334,"#007ca8"],[984,"#e5432b"],[1557,"#007ca8"],[391,"#007ca8"],[1463,"#e5432b"],[435,"#e5432b"],[1532,"#007ca8"],[438,"#007ca8"],[518,"#e5432b"]],
[[3574,"#e5432b"],[356,"#007ca8"],[422,"#007ca8"],[804,"#e5432b"],[865,"#e5432b"],[808,"#007ca8"],[880,"#007ca8"],[1148,"#e5432b"],[454,"#007ca8"],[423,"#007ca8"],[409,"#e5432b"],[436,"#007ca8"],[799,"#007ca8"],[841,"#e5432b"],[843,"#e5432b"],[831,"#e5432b"],[778,"#007ca8"],[402,"#007ca8"],[399,"#e5432b"],[393,"#007ca8"],[803,"#007ca8"],[489,"#e5432b"],[402,"#e5432b"],[323,"#007ca8"],[432,"#007ca8"],[517,"#e5432b"],[393,"#e5432b"],[347,"#007ca8"],[433,"#007ca8"],[477,"#e5432b"],[413,"#e5432b"],[376,"#007ca8"],[450,"#007ca8"],[576,"#007ca8"],[304,"#007ca8"],[288,"#e5432b"],[418,"#e5432b"],[460,"#e5432b"],[449,"#e5432b"],[369,"#007ca8"],[414,"#007ca8"],[480,"#007ca8"],[367,"#007ca8"],[380,"#e5432b"],[449,"#e5432b"],[834,"#e5432b"],[407,"#e5432b"],[442,"#007ca8"],[376,"#e5432b"],[413,"#007ca8"],[399,"#007ca8"],[441,"#e5432b"],[394,"#e5432b"],[428,"#007ca8"],[1276,"#e5432b"],[220,"#e5432b"],[219,"#007ca8"],[611,"#e5432b"],[229,"#e5432b"],[792,"#e5432b"],[840,"#007ca8"],[411,"#007ca8"],[408,"#e5432b"],[309,"#e5432b"],[482,"#007ca8"],[442,"#007ca8"],[415,"#e5432b"],[268,"#e5432b"],[359,"#e5432b"],[226,"#e5432b"],[206,"#007ca8"],[2625,"#007ca8"],[467,"#007ca8"],[349,"#e5432b"],[842,"#007ca8"],[807,"#e5432b"],[432,"#e5432b"],[427,"#007ca8"],[417,"#007ca8"],[783,"#e5432b"],[442,"#e5432b"],[419,"#007ca8"],[427,"#007ca8"],[384,"#e5432b"],[407,"#e5432b"],[407,"#e5432b"],[426,"#007ca8"],[4,"#007ca8"],[636,"#e5432b"],[210,"#e5432b"],[654,"#e5432b"],[165,"#e5432b"],[406,"#007ca8"],[414,"#007ca8"],[412,"#e5432b"],[643,"#e5432b"],[204,"#e5432b"],[445,"#007ca8"],[206,"#007ca8"],[200,"#e5432b"],[198,"#e5432b"],[1048,"#e5432b"],[188,"#e5432b"],[202,"#007ca8"],[256,"#007ca8"],[105,"#007ca8"],[442,"#e5432b"],[447,"#007ca8"],[405,"#e5432b"],[440,"#007ca8"],[204,"#007ca8"],[162,"#007ca8"],[392,"#e5432b"],[443,"#e5432b"],[216,"#e5432b"],[563,"#007ca8"],[405,"#007ca8"],[447,"#e5432b"],[435,"#007ca8"],[406,"#007ca8"],[454,"#e5432b"],[401,"#e5432b"],[397,"#007ca8"],[614,"#e5432b"],[208,"#e5432b"],[663,"#007ca8"],[196,"#007ca8"],[437,"#e5432b"],[358,"#007ca8"],[1039,"#e5432b"],[257,"#007ca8"],[408,"#007ca8"],[399,"#e5432b"],[403,"#007ca8"],[451,"#007ca8"],[454,"#007ca8"],[334,"#e5432b"],[423,"#e5432b"],[391,"#007ca8"],[450,"#e5432b"],[373,"#007ca8"],[439,"#e5432b"],[411,"#007ca8"],[413,"#007ca8"],[441,"#e5432b"],[177,"#e5432b"],[995,"#e5432b"],[451,"#007ca8"],[273,"#007ca8"],[170,"#e5432b"],[390,"#e5432b"],[439,"#e5432b"],[406,"#007ca8"],[395,"#e5432b"],[598,"#e5432b"],[214,"#007ca8"],[672,"#e5432b"],[220,"#007ca8"],[409,"#e5432b"],[376,"#007ca8"],[4078,"#e5432b"],[448,"#007ca8"],[466,"#e5432b"],[395,"#007ca8"],[429,"#e5432b"],[409,"#007ca8"],[433,"#e5432b"],[411,"#007ca8"],[197,"#e5432b"],[1807,"#e5432b"],[1232,"#007ca8"],[438,"#007ca8"],[371,"#e5432b"],[483,"#e5432b"],[401,"#007ca8"],[436,"#e5432b"],[391,"#007ca8"],[429,"#007ca8"],[389,"#e5432b"],[219,"#e5432b"],[3000,"#e5432b"],[356,"#e5432b"],[177,"#007ca8"],[620,"#e5432b"],[185,"#007ca8"],[290,"#e5432b"],[325,"#e5432b"],[221,"#007ca8"],[440,"#e5432b"],[191,"#007ca8"],[217,"#007ca8"],[954,"#e5432b"],[222,"#e5432b"],[453,"#007ca8"],[440,"#007ca8"],[435,"#e5432b"],[409,"#e5432b"],[385,"#007ca8"]],
];

//times[0][0] = 4085;
let circles = [];
let hits = [];
function spawnCircle(){
    function next(){
        const x = window.innerWidth;
        const y = 97;
        const radio = 55;
        const color = actual_song[0][1]
        const velocidad = 10;
        circles.push(new Circle(x,y,radio,color,velocidad))
        actual_song.shift();
        let duration = 1000
        if(times.length != 0){
            duration = 1000;
            duration = actual_song[0][0]
        }
        else{
           return 0;
        }
        console.log(duration)
        timer = setTimeout(next,duration)
    }
    let timer = setTimeout(next, delays[1] - 3100);
}

let dist = Math.hypot(window.innerWidth - 65, 0);
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hits.forEach(hit =>{
        hit.update();
    })
    circles.forEach((circle, index) => {
        console.log(index)
        circle.update();
        hits.forEach((hit, hitIndex) =>{
            dist = Math.hypot(circle.x - 67, 0);
            if(hit === hits[index]){
                //obtiene 300
                if(dist < 20 && hit.color == circle.color){
                    setTimeout(()=>{
                        circles.splice(index,1)
                        hits.splice(hitIndex,1)
                        combo = combo + 1;
                        score = score + 300 + 4*combo;
                        score_number.textContent = score;
                        if(combo > 9 && combo < 100){
                            combo_number.style.transform = "translateX(-8px)"
                        }
                        if(combo >99 && combo < 1000){
                            combo_number.style.transform = "translateX(-16px)"
                        }
                        combo_number.textContent = combo;

                    },0)
                }
                //obtiene 100
                if(dist <=40 && dist >=20 && hit.color == circle.color){
                    setTimeout(()=>{
                        circles.splice(index,1)
                        hits.splice(hitIndex,1)
                        combo = combo + 1;
                        score = score + 100 + 4*combo;
                        score_number.textContent = score;
                        if(combo > 9 && combo < 100){
                            combo_number.style.transform = "translateX(-8px)"
                        }
                        if(combo >99 && combo < 1000){
                            combo_number.style.transform = "translateX(-16px)"
                        }
                        combo_number.textContent = combo;
                    },0)
                }
            }  
        })
        //fuera de pantalla a la izquierda
        if(circle.x < -10){
            setTimeout(()=>{
                circles.splice(index,1)
                if(combo > 9 && combo < 100){
                    combo_number.style.transform = "translateX(0px)"
                }
                if(combo >99 && combo < 1000){
                    combo_number.style.transform = "translateX(0px)"
                }
                combo = 0;
                combo_number.textContent = combo;
            })
        }
        
    });
}
document.addEventListener("keydown", function(e){
    if(e.key == "n"){
        hits.push(new Hit(87, 97, 75, orange));
        orange_rigth.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            orange_rigth.style.visibility = "hidden"
            hits.pop()
        }, 50);
         
    }
    if(e.key == "b"){
        hits.push(new Hit(87, 97, 75, orange));
        orange_left.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            orange_left.style.visibility = "hidden"
            hits.pop()
        }, 50);  
    }
    if(e.key == "m"){
        hits.push(new Hit(87, 97, 75, blue));
        blue_right.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            blue_right.style.visibility = "hidden"
            hits.pop()
        }, 50);  
    }
    if(e.key == "v"){
        hits.push(new Hit(87, 97, 75, blue));
        blue_left.style.visibility = "visible"
        let timerId1 = setTimeout(function(){
            blue_left.style.visibility = "hidden";
            hits.pop();
        }, 50);  
    }
});



