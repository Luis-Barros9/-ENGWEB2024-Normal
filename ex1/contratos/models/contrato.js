var mongoose = require("mongoose")


//idcontrato;nAnuncio;tipoprocedimento;objectoContrato;dataPublicacao;dataCelebracaoContrato;precoContratual;prazoExecucao;NIPCentidadecomunicante;entidadecomunicante;fundamentacao

var entregaSchema = new mongoose.Schema({
    _id : Number, // Sigla
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
}, { versionKey: false })

module.exports = mongoose.model('contrato', entregaSchema, 'contratos')