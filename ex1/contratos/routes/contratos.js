/*
GET /contratos: devolve uma lista com todos os registos;
GET /contratos/:id: devolve o registo com identificador id (corresponde ao idcontrato);
GET /contratos?entidade=EEEE: devolve a lista dos contratos correspondentes à entidade
EEEE;
GET /contratos?tipo=AAA: devolve a lista dos contratos com tipo de procedimento igual a AAA;
GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada
alfabeticamente e sem repetições;
GET /contratos/tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e
sem repetições;
POST /contratos: acrescenta um registo novo à BD;
DELETE /contratos/:id: elimina da BD o registo com o identificador id;
PUT /contratos/:id: altera o registo com o identificador id.
*/
var express = require('express');
var router = express.Router();
var contratos = require("../controllers/contrato")
/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query.entidade) {
        contratos.findByEntidade(req.query.entidade)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if (req.query.tipo) {
        contratos.findByTipoProcedimento(req.query.tipo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else {
        contratos.list()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

router.get('/:id', function(req, res, next) {
    contratos.findById(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/entidades', function(req, res, next) {
    contratos.listEntidades()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/tipos', function(req, res, next) {
    contratos.listTipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.post('/', function(req, res, next) {
    contratos.insert(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
    contratos.remove(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});




module.exports = router;
