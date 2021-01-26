let a = parseFloat( prompt ("Cual es el primer numero??"))
let b = parseFloat(prompt("Cual es el segundo numero?"))
if (b == "0") {
alert (`La división y el modulo no se pueden hacer `) 
alert ( `La suma es: ${a+b}`)
alert ( `La resta es: ${a-b}`)
alert ( `La multiplicación es: ${a*b}`)
} else {
    alert ( `La suma es: ${a+b}`)
    alert ( `La resta es: ${a-b}`)
    alert ( `La multiplicación es: ${a*b}`)
    alert ( `La división es: ${a/b}`)
    alert ( `El módulo es: ${a%b}`)
}
