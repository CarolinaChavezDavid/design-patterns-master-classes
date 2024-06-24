class Cuenta {
  constructor(unCbu) {
    this._saldo = 0;
    this._cbu = unCbu;
  }

  depositar(monto) {
    this._saldo += monto;
    return this._saldo;
  }

  puedeExtraer(monto) {
    throw new Error('debe ser implementado por las subclases');
  }

  extraer(monto) {
    throw new Error('debe ser implementado por las subclases');
  }

  saldo() {
    return this._saldo;
  }

  transferir(monto, otraCuenta) {
    if (this.puedeExtraer(monto)) {
      this.extraer(monto);
      otraCuenta.depositar(monto);
      return true;
    }
    return false;
  }

  cbu() {
    return this._cbu;
  }
}

module.exports = Cuenta;
