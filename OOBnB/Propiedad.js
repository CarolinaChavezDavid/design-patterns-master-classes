const Periodo = require('./Periodo');
const Reserva = require('./Reserva');

class Propiedad {
  constructor(nombre, descripcion, precioPorNoche, direccion) {
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precioPorNoche = precioPorNoche;
    this._direccion = direccion;
    this._reservas = [];
  }

  reservar(inicio, fin, inquilino) {
    const periodo = new Periodo(inicio, fin);
    if (!this.libre(periodo)) {
      throw new Error('la propiedad esta ocupada en las fechas indicada');
    }
    const reserva = new Reserva(periodo, inquilino);
    this._reservas.push(reserva);
    return reserva;
  }

  libre(periodo) {
    return !this._reservas.some((reserva) =>
      reserva.periodo().coincide(periodo)
    );
  }

  precioReserva(reserva) {
    return this._precioPorNoche * reserva.dias();
  }

  ingresos() {
    let total = 0;
    this._reservas.forEach(
      (reserva) => (total = total + this.precioReserva(reserva))
    );
    return total;
  }
}

module.exports = Propiedad;
