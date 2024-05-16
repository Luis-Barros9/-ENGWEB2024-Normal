const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.findById = id => {
    return Contrato
        .findOne({_id : id})
        .exec()
}

module.exports.findByEntidade = entidade => {
    return Contrato
        .find({NIPC_entidade_comunicante : entidade})
        .exec()
}

module.exports.findByTipoProcedimento = tipo => {
    return Contrato
        .find({tipoprocedimento : tipo})
        .exec()
}

module.exports.listEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec()
}

module.exports.listTipos = () => {
    // obterm todoso os valores únicos do campo tipoprocedimento
    return Contrato
        .distinct("tipoprocedimento")
        .exec()

}

module.exports.insert = p => {
    if (Contrato.find({_id : p._id}).exec() != null) {
    var novo = new Contrato(p)
    return novo.save()
    }
}

module.exports.remove = id => {
    return Contrato
        .findByIdAndDelete({_id : id})
        .exec()
}

module.exports.update = (id, p) => {
    return Contrato
        .findByIdAndUpdate({_id : id}, p, {new : true})
        .exec()
}
        