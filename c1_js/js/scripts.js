class Persona {
    constructor (nom, edad, prof) {
      this.nombre = nom;
      this.edad = edad;
      this.profesion = prof;
    }
    // métodos
    dibujar (css) {
      const tag = document.querySelector(css)
      tag.textContent = `${this.nombre} - ${this.profesion}`
    }
  }

  const p1 = new Persona('Pedro Picapieda', 30, 'operador de dinosaurio grúa')
  const p2 = new Persona('Pablo Mármol', 29, 'Constructor')

  p1.ciudad = 'Piedradura';

  const personas = [p1, p2];

  /*
    Ejercicio asincrónico
  */
class Libro {
    constructor(nom, aut, edit, gen){
        this.nombre = nom;
        this.autor = aut;
        this.editorial = edit;
        this.genero = gen;
    }
    mostrarLibro(){
        return `Libro "${this.nombre}" - escrito por ${this.autor} - en la editorial ${this.editorial} - del género ${this.genero}`;
    }
}

function filtrarPorAutor(arreglo, autor){
    let autoresLibro = arreglo.filter(libro => libro.autor == autor);
    return autoresLibro;
}
const l1 = new Libro("Silence", "Becca Fitzpatrick", "Alfaguara", "Literatura fantástica");
const l2 = new Libro("Papelucho y el marciano", "Marcela Paz", "Ediciones Sm", "Ficción");
const l3 = new Libro("Finalle", "Becca Fitzpatrick", "Alfaguara", "Literatura fantástica");

const arregloLibros = [l1, l2, l3];
console.log(l1.mostrarLibro());
console.log(l2.mostrarLibro());
console.log(l3.mostrarLibro());
console.log(filtrarPorAutor(arregloLibros, "Becca Fitzpatrick"));
