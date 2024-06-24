const Compra = require('./Compra');
const ClienteBasico = require('./ClienteBasico');
const ClienteVIP = require('./ClienteVIP');

class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
    this._credito = 0;
    this._compras = [];
    this._tipo = new ClienteBasico();
  }

  nombre() {
    return this._nombre;
  }

  recargarCredito(monto) {
    this._credito = this._credito + monto + this._tipo.bonificacion(monto);
  }

  comprarLibro(unLibro) {
    if (unLibro.precio() > this._credito) {
      throw new Error('credito insuficiente');
    }
    this._credito -= unLibro.precio();
    const compra = new Compra(unLibro, unLibro.precio());
    this._compras.push(compra);

    if (this.montoUltimasCompras() > 10000) {
      this._tipo = new ClienteVIP();
    }
    return compra;
  }

  montoUltimasCompras() {
    return this._compras.reduce(
      (acumulado, compra) => acumulado + compra.total(),
      0
    );
  }

  esVIP() {
    return this._tipo.esVIP();
  }
}

module.exports = Cliente;
