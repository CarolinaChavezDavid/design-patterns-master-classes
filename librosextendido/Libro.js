class Libro {
  constructor(titulo, autor, costo) {
    this._titulo = titulo;
    this._autor = autor;
    this._costo = costo;
  }

  titulo() {
    return this._titulo;
  }

  precio() {
    // implementar
  }
}

module.exports = Libro;
