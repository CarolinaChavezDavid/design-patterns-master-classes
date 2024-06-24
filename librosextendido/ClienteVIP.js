const ClienteBasico = require('./ClienteBasico');

class ClienteVIP extends ClienteBasico {
  bonificacion(monto) {
    return monto >= 50 ? monto * 0.05 : 0;
  }

  esVIP() {
    return true;
  }
}

module.exports = ClienteVIP;
