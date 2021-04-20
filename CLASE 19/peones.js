let canvas = document.querySelector("#Tabla")

let ctx = canvas.getContext("2d")

ctx.lineWidth= 1

function dibujarPeon (xC, yC, color) {
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect (xC-30,yC + 75 ,60,10)
ctx.strokeRect (xC-30,yC+75,60,10)
ctx.beginPath()
ctx.arc(xC+81, yC + 35, 70,4*Math.PI/5 , Math.PI)
ctx.arc(xC-81, yC+35, 70,0 , Math.PI/5)
ctx.moveTo(xC - 25, yC+35)
ctx.lineTo(xC + 25,yC+35)
ctx.lineTo(xC + 20, yC+25)
ctx.moveTo(xC - 20, yC+25)
ctx.lineTo(xC + 20, yC+25)
ctx.moveTo(xC, yC)
ctx.arc(xC, yC, 25,0 ,2*Math.PI)
ctx.moveTo(xC - 20, yC+25)
ctx.lineTo(xC - 25, yC+35)
ctx.lineTo(xC + 20, yC+25)
ctx.stroke ()
ctx.fill ()
}

for(let i=100;i<700;i=i+75){
    dibujarPeon(i,75,"black")
}

for(let i=100;i<700;i=i+75){
    dibujarPeon(i,475,"white")
}
