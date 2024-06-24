const CajaDeAhorro = require('./CajaDeAhorro');
const CuentaCorriente = require('./CuentaCorriente');
const Titular = require('./Titular');

class Banco {
  constructor() {
    //this._titulares = new Array();
    this._cuentas = [];
    this._titulares = [];
    this._siguienteCBU = 1;
  }

  siguienteCBU() {
    const siguiente = String(this._siguienteCBU);
    this._siguienteCBU = this._siguienteCBU + 1;
    return siguiente;
  }

  agregarCajaDeAhorro() {
    const caja = new CajaDeAhorro(this.siguienteCBU());
    this._cuentas.push(caja);
    return caja;
  }

  agregarCuentaCorriente() {
    const cuenta = new CuentaCorriente(this.siguienteCBU());
    this._cuentas.push(cuenta);
    return cuenta;
  }

  buscarCuenta(unCbu) {
    return this._cuentas.find((cuenta) => cuenta.cbu() == unCbu);
  }

  saldoTotal() {
    let total = 0;
    this._cuentas.forEach((cuenta) => (total = total + cuenta.saldo()));
    return total;
  }

  registrarTitular(nombre) {
    const titular = new Titular(nombre);
    this._titulares.push(titular);
    return titular;
  }
}

module.exports = Banco;
