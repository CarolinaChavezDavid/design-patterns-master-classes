const Periodo = require('./Periodo');
const Usuario = require('./Usuario');

class OOBnB {
  constructor() {
    this._usuarios = [];
  }

  registrarUsuario(nombre, direccion) {
    if (this._usuarios.some((user) => user.nombre() === nombre)) {
      throw new Error('ya existe un usuario con ese nombre');
    }
    const user = new Usuario(nombre, direccion);
    this._usuarios.push(user);
    return user;
  }

  propiedadesLibres(inicio, fin) {
    const periodo = new Periodo(inicio, fin);
    return this._usuarios.flatMap((usuario) =>
      usuario.propiedadesLibres(periodo)
    );
  }
}

module.exports = OOBnB;
