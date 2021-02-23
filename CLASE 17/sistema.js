let contar = localStorage.getItem("contar")

if (contar == null){
contar = localStorage.setItem("contar",JSON.stringify(1))
contar =  JSON.parse(localStorage.getItem("contar"))
console.log(contar)
}
else{
contar =  JSON.parse(localStorage.getItem("contar"))
localStorage.setItem("contar",JSON.stringify(contar+1))
contar = localStorage.getItem("contar")
}

document.write(`Usted ha entrado ${contar} veces a esta página`)