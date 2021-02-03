let boton = document.querySelector("#color")
let parrafo = document.querySelector("#Parrafo1")
boton.onclick = cambiarColor
function cambiarColor(){
 
// math.floor sacado de https://www.w3schools.com/js/js_random.asp
        let a = Math.floor(Math.random() * 226)
        let b = Math.floor(Math.random() * 226)
        let c = Math.floor(Math.random() * 226)
        parrafo.style.color = `rgb(${a},${b},${c})`;
}



let boton2 = document.querySelector("#desaparecer")
let parrafo2 = document.querySelector("#Parrafo2")
boton2.onclick = desaparecer
function desaparecer(){
    if (parrafo2.innerHTML == "")
    {
    parrafo2.innerHTML = "El Sistema Solar forma parte de la Vía Láctea y está formado principalmente por una estrella llamada Sol y ocho planetas como lo son Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno  Algunos planetas pueden tener satélites que giran alrededor de estos. satélites"
 
}
else {
    parrafo2.innerHTML = ""
}
}

parrafo2.innerHTML = "El Sistema Solar forma parte de la  Vía Láctea y está formado principalmente por una estrella llamada Sol y ocho planetas como lo son Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno  Algunos planetas pueden tener satélites que giran alrededor de estos. satélites"

let boton3 = document.querySelector("#tempo")
let parrafo3 = document.querySelector("#Parrafo3")
boton3.onclick = temporal


function temporal () {

    parrafo3.innerHTML = ""
    setTimeout(appear,3000)

}


function appear () {

    parrafo3.innerHTML = "Una párrafo es una forma de comunicación que se compone de diferentes oraciones, principalmente por una principal y varias secundarias."
}


    
   

