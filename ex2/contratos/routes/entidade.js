var express = require('express');
var router = express.Router();
var axios = require('axios')
/*
. Se colocares no browser o endereço http://localhost:16001/entidades/:nipc deverás
obter a página da entidade cujo NIPC_entidade_comunicante corresponde ao parâmetro
passado na rota :
Na página de cada entidade deverá constar este identificador e o respetivo nome da entidade;
Uma tabela com a lista de contratos dessa entidade (tabela com estrutura semelhante à da
página principal);
O somatório do valor dos contratos;
E um link para voltar à página principal.*/

/* GET home page. */

router.get('/:nipc', function(req, res, next) {
  axios.get('http://localhost:16000/contratos?entidade=' + req.params.nipc)
    .then(dados => {
      if (dados.data.length == 0) {
        throw new Error('Não existe nenhum  contrado da entidade: ' + req.params.nipc);
      }
      var nome = dados.data[0].entidade;
      var total = 0;
      for (var i = 0; i < dados.data.length; i++) {
        total += dados.data[i].precoContratual;
      }

      res.render('entidade', { lista: dados.data, entidade : req.params.nipc,nome:nome,total:total});
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })
});


module.exports = router;
