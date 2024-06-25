class Reserva {
  constructor(periodo, inquilino) {
    this._periodo = periodo;
    this._inquilino = inquilino;
  }

  periodo() {
    return this._periodo;
  }

  dias() {
    return this._periodo.dias();
  }
}

module.exports = Reserva;
