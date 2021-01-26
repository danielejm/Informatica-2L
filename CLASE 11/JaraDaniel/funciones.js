function areaCirc (r){
    let area= Math.PI*(Math.pow(r,2))
    return area
    }

function volEsfera (r){
let vol= 4/3*(Math.PI*(Math.pow(r,3)))
return vol 
}

function max (a,b){
    if (a>b){
    return a
    }else{
    return b}
    }

function masLarga (palabra1,palabra2){
    if (palabra1.length>palabra2.length){
        return palabra1
        }else{
        return palabra2
    }
        }
    
let palabra1=prompt("Ingrese primera palabra")
let palabra2 = prompt("Ingrese segunda palabra")
alert (`La palabra más larga es ${masLarga(palabra1,palabra2)}`)

function masLarga (pal1,pal2){
    if (pal1.length>pal2.length){
        return palabra1
        }else{
        return palabra2
    }
        }
    
let pal1=prompt("Ingrese primera palabra")
let pal2 = prompt("Ingrese segunda palabra")
console.log (`La palabra más larga es ${masLarga(pal1,pal2)}`)

function fibonacci (n){
    if (n > 1) {
return fibonacci (n-1) + fibonacci (n-2)
    }
    else if(n==0){
return 0
    }
    else if(n==1) {
      return 1
    }
  }





