class Peliculas{
    constructor(titulo, estreno, genero, genero2, calificacion){
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.genero2 = genero2;
        this.calificacion = calificacion
    }
}
const pelis = [];
pelis.push(new Peliculas("Terminator", 1984, "sci-fi", "accion", 8.1))
pelis.push(new Peliculas("Las brujas de Eastwick", 1987, "comedia", "fantasia", 6.5))
pelis.push(new Peliculas("Blade runner", 1982, "sci-fi", "drama", 8.1))
pelis.push(new Peliculas("Mad max", 2015, "accion", "sci-fi", 8.1))
pelis.push(new Peliculas("Groundhog Day", 1993, "comedia", "fantasia", 8.1))
pelis.push(new Peliculas("The Silence of the Lambs", 1991, "crimen", "suspenso", 8.6))
pelis.push(new Peliculas("John Wick", 2014, "crimen", "accion", 7.4))
pelis.push(new Peliculas("Clueless", 1995, "comedia", "romance", 6.9))
pelis.push(new Peliculas("El padrino", 1972, "crimen", "drama", 9.2))
pelis.push(new Peliculas("Matrix", 1999, "accion", "sci-fi", 8.7))



let pelisBuscada = prompt("Ingrese el genero que busca")
const pelisEncontradas = pelis.filter(e => e.genero.includes (pelisBuscada))
console.log(pelisEncontradas)

let botonAgregar = document.getElementById("agregarPeliculas");

botonAgregar.onclick = () => {
    pelis.push(new Peliculas(this.titulo, this.estreno, this.genero, this.genero2, this.calificacion))
}