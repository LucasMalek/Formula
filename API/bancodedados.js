const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const usuarios = {}

function registrarusuario(usuario) {
     if (!usuario.id) usuario.id = sequence.id
     usuarios[usuario.id] = usuario

}

function getusuarios() {
   return usuarios
}

module.exports = {registrarusuario, getusuarios}