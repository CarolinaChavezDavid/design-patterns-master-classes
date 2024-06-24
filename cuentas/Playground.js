const Banco = require('./Banco');

const banco = new Banco();

const cajaDeAhorro = banco.agregarCajaDeAhorro();
cajaDeAhorro.depositar(200);
cajaDeAhorro.extraer(300);

const otraCajaDeAhorro = banco.agregarCajaDeAhorro();
otraCajaDeAhorro.extraer(200);

const cuentaCorriente = banco.agregarCuentaCorriente();
cuentaCorriente.extraer(50);

const otraCuentaCorriente = banco.agregarCuentaCorriente();
otraCuentaCorriente.extraer(80);

cajaDeAhorro.transferir(100, cuentaCorriente);

cuentaCorriente.transferir(50, otraCajaDeAhorro);

const unaCuenta = banco.buscarCuenta('1');
unaCuenta;
