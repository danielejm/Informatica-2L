let y=0
let addition=0

function prom (scores)
{ while(y<=(scores.length-1)){
    addition=addition+scores[y]
    y=y+1
    
}
console.log ("el promedio es:",addition/(scores.length-1))
}

let nscores
let score

do{
nscores = parseFloat(prompt("ingrese el numero de sus notas" ))
} while (nscores <=0  || nscores %1!=0 || isNaN(nscores))

let ninitialscores = 0
let scores=[0]

do{
score=parseFloat(prompt("Ingrese sus notas"))
ninitialscores=ninitialscores+1
scores.push(score)
} while (ninitialscores!=nscores ||  score > 10 || score < 0 || isNaN(score) )

console.log(scores)
prom (scores)


let quantity;
do {
quantity = parseFloat(prompt("Ingrese la cantidad de las palabras"))
} while (isNaN(quantity) || quantity < 1)
let palabras=[];
let t=0

while (t<quantity) {
    let palabra = prompt("Ingresa la palabra")
    t=t+1
    palabras.push(palabra);
    
}
let longitud = 0
longitud = palabras.length
let v=0
let conc=""
while (v<longitud){
    conc+=palabras[v] + " "
    v=v+1
}
alert(`La concactenación de palabras es "${conc}"`)

