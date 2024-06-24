const Cuenta = require('./Cuenta');

class CuentaCorriente extends Cuenta {
  constructor(unCbu) {
    super(unCbu);
    this._DESCUBIERTO = 100;
  }

  puedeExtraer(monto) {
    return monto <= this.saldo() + this._DESCUBIERTO;
  }

  extraer(monto) {
    if (this.puedeExtraer(monto)) {
      this._saldo = this._saldo - monto;
      return true;
    }
    return false;
  }
}

module.exports = CuentaCorriente;
