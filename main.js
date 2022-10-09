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
const hit_blue = document.getElementById("hit_blue");
const hit_orange = document.getElementById("hit_orange");
const menuhit = document.getElementById("menuhit");
const menuclick = document.getElementById("menuclick");
const menu_end_container = document.getElementById("menu-end-container");
const b_close = document.getElementById("b-close");
const image_end = document.getElementById("image_end");
//for scores
const score_final = document.getElementById("score-final");
const perfect = document.getElementById("perfect");
const ok = document.getElementById("ok");
const combo_final = document.getElementById("combo-final");
const bad = document.getElementById("bad");
const name_song_end = document.getElementById("name_song-end");

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
let flag_song;
const orange = "#e5432b";
const blue = "#007ca8";
let score = 0;
let combo = 0;
let perfect_number = 0;
let ok_number = 0;
let bad_number = 0;
const d = "Dificultad: ";
//a llenar por una nueva cancion
let nombres = ["Nadie te preguntó", "Reflect", "Charles", "Charles", "The desolation of spring", "Dragostea din tei"];
let images = ["images/nadie-te-pregunto2.png", "images/reflect2.png", "images/charles1.png", "images/charles.png", "images/lagtrain.png", "images/dragostea_din_tei.png"];
let dif = ["Muzukashi", "Muzukasi", "Oni", "Kantan", "wtf", "Kantan"];
let songs = ["songs/nadie_te_pregunto.mp3", "songs/reflect.mp3", "songs/charles.mp3", "songs/charles.mp3", "songs/the_desolation_of_spring.mp3", "songs/dragostea_din_tei.mp3"];
let times =[0,1,2,3,4,5];
let delays = [3581, 8970, 4020, 5178, 3901, 9000];
let start = [0,0,0,0,1000,0]; //retraso para que empiece la canción
//////
let actual_song = [];
// Botón inicial - Ventana modal
modal_container.classList.add("show");
let spawn = 0;
let anim = 0;
jugar.addEventListener("click", ()=>{
    flag_song = "activo";
    menuhit.currentTime = 0;
    menuhit.play();
    console.log(times)
    fondo.src = images[1];
    source.src = songs[1];
    actual_song = taiko_songs[times[1]].slice();
    console.log(actual_song);
    console.log(taiko_songs[times[1]])
    audio.load();
    modal_container.classList.remove("show")
    let timer = setTimeout(()=>{
        anim = animate();
        spawn = spawnCircle();
    },0)
    let timer1 = setTimeout(()=>{
        audio.play();    
    },start[1]);
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

menuclick.volume = 0.3
menuhit.volume = 0.3

b_left.addEventListener("click",()=>{
    menuclick.currentTime = 0;
    menuclick.play();
    let clon_images = images.slice();
    let clon_names = nombres.slice();
    let clon_dif = dif.slice();
    let clon_songs = songs.slice();
    let clon_times = times.slice();
    let clon_delays = delays.slice();
    let clon_start = start.slice();
    for(let i=0; i < images.length; i++){
        if(i === images.length - 1){
            images[0] = clon_images[images.length - 1];
            nombres[0] = clon_names[images.length - 1];
            dif[0] = clon_dif[images.length - 1];
            songs[0] = clon_songs[images.length - 1];
            times[0] = clon_times[images.length - 1];
            delays[0] = clon_delays[images.length - 1];
            start[0] = clon_start[images.length - 1];
        }
        else{
            images[i+1] = clon_images[i];
            nombres[i+1] = clon_names[i];
            dif[i+1] = clon_dif[i];
            songs[i+1] = clon_songs[i];
            times[i+1] = clon_times[i];
            delays[i+1] = clon_delays[i];
            start[i+1] = clon_start[i];
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

b_right.addEventListener("click",()=>{
    menuclick.currentTime = 0;
    menuclick.play();
    let clon_images = images.slice();
    let clon_names = nombres.slice();
    let clon_dif = dif.slice();
    let clon_songs = songs.slice();
    let clon_times = times.slice();
    let clon_delays = delays.slice();
    let clon_start = start.slice();
    for(let i=0; i < images.length; i++){
        if(i === images.length - 1){
            images[images.length - 1] = clon_images[0];
            nombres[images.length - 1] = clon_names[0];
            dif[images.length - 1] = clon_dif[0];
            songs[images.length - 1] = clon_songs[0];
            times[images.length - 1] = clon_times[0];
            delays[images.length - 1] = clon_delays[0];
            start[images.length - 1] = clon_start[0];
        }
        else{
            images[i] = clon_images[i+1];
            nombres[i] = clon_names[i+1];
            dif[i] = clon_dif[i+1];
            songs[i] = clon_songs[i+1];
            times[i] = clon_times[i+1];
            delays[i] = clon_delays[i+1];
            start[i] = clon_start[i+1];
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
    }
    update(){
        this.draw();       
    }
}

const taiko_songs = [[[3581,blue],[850,blue],[777,blue],[926,blue],[834,blue],[890,blue],[968,orange],[375,orange],[413,blue],[453,orange],[417,blue],[393,blue],[444,orange],[460,blue],[422,blue],[417,orange],[479,orange],[440,orange],[391,blue],[433,blue],[407,orange],[483,orange],[413,blue],[423,blue],[399,orange],[482,orange],[399,blue],[356,orange],[443,blue],[477,blue],[452,orange],[420,orange],[449,orange],[427,blue],[413,blue],[399,orange],[1091,orange],[183,orange],[218,blue],[3342,blue],[370,blue],[455,orange],[380,orange],[395,blue],[388,blue],[457,orange],[449,orange],[534,blue],[412,blue],[403,orange],[394,orange],[411,blue],[423,blue],[403,orange],[427,orange],[488,orange],[256,orange],[65,orange],[258,blue],[212,blue],[412,orange],[419,orange],[457,blue],[245,blue],[244,orange],[404,orange],[420,orange],[408,blue],[426,blue],[455,orange],[390,orange],[311,blue],[89,blue],[314,blue],[211,blue],[361,orange],[445,orange],[445,blue],[392,orange],[476,blue],[396,blue],[449,orange],[185,orange],[205,blue],[427,orange],[218,blue],[254,blue],[202,orange],[241,orange],[221,blue],[268,blue],[320,blue],[418,blue],[424,blue],[748,blue],[186,blue],[219,orange],[171,orange],[214,blue],[3236,blue],[341,blue],[2031,orange],[235,orange],[238,blue],[385,blue],[412,orange],[349,orange],[1748,orange],[239,orange],[434,blue],[410,blue],[431,orange],[2096,orange],[690,orange],[222,orange],[390,blue],[892,blue],[305,orange],[1835,orange],[331,orange],[115,orange],[384,blue],[654,blue],[621,blue],[438,orange],[903,orange],[327,orange],[111,orange],[397,blue],[644,orange],[586,blue],[436,blue],[923,blue],[351,blue],[488,orange],[1132,orange],[198,orange],[399,blue],[296,blue],[319,orange],[3752,orange],[321,blue],[416,blue],[659,orange],[597,blue],[429,blue],[890,orange],[412,blue],[422,blue],[667,orange],[624,blue],[377,blue],[928,orange],[422,blue],[467,blue],[1064,orange],[227,orange],[461,blue],[261,orange],[336,orange]],
[[8979,"#007ca8"],[451,"#007ca8"],[494,"#e5432b"],[500,"#e5432b"],[481,"#e5432b"],[508,"#007ca8"],[477,"#007ca8"],[445,"#e5432b"],[508,"#007ca8"],[489,"#007ca8"],[482,"#e5432b"],[479,"#007ca8"],[473,"#007ca8"],[349,"#e5432b"],[346,"#e5432b"],[462,"#e5432b"],[263,"#007ca8"],[489,"#007ca8"],[949,"#007ca8"],[964,"#007ca8"],[491,"#e5432b"],[518,"#e5432b"],[920,"#007ca8"],[479,"#007ca8"],[460,"#e5432b"],[449,"#e5432b"],[561,"#007ca8"],[240,"#007ca8"],[263,"#007ca8"],[242,"#007ca8"],[425,"#007ca8"],[260,"#007ca8"],[363,"#e5432b"],[610,"#007ca8"],[430,"#007ca8"],[859,"#e5432b"],[432,"#007ca8"],[383,"#007ca8"],[246,"#e5432b"],[386,"#e5432b"],[607,"#007ca8"],[366,"#e5432b"],[364,"#007ca8"],[3573,"#e5432b"],[456,"#007ca8"],[822,"#e5432b"],[183,"#e5432b"],[339,"#007ca8"],[412,"#007ca8"],[235,"#e5432b"],[377,"#007ca8"],[575,"#e5432b"],[758,"#007ca8"],[3493,"#e5432b"],[529,"#e5432b"],[362,"#007ca8"],[365,"#007ca8"],[278,"#e5432b"],[309,"#e5432b"],[384,"#e5432b"],[236,"#007ca8"],[499,"#007ca8"],[439,"#e5432b"],[972,"#e5432b"],[985,"#e5432b"],[336,"#007ca8"],[378,"#007ca8"],[218,"#e5432b"],[789,"#e5432b"],[76,"#007ca8"],[460,"#e5432b"],[352,"#e5432b"],[247,"#007ca8"],[980,"#007ca8"],[319,"#007ca8"],[399,"#e5432b"],[248,"#e5432b"],[359,"#007ca8"],[582,"#007ca8"],[390,"#007ca8"],[350,"#007ca8"],[249,"#007ca8"],[238,"#007ca8"],[234,"#007ca8"],[233,"#e5432b"],[239,"#e5432b"],[258,"#007ca8"],[1167,"#007ca8"],[378,"#007ca8"],[1440,"#e5432b"],[442,"#e5432b"],[1542,"#007ca8"],[510,"#007ca8"],[444,"#e5432b"],[358,"#e5432b"],[708,"#007ca8"],[474,"#007ca8"],[386,"#e5432b"],[324,"#007ca8"],[704,"#e5432b"],[324,"#e5432b"],[1333,"#007ca8"],[526,"#007ca8"],[1632,"#e5432b"],[468,"#e5432b"],[513,"#007ca8"],[330,"#007ca8"],[614,"#e5432b"],[484,"#e5432b"],[392,"#e5432b"],[311,"#007ca8"],[1714,"#007ca8"],[462,"#007ca8"],[303,"#e5432b"],[653,"#e5432b"],[470,"#007ca8"],[362,"#e5432b"],[250,"#007ca8"],[400,"#007ca8"],[715,"#e5432b"],[229,"#e5432b"],[434,"#007ca8"],[398,"#007ca8"],[535,"#e5432b"],[555,"#007ca8"],[334,"#007ca8"],[984,"#e5432b"],[1557,"#007ca8"],[391,"#007ca8"],[1463,"#e5432b"],[435,"#e5432b"],[1532,"#007ca8"],[438,"#007ca8"],[518,"#e5432b"]],
[[4320,"#007ca8"],[400,"#007ca8"],[1061,"#e5432b"],[994,"#007ca8"],[840,"#007ca8"],[252,"#e5432b"],[1408,"#e5432b"],[439,"#007ca8"],[382,"#007ca8"],[829,"#e5432b"],[394,"#e5432b"],[352,"#007ca8"],[374,"#007ca8"],[207,"#e5432b"],[255,"#007ca8"],[2516,"#007ca8"],[406,"#007ca8"],[475,"#e5432b"],[395,"#e5432b"],[276,"#007ca8"],[296,"#007ca8"],[226,"#e5432b"],[385,"#e5432b"],[125,"#e5432b"],[263,"#007ca8"],[349,"#007ca8"],[467,"#e5432b"],[435,"#e5432b"],[109,"#e5432b"],[325,"#007ca8"],[348,"#007ca8"],[455,"#e5432b"],[476,"#e5432b"],[112,"#e5432b"],[284,"#007ca8"],[321,"#007ca8"],[479,"#e5432b"],[519,"#e5432b"],[136,"#e5432b"],[250,"#007ca8"],[331,"#007ca8"],[390,"#e5432b"],[421,"#007ca8"],[132,"#007ca8"],[305,"#e5432b"],[313,"#e5432b"],[456,"#007ca8"],[480,"#e5432b"],[111,"#e5432b"],[344,"#007ca8"],[381,"#007ca8"],[399,"#e5432b"],[407,"#007ca8"],[115,"#007ca8"],[359,"#e5432b"],[307,"#e5432b"],[459,"#007ca8"],[484,"#007ca8"],[374,"#e5432b"],[1209,"#007ca8"],[414,"#e5432b"],[1717,"#007ca8"],[393,"#e5432b"],[822,"#007ca8"],[417,"#007ca8"],[1307,"#e5432b"],[373,"#e5432b"],[319,"#007ca8"],[349,"#007ca8"],[141,"#e5432b"],[390,"#e5432b"],[382,"#007ca8"],[682,"#e5432b"],[227,"#e5432b"],[225,"#007ca8"],[2648,"#007ca8"],[407,"#007ca8"],[429,"#e5432b"],[849,"#007ca8"],[627,"#e5432b"],[182,"#e5432b"],[403,"#007ca8"],[441,"#007ca8"],[399,"#e5432b"],[844,"#007ca8"],[415,"#007ca8"],[383,"#e5432b"],[448,"#e5432b"],[400,"#007ca8"],[407,"#007ca8"],[251,"#e5432b"],[121,"#e5432b"],[301,"#007ca8"],[846,"#007ca8"],[821,"#e5432b"],[433,"#007ca8"],[425,"#007ca8"],[424,"#e5432b"],[653,"#007ca8"],[196,"#007ca8"],[438,"#e5432b"],[358,"#007ca8"],[239,"#007ca8"],[1019,"#e5432b"],[418,"#007ca8"],[408,"#e5432b"],[397,"#007ca8"],[447,"#e5432b"],[317,"#e5432b"],[390,"#007ca8"],[220,"#007ca8"],[204,"#007ca8"],[387,"#e5432b"],[357,"#e5432b"],[80,"#007ca8"],[214,"#e5432b"],[392,"#007ca8"],[192,"#007ca8"],[400,"#e5432b"],[872,"#e5432b"],[410,"#007ca8"],[434,"#e5432b"],[380,"#007ca8"],[437,"#007ca8"],[654,"#e5432b"],[187,"#007ca8"],[606,"#e5432b"],[221,"#007ca8"],[449,"#e5432b"],[387,"#007ca8"],[1265,"#e5432b"],[372,"#007ca8"],[795,"#007ca8"],[438,"#007ca8"],[403,"#e5432b"],[372,"#e5432b"],[838,"#e5432b"],[395,"#e5432b"],[326,"#007ca8"],[110,"#e5432b"],[381,"#007ca8"],[189,"#e5432b"],[240,"#e5432b"],[374,"#007ca8"],[372,"#007ca8"],[268,"#e5432b"],[440,"#e5432b"],[212,"#007ca8"],[251,"#e5432b"],[177,"#007ca8"],[410,"#e5432b"],[189,"#007ca8"],[220,"#e5432b"],[440,"#007ca8"],[428,"#007ca8"],[399,"#e5432b"],[419,"#007ca8"],[669,"#e5432b"],[186,"#007ca8"],[549,"#e5432b"],[230,"#007ca8"],[426,"#e5432b"],[189,"#007ca8"],[232,"#007ca8"],[449,"#007ca8"],[373,"#007ca8"],[378,"#007ca8"],[369,"#007ca8"],[421,"#007ca8"],[369,"#007ca8"],[493,"#e5432b"],[440,"#e5432b"],[191,"#007ca8"],[202,"#e5432b"],[309,"#007ca8"],[474,"#007ca8"],[466,"#e5432b"],[432,"#007ca8"],[413,"#e5432b"],[206,"#007ca8"],[193,"#e5432b"],[194,"#007ca8"],[220,"#007ca8"],[336,"#e5432b"],[104,"#007ca8"],[186,"#e5432b"],[461,"#007ca8"],[190,"#007ca8"],[402,"#007ca8"],[230,"#007ca8"],[225,"#007ca8"],[188,"#007ca8"],[204,"#007ca8"],[1140,"#e5432b"],[425,"#e5432b"],[439,"#007ca8"],[311,"#e5432b"],[97,"#007ca8"],[413,"#007ca8"],[450,"#e5432b"],[200,"#e5432b"],[199,"#e5432b"],[416,"#007ca8"],[414,"#e5432b"],[229,"#007ca8"],[661,"#007ca8"],[208,"#007ca8"],[240,"#007ca8"],[203,"#007ca8"],[209,"#007ca8"],[214,"#007ca8"],[232,"#007ca8"],[248,"#007ca8"],[211,"#007ca8"],[245,"#007ca8"],[372,"#e5432b"],[439,"#007ca8"],[626,"#e5432b"],[175,"#e5432b"],[316,"#007ca8"],[319,"#e5432b"],[233,"#e5432b"],[203,"#007ca8"],[226,"#e5432b"],[214,"#007ca8"],[207,"#007ca8"],[1000,"#e5432b"],[222,"#e5432b"],[410,"#007ca8"],[457,"#e5432b"],[412,"#007ca8"],[393,"#007ca8"],[478,"#e5432b"]],
[[5178,"#007ca8"],[1277,"#007ca8"],[1692,"#e5432b"],[843,"#007ca8"],[1228,"#007ca8"],[1165,"#e5432b"],[1706,"#007ca8"],[853,"#e5432b"],[416,"#e5432b"],[414,"#e5432b"],[398,"#007ca8"],[1135,"#007ca8"],[1676,"#007ca8"],[1682,"#007ca8"],[1699,"#e5432b"],[904,"#007ca8"],[1547,"#007ca8"],[1700,"#e5432b"],[1661,"#007ca8"],[2046,"#007ca8"],[1244,"#e5432b"],[1253,"#e5432b"],[1205,"#007ca8"],[878,"#007ca8"],[402,"#e5432b"],[1260,"#007ca8"],[1637,"#e5432b"],[1257,"#007ca8"],[404,"#007ca8"],[1656,"#e5432b"],[1678,"#007ca8"],[930,"#007ca8"],[693,"#e5432b"],[409,"#e5432b"],[445,"#007ca8"],[385,"#e5432b"],[796,"#007ca8"],[1300,"#e5432b"],[430,"#e5432b"],[394,"#e5432b"],[813,"#007ca8"],[846,"#007ca8"],[787,"#e5432b"],[860,"#007ca8"],[1200,"#007ca8"],[1082,"#007ca8"],[1858,"#007ca8"],[825,"#007ca8"],[860,"#e5432b"],[790,"#007ca8"],[433,"#e5432b"],[386,"#007ca8"],[810,"#007ca8"],[861,"#e5432b"],[413,"#e5432b"],[419,"#007ca8"],[804,"#007ca8"],[862,"#e5432b"],[811,"#007ca8"],[2476,"#e5432b"],[854,"#007ca8"],[799,"#007ca8"],[830,"#e5432b"],[848,"#007ca8"],[789,"#e5432b"],[848,"#007ca8"],[388,"#e5432b"],[261,"#007ca8"],[867,"#007ca8"],[930,"#e5432b"],[898,"#007ca8"],[808,"#007ca8"],[801,"#e5432b"],[837,"#007ca8"],[801,"#e5432b"],[4175,"#007ca8"],[815,"#e5432b"],[864,"#e5432b"],[805,"#007ca8"],[829,"#007ca8"],[802,"#007ca8"],[815,"#007ca8"],[1686,"#e5432b"],[868,"#007ca8"],[831,"#007ca8"],[857,"#e5432b"],[427,"#007ca8"],[420,"#e5432b"],[526,"#007ca8"],[593,"#007ca8"],[520,"#007ca8"],[422,"#007ca8"],[1165,"#e5432b"],[749,"#e5432b"],[879,"#007ca8"],[829,"#007ca8"],[1686,"#007ca8"],[829,"#e5432b"],[427,"#007ca8"],[428,"#e5432b"]],
[[2421,"#007ca8"],[6229,"#007ca8"],[6802,"#e5432b"],[1024,"#e5432b"],[216,"#e5432b"],[407,"#e5432b"],[206,"#e5432b"],[595,"#e5432b"],[822,"#e5432b"],[215,"#e5432b"],[565,"#e5432b"],[801,"#e5432b"],[213,"#e5432b"],[552,"#e5432b"],[908,"#e5432b"],[200,"#e5432b"],[443,"#e5432b"],[708,"#e5432b"],[229,"#e5432b"],[676,"#e5432b"],[641,"#e5432b"],[284,"#e5432b"],[722,"#e5432b"],[2422,"#007ca8"],[395,"#007ca8"],[359,"#e5432b"],[446,"#007ca8"],[409,"#007ca8"],[407,"#e5432b"],[424,"#007ca8"],[426,"#e5432b"],[384,"#e5432b"],[363,"#007ca8"],[412,"#007ca8"],[377,"#e5432b"],[372,"#007ca8"],[426,"#007ca8"],[397,"#e5432b"],[396,"#007ca8"],[394,"#007ca8"],[411,"#e5432b"],[399,"#007ca8"],[422,"#007ca8"],[422,"#e5432b"],[396,"#007ca8"],[390,"#007ca8"],[400,"#e5432b"],[355,"#007ca8"],[448,"#007ca8"],[371,"#e5432b"],[1191,"#e5432b"],[380,"#e5432b"],[780,"#e5432b"],[438,"#e5432b"],[404,"#e5432b"],[427,"#007ca8"],[396,"#007ca8"],[619,"#e5432b"],[579,"#007ca8"],[397,"#007ca8"],[371,"#e5432b"],[847,"#007ca8"],[786,"#e5432b"],[771,"#e5432b"],[816,"#007ca8"],[396,"#007ca8"],[229,"#e5432b"],[1851,"#e5432b"],[177,"#e5432b"],[194,"#007ca8"],[406,"#e5432b"],[172,"#e5432b"],[220,"#007ca8"],[204,"#007ca8"],[106,"#007ca8"],[486,"#e5432b"],[369,"#007ca8"],[789,"#007ca8"],[417,"#e5432b"],[782,"#e5432b"],[398,"#007ca8"],[622,"#e5432b"],[975,"#e5432b"],[737,"#007ca8"],[782,"#e5432b"],[864,"#e5432b"],[856,"#e5432b"],[767,"#e5432b"],[698,"#007ca8"],[917,"#e5432b"],[823,"#e5432b"],[162,"#e5432b"],[244,"#007ca8"],[388,"#e5432b"],[361,"#e5432b"],[425,"#e5432b"],[374,"#e5432b"],[441,"#e5432b"],[354,"#007ca8"],[414,"#e5432b"],[200,"#e5432b"],[229,"#007ca8"],[210,"#007ca8"],[394,"#e5432b"],[477,"#e5432b"],[160,"#e5432b"],[517,"#007ca8"],[407,"#e5432b"],[189,"#e5432b"],[248,"#007ca8"],[176,"#007ca8"],[369,"#e5432b"],[406,"#007ca8"],[444,"#007ca8"],[187,"#e5432b"],[394,"#e5432b"],[184,"#e5432b"],[369,"#007ca8"],[394,"#e5432b"],[220,"#e5432b"],[218,"#007ca8"],[394,"#e5432b"],[212,"#e5432b"],[404,"#e5432b"],[197,"#007ca8"],[216,"#007ca8"],[213,"#e5432b"],[387,"#e5432b"],[232,"#e5432b"],[171,"#e5432b"],[245,"#007ca8"],[199,"#007ca8"],[196,"#e5432b"],[224,"#007ca8"],[4,"#e5432b"],[177,"#e5432b"],[164,"#e5432b"],[235,"#007ca8"],[183,"#007ca8"],[220,"#e5432b"],[163,"#e5432b"],[214,"#007ca8"],[179,"#007ca8"],[360,"#e5432b"],[420,"#e5432b"],[230,"#e5432b"],[598,"#007ca8"],[187,"#007ca8"],[210,"#e5432b"],[199,"#e5432b"],[193,"#007ca8"],[384,"#e5432b"],[223,"#e5432b"],[72,"#e5432b"],[111,"#007ca8"],[249,"#007ca8"],[214,"#e5432b"],[174,"#e5432b"],[362,"#e5432b"],[166,"#e5432b"],[407,"#e5432b"],[186,"#e5432b"],[224,"#007ca8"],[375,"#007ca8"],[415,"#e5432b"],[192,"#007ca8"],[441,"#e5432b"],[187,"#007ca8"],[246,"#007ca8"],[188,"#e5432b"],[357,"#e5432b"],[463,"#e5432b"],[359,"#e5432b"],[208,"#007ca8"],[389,"#007ca8"],[219,"#007ca8"],[215,"#e5432b"],[190,"#e5432b"],[609,"#e5432b"],[208,"#007ca8"],[415,"#007ca8"],[183,"#e5432b"],[347,"#e5432b"],[403,"#e5432b"],[213,"#007ca8"],[229,"#007ca8"],[201,"#007ca8"],[389,"#e5432b"],[201,"#e5432b"],[212,"#007ca8"],[219,"#007ca8"],[386,"#e5432b"],[185,"#e5432b"],[406,"#e5432b"],[168,"#e5432b"],[204,"#007ca8"],[154,"#007ca8"],[246,"#007ca8"],[394,"#007ca8"],[379,"#e5432b"],[10,"#e5432b"],[444,"#e5432b"],[403,"#007ca8"],[199,"#007ca8"],[343,"#e5432b"],[448,"#e5432b"],[189,"#007ca8"],[421,"#007ca8"],[188,"#007ca8"],[451,"#e5432b"],[358,"#e5432b"],[179,"#e5432b"],[394,"#007ca8"],[201,"#007ca8"],[336,"#e5432b"],[421,"#e5432b"],[181,"#e5432b"],[463,"#007ca8"],[432,"#e5432b"],[375,"#e5432b"],[427,"#e5432b"],[366,"#007ca8"],[176,"#007ca8"],[363,"#e5432b"],[432,"#e5432b"],[214,"#e5432b"],[400,"#007ca8"],[159,"#007ca8"],[518,"#e5432b"],[182,"#e5432b"],[380,"#007ca8"],[380,"#007ca8"],[204,"#e5432b"],[412,"#e5432b"],[392,"#e5432b"],[197,"#e5432b"],[379,"#007ca8"],[148,"#007ca8"],[645,"#e5432b"],[3201,"#007ca8"],[3209,"#007ca8"],[3206,"#e5432b"],[427,"#007ca8"],[706,"#007ca8"],[443,"#007ca8"],[221,"#007ca8"],[216,"#007ca8"],[218,"#007ca8"],[224,"#007ca8"],[226,"#007ca8"],[166,"#007ca8"],[210,"#e5432b"],[76,"#e5432b"],[94,"#007ca8"],[402,"#007ca8"],[391,"#e5432b"],[770,"#e5432b"],[413,"#007ca8"],[413,"#007ca8"],[767,"#e5432b"],[400,"#007ca8"],[431,"#007ca8"],[354,"#007ca8"],[36,"#e5432b"],[505,"#e5432b"],[320,"#007ca8"],[169,"#007ca8"],[389,"#007ca8"],[180,"#e5432b"],[309,"#e5432b"],[135,"#e5432b"],[773,"#007ca8"],[415,"#007ca8"],[420,"#e5432b"],[799,"#e5432b"],[364,"#007ca8"],[413,"#007ca8"],[242,"#007ca8"],[227,"#007ca8"],[356,"#e5432b"],[178,"#e5432b"],[207,"#e5432b"],[207,"#e5432b"],[193,"#e5432b"],[194,"#e5432b"],[215,"#e5432b"],[196,"#e5432b"],[411,"#e5432b"],[3822,"#007ca8"],[364,"#007ca8"],[517,"#007ca8"],[295,"#007ca8"],[383,"#e5432b"],[373,"#007ca8"],[425,"#007ca8"],[430,"#007ca8"],[368,"#007ca8"],[342,"#007ca8"],[399,"#007ca8"],[364,"#007ca8"],[430,"#007ca8"],[345,"#007ca8"],[389,"#007ca8"],[386,"#007ca8"],[505,"#007ca8"],[422,"#007ca8"],[415,"#007ca8"],[329,"#e5432b"],[311,"#007ca8"],[474,"#e5432b"],[327,"#007ca8"],[399,"#e5432b"],[254,"#007ca8"],[491,"#007ca8"],[143,"#007ca8"],[179,"#007ca8"],[229,"#007ca8"],[228,"#007ca8"],[214,"#007ca8"],[210,"#007ca8"],[244,"#007ca8"],[350,"#007ca8"],[380,"#007ca8"],[454,"#007ca8"],[356,"#e5432b"],[194,"#e5432b"],[201,"#007ca8"],[240,"#007ca8"],[337,"#e5432b"],[193,"#e5432b"],[209,"#007ca8"],[93,"#e5432b"],[98,"#007ca8"],[255,"#007ca8"],[173,"#e5432b"],[415,"#007ca8"],[402,"#007ca8"],[206,"#007ca8"],[429,"#007ca8"],[199,"#007ca8"],[335,"#007ca8"],[215,"#e5432b"],[201,"#e5432b"],[403,"#e5432b"],[293,"#e5432b"],[185,"#007ca8"],[194,"#007ca8"],[353,"#e5432b"],[178,"#e5432b"],[195,"#007ca8"],[231,"#007ca8"],[406,"#e5432b"],[240,"#e5432b"],[190,"#007ca8"],[199,"#007ca8"],[215,"#007ca8"],[209,"#007ca8"],[166,"#007ca8"],[417,"#e5432b"],[244,"#007ca8"],[355,"#e5432b"],[184,"#e5432b"],[172,"#007ca8"],[589,"#e5432b"],[187,"#e5432b"],[172,"#007ca8"],[374,"#e5432b"],[153,"#e5432b"],[218,"#007ca8"],[456,"#007ca8"],[214,"#007ca8"],[225,"#007ca8"],[415,"#e5432b"],[235,"#e5432b"],[91,"#e5432b"],[86,"#007ca8"],[375,"#007ca8"],[428,"#007ca8"],[365,"#e5432b"],[459,"#e5432b"],[351,"#e5432b"],[438,"#007ca8"],[129,"#007ca8"],[134,"#e5432b"],[118,"#e5432b"],[435,"#007ca8"],[434,"#007ca8"],[355,"#e5432b"],[397,"#e5432b"],[395,"#e5432b"],[384,"#007ca8"],[402,"#e5432b"],[829,"#e5432b"],[400,"#e5432b"],[373,"#007ca8"],[397,"#007ca8"],[462,"#e5432b"],[343,"#e5432b"],[398,"#007ca8"],[112,"#007ca8"],[137,"#e5432b"],[166,"#e5432b"],[419,"#e5432b"],[395,"#e5432b"],[382,"#007ca8"],[383,"#007ca8"],[745,"#e5432b"],[435,"#e5432b"],[442,"#007ca8"],[409,"#e5432b"],[376,"#e5432b"],[372,"#007ca8"],[413,"#007ca8"],[107,"#007ca8"],[93,"#e5432b"],[82,"#e5432b"],[163,"#007ca8"],[385,"#007ca8"],[366,"#e5432b"],[399,"#e5432b"],[388,"#007ca8"],[407,"#007ca8"],[413,"#e5432b"],[797,"#007ca8"],[420,"#007ca8"],[387,"#e5432b"],[418,"#e5432b"],[441,"#e5432b"],[349,"#007ca8"],[396,"#e5432b"],[126,"#e5432b"],[189,"#007ca8"],[135,"#007ca8"],[343,"#e5432b"],[406,"#e5432b"],[390,"#007ca8"],[394,"#007ca8"],[482,"#e5432b"],[339,"#007ca8"]],

[[8964,"#007ca8"],[1794,"#007ca8"],[1865,"#007ca8"],[1885,"#007ca8"],[445,"#e5432b"],[448,"#007ca8"],[504,"#007ca8"],[434,"#e5432b"],[868,"#007ca8"],[945,"#007ca8"],[972,"#007ca8"],[908,"#e5432b"],[967,"#e5432b"],[887,"#007ca8"],[680,"#007ca8"],[468,"#e5432b"],[690,"#007ca8"],[783,"#e5432b"],[1064,"#e5432b"],[680,"#007ca8"],[1220,"#007ca8"],[640,"#e5432b"],[1177,"#e5432b"],[673,"#007ca8"],[441,"#007ca8"],[1180,"#e5432b"],[472,"#007ca8"],[1337,"#e5432b"],[282,"#007ca8"],[1644,"#e5432b"],[195,"#007ca8"],[1584,"#007ca8"],[224,"#007ca8"],[1104,"#e5432b"],[594,"#e5432b"],[241,"#007ca8"],[1515,"#e5432b"],[200,"#e5432b"],[237,"#007ca8"],[1324,"#e5432b"],[412,"#007ca8"],[445,"#e5432b"],[516,"#e5432b"],[588,"#007ca8"],[308,"#007ca8"],[418,"#e5432b"],[931,"#e5432b"],[362,"#e5432b"],[415,"#007ca8"],[1498,"#007ca8"],[1556,"#007ca8"],[280,"#e5432b"],[1386,"#e5432b"],[452,"#007ca8"],[644,"#007ca8"],[771,"#e5432b"],[247,"#e5432b"],[208,"#007ca8"],[462,"#007ca8"],[404,"#007ca8"],[515,"#007ca8"],[479,"#007ca8"],[1366,"#e5432b"],[357,"#e5432b"],[316,"#007ca8"],[1099,"#e5432b"],[551,"#007ca8"],[1106,"#007ca8"],[441,"#007ca8"],[508,"#007ca8"],[389,"#007ca8"],[494,"#007ca8"],[478,"#e5432b"],[468,"#e5432b"],[434,"#007ca8"],[529,"#e5432b"],[204,"#e5432b"],[230,"#007ca8"],[413,"#007ca8"],[984,"#007ca8"],[439,"#e5432b"],[442,"#007ca8"],[985,"#e5432b"],[440,"#007ca8"],[457,"#e5432b"],[396,"#007ca8"],[503,"#e5432b"],[699,"#007ca8"],[680,"#e5432b"],[519,"#007ca8"],[878,"#007ca8"],[961,"#e5432b"],[620,"#007ca8"],[923,"#e5432b"],[856,"#007ca8"],[1325,"#e5432b"],[649,"#007ca8"],[597,"#007ca8"],[571,"#e5432b"],[426,"#007ca8"],[430,"#007ca8"],[939,"#e5432b"],[513,"#007ca8"],[417,"#007ca8"],[921,"#e5432b"],[937,"#007ca8"],[944,"#007ca8"],[701,"#e5432b"],[1102,"#e5432b"],[910,"#007ca8"],[989,"#007ca8"],[631,"#e5432b"],[909,"#007ca8"],[893,"#e5432b"],[435,"#007ca8"],[1639,"#e5432b"],[1638,"#007ca8"],[1830,"#007ca8"],[1770,"#007ca8"],[932,"#007ca8"],[364,"#007ca8"],[427,"#007ca8"],[482,"#007ca8"],[417,"#007ca8"],[484,"#007ca8"],[455,"#007ca8"],[479,"#007ca8"],[444,"#007ca8"],[502,"#007ca8"],[456,"#007ca8"],[470,"#007ca8"],[468,"#007ca8"],[1388,"#e5432b"],[482,"#e5432b"],[468,"#e5432b"],[455,"#007ca8"],[423,"#e5432b"],[1114,"#e5432b"],[463,"#007ca8"],[1645,"#007ca8"],[285,"#e5432b"],[1841,"#e5432b"],[1120,"#007ca8"],[606,"#007ca8"],[1698,"#e5432b"],[405,"#007ca8"],[1310,"#e5432b"],[510,"#007ca8"],[990,"#007ca8"],[733,"#e5432b"],[534,"#e5432b"],[658,"#007ca8"],[647,"#e5432b"],[1161,"#e5432b"],[426,"#007ca8"],[435,"#007ca8"],[992,"#e5432b"],[407,"#007ca8"],[451,"#007ca8"],[1002,"#e5432b"],[402,"#007ca8"],[504,"#e5432b"],[404,"#007ca8"],[428,"#e5432b"],[764,"#007ca8"],[1142,"#007ca8"],[434,"#e5432b"],[496,"#e5432b"],[983,"#007ca8"],[665,"#e5432b"],[825,"#007ca8"],[955,"#e5432b"],[443,"#007ca8"],[786,"#e5432b"],[775,"#007ca8"],[1040,"#007ca8"],[883,"#e5432b"],[925,"#e5432b"],[922,"#007ca8"],[940,"#e5432b"],[947,"#007ca8"],[866,"#e5432b"],[712,"#007ca8"],[1212,"#007ca8"],[426,"#007ca8"],[417,"#e5432b"],[1024,"#007ca8"],[644,"#007ca8"],[958,"#e5432b"],[845,"#007ca8"],[245,"#007ca8"],[1651,"#e5432b"],[1852,"#e5432b"],[1893,"#007ca8"],[1785,"#e5432b"],[440,"#007ca8"],[1462,"#e5432b"],[1821,"#e5432b"],[1835,"#007ca8"],[1802,"#e5432b"],[460,"#007ca8"],[1481,"#e5432b"],[656,"#e5432b"],[444,"#007ca8"],[453,"#007ca8"],[461,"#e5432b"],[465,"#e5432b"],[524,"#007ca8"],[413,"#007ca8"],[470,"#e5432b"],[415,"#e5432b"],[463,"#007ca8"],[460,"#007ca8"],[454,"#e5432b"],[455,"#e5432b"],[457,"#007ca8"],[467,"#007ca8"],[436,"#e5432b"],[459,"#e5432b"],[474,"#007ca8"],[474,"#007ca8"],[459,"#e5432b"],[452,"#e5432b"],[472,"#007ca8"],[498,"#007ca8"],[466,"#e5432b"],[418,"#e5432b"],[499,"#007ca8"],[497,"#007ca8"],[1330,"#e5432b"],[1379,"#e5432b"],[476,"#007ca8"],[446,"#007ca8"],[451,"#e5432b"],[997,"#e5432b"],[423,"#007ca8"],[462,"#007ca8"],[926,"#e5432b"],[930,"#007ca8"],[444,"#007ca8"],[458,"#e5432b"],[1354,"#e5432b"],[501,"#007ca8"],[445,"#007ca8"],[450,"#e5432b"],[987,"#e5432b"],[588,"#007ca8"],[890,"#e5432b"],[914,"#007ca8"],[522,"#007ca8"],[717,"#e5432b"],[732,"#007ca8"],[1152,"#e5432b"],[471,"#007ca8"],[492,"#007ca8"],[884,"#e5432b"],[439,"#007ca8"],[443,"#e5432b"],[992,"#007ca8"],[427,"#007ca8"],[474,"#e5432b"],[426,"#e5432b"],[466,"#007ca8"],[675,"#e5432b"],[1185,"#e5432b"],[395,"#007ca8"],[466,"#007ca8"],[959,"#e5432b"],[688,"#007ca8"],[854,"#007ca8"],[962,"#e5432b"],[429,"#007ca8"],[1783,"#e5432b"]]


];

//times[0][0] = 4085;
let circles = [];
let hits = [];
let combos = [];
function spawnCircle(){
    function next(){
        const x = window.innerWidth;
        const y = 97;
        const radio = 55;
        const color = actual_song[0][1]
        const velocidad = 10;
        circles.push(new Circle(x,y,radio,color,velocidad));
        actual_song.shift();
        let duration = 1000;
        if(actual_song.length > 0){
            duration = 1000;
            duration = actual_song[0][0];
        }
        else{
            console.log("cancion terminada");
            return 0;
        }
        timer = setTimeout(next,duration)
    }
    let timer = setTimeout(next, delays[1] - 3200);
}

let dist = Math.hypot(window.innerWidth - 65, 0);
function animate(){
    if(flag_song === "activo"){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hits.forEach(hit =>{
            hit.update();
        })
        circles.forEach((circle, index) => {
            circle.update();
            hits.forEach((hit, hitIndex) =>{
                dist = Math.hypot(circle.x - 67, 0);
                if(hit === hits[index]){
                    //obtiene 300 (Perfect)
                    if(dist < 20 && hit.color == circle.color){
                        setTimeout(()=>{
                            circles.splice(index,1)
                            hits.splice(hitIndex,1)
                            perfect_number = perfect_number + 1;
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
                    //obtiene 100 (Ok)
                    if(dist <=40 && dist >=20 && hit.color == circle.color){
                        setTimeout(()=>{
                            circles.splice(index,1)
                            hits.splice(hitIndex,1)
                            ok_number = ok_number + 1;
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
            //fuera de pantalla a la izquierda (Bad)
            if(circle.x < -10){
                setTimeout(()=>{
                    circles.splice(index,1)
                    combos.push(combo);
                    bad_number = bad_number + 1;
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
    else return 0;
    
}

hit_orange.volume = 0.1;
hit_blue.volume = 0.1;
//bug
audio.addEventListener("ended", function(){
    image_end.src = images[1];
    name_song_end.textContent = nombres[1];
    score_final.textContent = score;
    perfect.textContent = perfect_number;
    ok.textContent = ok_number;
    bad.textContent = bad_number;
    combos.push(combo);
    combo = Math.max(...combos);
    combo_final.textContent = combo;
    score = 0;
    combos = [];
    combo = 0;
    perfect_number = 0;
    ok_number = 0;
    bad_number = 0;
    flag_song = "inactivo";
    combo_number.style.transform = "translateX(0px)";
    score_number.textContent = score;
    combo_number.textContent = combo;
    menu_end_container.classList.add("show");
  });

document.addEventListener("keydown", function(e){
    if(e.key == "n"){
        hits.push(new Hit(87, 97, 75, orange));
        orange_rigth.style.visibility = "visible"
        hit_orange.currentTime = 0;
        hit_orange.play();
        let timerId1 = setTimeout(function(){
            orange_rigth.style.visibility = "hidden"
            hits.pop()
        }, 35);
         
    }
    if(e.key == "b"){
        hits.push(new Hit(87, 97, 75, orange));
        orange_left.style.visibility = "visible"
        hit_orange.currentTime = 0;
        hit_orange.play();
        let timerId1 = setTimeout(function(){
            orange_left.style.visibility = "hidden"
            hits.pop()
        }, 35);  
    }
    if(e.key == "m"){
        hits.push(new Hit(87, 97, 75, blue));
        blue_right.style.visibility = "visible"
        hit_blue.currentTime = 0;
        hit_blue.play();
        let timerId1 = setTimeout(function(){
            blue_right.style.visibility = "hidden"
            hits.pop()
        }, 35);  
    }
    if(e.key == "v"){
        hits.push(new Hit(87, 97, 75, blue));
        blue_left.style.visibility = "visible"
        hit_blue.currentTime = 0;
        hit_blue.play();
        let timerId1 = setTimeout(function(){
            blue_left.style.visibility = "hidden";
            hits.pop();
        }, 35);  
    }
});

b_close.addEventListener("click", ()=>{
    menu_end_container.classList.remove("show")
    modal_container.classList.add("show");
})



