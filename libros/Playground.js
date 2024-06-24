const LibroDigital = require('./LibroDigital');
const LibroImpreso = require('./LibroImpreso');
const Cliente = require('./Cliente');
const ClienteVIP = require('./ClienteVIP');

const gamma = new LibroImpreso('OO Patterns', 'Gamma et al', 3000);
const mackenzie = new LibroDigital(
  'Empirical Research in HCI',
  'MacKenzie',
  5000
);

const clienteNormal = new Cliente('Juan');
clienteNormal.recargarCredito(10000);
clienteNormal.comprarLibro(gamma);

const clienteVIP = new ClienteVIP('Jorge');
clienteVIP.recargarCredito(2000);
clienteVIP;
