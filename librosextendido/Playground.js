const LibroDigital = require('./LibroDigital');
const LibroImpreso = require('./LibroImpreso');
const Cliente = require('./Cliente');

const gamma = new LibroImpreso('OO Patterns', 'Gamma et al', 3000);
const refactoring = new LibroImpreso('Refactoring', 'Fowler', 6000);
const mackenzie = new LibroDigital(
  'Empirical Research in HCI',
  'MacKenzie',
  5000
);

const cliente = new Cliente('Juan');
cliente.recargarCredito(15000);
cliente.comprarLibro(mackenzie);
cliente.comprarLibro(refactoring);
cliente;
