class Compra {
  constructor(libro, total) {
    this._libro = libro;
    this._total = total;
    this._fecha = new Date();
  }

  fecha() {
    return this._fecha;
  }

  libro() {
    return this._libro;
  }

  total() {
    return this._total;
  }
}

module.exports = Compra;
