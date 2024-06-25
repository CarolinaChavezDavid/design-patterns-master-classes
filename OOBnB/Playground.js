const OOBnB = require('./OOBnB');
const Periodo = require('./Periodo');

/*
const periodo = new Periodo(new Date(2024, 0, 10), new Date());
const otroPeriodo = new Periodo(new Date(2024, 0, 15), new Date(2024, 0, 20));
const otroPeriodoMas = new Periodo(new Date(2024, 0, 25), new Date());*/

const oobnb = new OOBnB();

const juan = oobnb.registrarUsuario('juan', 'Plaza España');
const pedro = oobnb.registrarUsuario('pedro', 'Plaza España');

const propiedad = juan.registrarPropiedad(
  'Depto grande',
  'una descripcion',
  100,
  'direccion'
);
const reserva = propiedad.reservar(
  new Date(2024, 0, 10),
  new Date(2024, 0, 20),
  pedro
);
//propiedad.reservar(new Date(2024, 0, 15), new Date(2024, 0, 25), pedro);

const resultado = oobnb.propiedadesLibres(
  new Date(2024, 0, 9),
  new Date(2024, 1, 20)
);
resultado;
