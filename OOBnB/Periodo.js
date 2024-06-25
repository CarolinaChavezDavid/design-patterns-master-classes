class Periodo {
  constructor(inicio, fin) {
    this._inicio = inicio;
    this._fin = fin;
  }

  inicio() {
    return this._inicio;
  }

  fin() {
    return this._fin;
  }

  incluyeFecha(unaFecha) {
    return unaFecha >= this.inicio() && unaFecha <= this.fin();
  }

  coincide(otroPeriodo) {
    return (
      this.incluyeFecha(otroPeriodo.inicio()) ||
      otroPeriodo.incluyeFecha(this.inicio())
    );
  }

  dias() {
    return parseInt((this.fin() - this.inicio()) / (1000 * 3600 * 24));
  }
}

module.exports = Periodo;
