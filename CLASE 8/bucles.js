let total = 0;
let sumando = 1;
while (sumando <= 100) {
    console.log(`Total:${total}. Sumando ${sumando}`);
    total = total + sumando;
    sumando = sumando + 1;
}
console.log(`la suma es ${total}`);

let numero;
do {
    numero = parseFloat(prompt("Ingrese un número"));
} while (isNaN(numero)|| numero < 0)
console.log(`La raiz cuadrada es: ${Math.sqrt(numero)}`)