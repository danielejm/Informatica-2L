
let canvas = document.querySelector("#miCanvas")



let ctx = canvas.getContext("2d")
let dT = 30;
let vX = 0
let x = 700
let score = 0
let vY = 100


function chest (xH){

    ctx.beginPath();   
    ctx.fillStyle = "rgb(54, 33, 18)"
    ctx.fillRect(xH,560,150,10)
    ctx.fill();

    ctx.beginPath();   
    ctx.fillStyle = "rgb(89, 57, 34)"
    ctx.moveTo(xH + 5, 570)
    ctx.lineTo(xH + 15, 600)
    ctx.lineTo(xH + 145, 570)
    ctx.fill();
    ctx.moveTo(xH + 145, 570)
    ctx.lineTo(xH + 15, 600)
    ctx.lineTo(xH + 135, 600)
    ctx.fill();
}

function text (){

    ctx.fillStyle = "white"
    ctx.font = "30px Copperplate";
    ctx.fillText(`score: ${score}`, 1150, 90); 

}
class Star{
    constructor(xC, yC , vY, color){
        this.xC = xC;
        this.yC = yC;
        this.vY = vY;
        this.color = color;
    }
    moverse(){
        let dY = dT/1000 *this.vY;
        this.yC = this.yC + dY;
    }
    dibujarse(){
        ctx.beginPath();   
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color;
        ctx.moveTo(this.xC -1, this.yC + 5)
        ctx.lineTo(this.xC - 10, this.yC - 20 )
        ctx.lineTo(this.xC - 17, this.yC -3)
        ctx.fill();
        ctx.stroke();
    
        ctx.beginPath();   
        ctx.moveTo(this.xC - 20, this.yC+5)
        ctx.lineTo(this.xC + 5, this.yC - 10)
        ctx.lineTo(this.xC - 16, this.yC-6)
        ctx.fill();
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(this.xC + 5, this.yC - 10)
        ctx.lineTo(this.xC - 25, this.yC - 10)
        ctx.lineTo(this.xC-10, this.yC)
        ctx.fill();
        ctx.stroke();

    }
}

let stars = []





function createStar(){
    
    let xS = 1300*Math.random() + 30;
    let y = 30;
    let vY = 250*Math.random() + 100;
    let color = "yellow"
    let newStar = new Star(xS, y, vY, color);


    stars.push(newStar);
}

window.setInterval(createStar, 4000);


function backgroundMoon () 
{
    ctx.beginPath();
    ctx.strokeStyle = "rgb(191, 191, 191)"
    ctx.fillStyle = "rgb(191, 191, 191)"
    ctx.arc(900,635, 400, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "grey"
    ctx.fillStyle = "grey"
    ctx.arc(770,335, 60, 0, 2*Math.PI);
    ctx.moveTo (950,385)
    ctx.arc(950,385, 50, 0, 2*Math.PI);
    ctx.moveTo (800,535)
    ctx.arc(800,535, 30, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
function detectarColision () {
   
    let nStarsi1 = stars.length
    stars = stars.filter (star=>star.yC < 635)
    let nStarsf1 = stars.length
    let deltaStars1 = nStarsf1 - nStarsi1
    score = score + deltaStars1
  
    
    stars = stars.filter (star=>!(x<=star.xC && star.xC<=(x+145) && star.yC > 560 && star.yC < 600))
   let nStarsf2 = stars.length
   let deltaStars2 = nStarsf2 - nStarsf1
   score = score - deltaStars2

   if (score == -1) {
    
    window.location.replace("inicio.html")
    alert("Perdiste... vuelve a intentarlo")
    }

    if (score == 50) {
    
        window.location.replace("inicio.html")
        alert("¡Felicidades, ganaste!")
        }
}

function drawAndMove(){
   
   

    ctx.clearRect(0,0, 1400, 635);

    let dX = dT/1000 *vX
    x = x + dX;
    

    backgroundMoon ()
   
    for (star of stars){
        star.moverse();
        star.dibujarse(); 
    }
    chest(x)

    detectarColision ()

    text ()
}

window.setInterval(drawAndMove, dT);


window.onkeydown = function(event){
    
    if (event.key == "ArrowRight" && xH < 1345 ) {
        vX = 300
    }
   if (event.key == "ArrowLeft"  && xH > 0) {
       vX = -300
   }
}

window.onkeyup = function(event){
vX = 0
}




text ()
backgroundMoon ()
chest(x)

