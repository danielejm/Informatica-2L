let canvas = document.querySelector("#Canva1")
let ctx = canvas.getContext("2d")

// Lapiz

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth= 1
ctx.fillRect(250,250, 80, 10)
ctx.strokeRect(250,250,80, 10)
ctx.fillRect(250,260, 80, 10)
ctx.strokeRect(250,260,80,10)
ctx.fillStyle = "gray"
ctx.fillRect(245,250,5,20)
ctx.strokeRect(245,250,5,20)
ctx.fillStyle = "orange"
ctx.beginPath()
ctx.moveTo(330, 250)
ctx.lineTo(360, 260)
ctx.lineTo(330, 270)
ctx.stroke()
ctx.fill()
ctx.fillStyle = "black"
ctx.beginPath()
ctx.moveTo(355, 258)
ctx.lineTo(360, 260)
ctx.lineTo(355, 262)
ctx.stroke()
ctx.fill()
ctx.fillStyle = "red"
ctx.beginPath()
ctx.arc(245, 260, 10, Math.PI/2, -Math.PI/2)
ctx.stroke()
ctx.fill()

// Celulona

ctx.fillStyle = "grey"
ctx.strokeStyle = "black"
ctx.lineWidth= 1
ctx.fillRect(400, 200, 70, 130)
ctx.strokeRect(400,200,70, 130)
ctx.fillStyle = "cyan"
ctx.fillRect(405,210, 60, 100)
ctx.strokeRect(405,210,60,100)

ctx.strokeStyle = "black"


ctx.beginPath()
ctx.arc(435, 320, 5, -Math.PI, Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.arc(435, 205, 1.2, -Math.PI, Math.PI)
ctx.stroke()



