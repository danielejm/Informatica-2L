let canvas = document.querySelector("#Tabla")

let ctx = canvas.getContext("2d")

ctx.lineWidth= 1

function dibujarPeon (x, y, tam, color) {
    ctx.fillStyle = color
    ctx.strokeStyle = "black"
    ctx.fillRect (x-(tam*(6/5)),y + (3*tam) ,tam*(12/5),tam/(5/2))
    ctx.strokeRect (x-(tam*(6/5)),y+(3*tam),tam*(12/5),tam/(5/2))
    ctx.beginPath()
    ctx.arc(x+(tam*(81/25)), y + (tam*(7/5)), tam*(14/5),4*Math.PI/5 , Math.PI)
    ctx.arc(x-(tam*(81/25)), y + (tam*(7/5)), tam*(14/5),0 , Math.PI/5)
    ctx.moveTo(x - tam, y+(tam*(7/5)))
    ctx.lineTo(x + tam,y+(tam*(7/5)))
    ctx.lineTo(x + tam/(5/4), y+tam)
    ctx.moveTo(x - tam/(5/4), y+tam)
    ctx.lineTo(x + tam/(5/4), y+tam)
    ctx.moveTo(x, y)
    ctx.arc(x, y, tam,0 ,2*Math.PI)
    ctx.moveTo(x - tam/(5/4), y+tam)
    ctx.lineTo(x - tam, y+(tam*(7/5)))
    ctx.lineTo(x + tam/(5/4), y+tam)
    ctx.stroke ()
    ctx.fill ()
    }

let x1 = 30;
let y1 = 150;
let vX1 = 40; 
let x2 = 200;
let y2 = 30;
let vY2 = 200;
let x3 = 370;
let y3 = 30;
let v3 = 100;
let dT = 5; 

function Animar(){
    ctx.clearRect(0,0, 800, 800);
    let dX1 = (dT/1000) * vX1;
    x1 = x1 + dX1;
    dibujarPeon(x1, y1, 30,"LightGreen");
    let dY2 = (dT/1000) * vY2;
    y2 = y2 + dY2;
    dibujarPeon(x2, y2, 30,"SpringGreen");
    let d3 = (dT/1000) * v3;
    y3 = y3 + d3;
    x3 = x3 - d3;
    dibujarPeon(x3, y3, 30,"MediumSpringGreen");

}
window.setInterval(Animar, dT);






