const Cuenta = require('./Cuenta');

class CajaDeAhorro extends Cuenta {
  constructor(unCbu) {
    super(unCbu);
    this._MAX_EXTRACCIONES = 2;
    this._extracciones = 0;
  }

  puedeExtraer(monto) {
    return monto <= this.saldo() && this._extracciones < this._MAX_EXTRACCIONES;
  }

  extraer(monto) {
    if (this.puedeExtraer(monto)) {
      this._saldo = this._saldo - monto;
      this._extracciones = this._extracciones + 1;
      return true;
    }
    return false;
  }
}

module.exports = CajaDeAhorro;
