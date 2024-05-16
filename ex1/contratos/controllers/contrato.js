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
        .find({_entidade_comunicante : entidade})
        .exec()
}

module.exports.findByTipoProcedimento = tipo => {
    return Contrato
        .find({_tipoProcedimento : tipo})
        .exec()
}

module.exports.listEntidades = () => {
    return Contrato
        .distinct("_entidade_comunicante")
        .sort()
        .exec()
}

module.exports.listTipos = () => {
    return Contrato
        .distinct("_tipoProcedimento")
        .sort()
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
        