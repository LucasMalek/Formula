const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const usuarios = {}

function registrarusuario(usuario) {
     if (!usuario.id) usuario.id = sequence.id
     usuarios[usuario.id] = usuario

}

function getusuario(id) {
    if(usuarios[id]) {
        return usuarios[id]
    }else {
        return {}
    }
}

module.exports = {registrarusuario, getusuario}