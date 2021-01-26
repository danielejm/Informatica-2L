let suma = 0;
let i = 0;

while (i<=10000){
suma=suma + i;
i = i + 3;
}
alert(`La suma de los multiplos de 3 hasta 10.000 es ${suma}`)

let sumas = 0;
let x = 0;

while (x<=10000){
  sumas=sumas + x;
  x = x + 5;
}

alert(`La suma de los multiplos de 5 hasta 10.000 es ${sumas}`)

let a= 3
let sumador = 0

while(a<=10000){
  if(a%(5*3)==0){
  sumador=sumador + a
  a=a+1
  }
  else{
    a=a+1
  }
  }

  alert(`La suma de todos los multiplos de 5 y 3 hasta 10.000 es ${sumador}`)


let y= 3
let z= 5
let sumado= 0

while(z<=10000){
if (y<z){
sumado=sumado+y
y=y+3
}
else if(y>z) {
sumado=sumado+z
z=z+5
}
else{
  y=y+3
  z=z+5
}
}

alert(`La suma de todos los multiplos de 5 o 3, excluyendo multiplos de ambos, hasta 10.000 es ${sumado}`)

