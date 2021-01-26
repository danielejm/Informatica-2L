let a
let nota


do {
  a = parseFloat(prompt("Ingrese el número de notas para promediar"));
} while (a <= 0 || a%1!=0 || isNaN(a));

let nnotas = 0
let notas=[0]

do {
    nota = parseFloat(prompt("Ingrese sus notas"));
    nnotas = nnotas+1
    notas.push(nota)
} while ( nota > 10 || nota < 0 || nnotas != a || isNaN(nota));


let i = 0
let suma = 0
while (i <= a){
    suma = suma + notas[i]
    i = i + 1
}
let promedio = suma/a
console.log ("su promedio es:",promedio)
