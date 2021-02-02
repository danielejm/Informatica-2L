
let ingredientes = [
    {nombre:"pan",imagen:"https://i.blogs.es/45c55e/pan-rustico-de-trigo-facil-y-rapido/1366_2000.jpg",precio:1000,marca:"Bimbo"},
    {nombre:"arroz",imagen:"https://s1.eestatic.com/2020/05/29/ciencia/nutricion/arroz-seguridad_alimentaria-enfermedades_493711911_152762639_1024x576.jpg",precio:5050, marca:"Federal" },
    {nombre:"huevos",imagen:"https://ep01.epimg.net/elpais/imagenes/2020/02/20/estilo/1582190872_291135_1582192738_noticia_normal.jpg",precio: 11300, marca: "Kikes"},
    {nombre:"carne", imagen:"https://dam.cocinafacil.com.mx/wp-content/uploads/2020/01/BOVIDA.jpg", precio:13100, marca:"Exito"},
    {nombre:"pescado", imagen:"https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/beneficios-del-pescado.jpg", precio:13900, marca: "Antillana"}
]
let tabla = document.querySelector('#tabla')
let contenidoTabla = '<tr><th>nombre</th><th>imagen</th><th>precio</th><th>marca</th></tr>'

for(ingrediente of ingredientes){
 contenidoTabla = contenidoTabla + `<tr><td> ${ingrediente.nombre} </td><td><img src= "${ingrediente.imagen}" width=200px ></td><td>${ingrediente.precio} </td><td>${ingrediente.marca} </td></td>`
}

tabla.innerHTML = contenidoTabla;

let elementos = [
    {nombre:"pan"},
    {nombre:"arroz"},
    {nombre:"huevos"},
    {nombre:"carne"},
    {nombre:"pescado"},
   
   ]
   
   let lista = document.querySelector('#lista')
   let elementosLista= '<ul></ul>'
   for(elemento of elementos){
       elementosLista = elementosLista + `<li>${elemento.nombre}</li>`
   }

   lista.innerHTML = elementosLista;