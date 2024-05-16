var mongoose = require("mongoose")


//idcontrato;nAnuncio;tipoprocedimento;objectoContrato;dataPublicacao;dataCelebracaoContrato;precoContratual;prazoExecucao;NIPC_entidade_comunicante;entidade_comunicante;fundamentacao

var entregaSchema = new mongoose.Schema({
    _id : String, // Sigla
    _nAnuncio: String,
    _tipoProcedimento: String,
    _objectoContrato: String,
    _dataPublicacao: String,
    _dataCelebracaoContrato: String,
    _precoContratual: String,
    _prazoExecucao: String,
    _NIPC_entidade_comunicante: String,
    _entidade_comunicante: String,
    _fundamentacao: String
}, { versionKey: false })

module.exports = mongoose.model('contrato', entregaSchema, 'contratos')