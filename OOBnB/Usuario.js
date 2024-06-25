const Propiedad = require('./Propiedad');

class Usuario {
  constructor(nombre, direccion) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._propiedades = [];
  }

  nombre() {
    return this._nombre;
  }

  registrarPropiedad(nombre, descripcion, precioPorNoche, direccion) {
    const propiedad = new Propiedad(
      nombre,
      descripcion,
      precioPorNoche,
      direccion
    );
    this._propiedades.push(propiedad);
    return propiedad;
  }

  propiedadesLibres(periodo) {
    return this._propiedades.filter((propiedad) => propiedad.libre(periodo));
  }

  ingresos() {
    return this._propiedades.reduce(
      (total, propiedad) => total + propiedad.ingresos(),
      0
    );
  }
}

module.exports = Usuario;
