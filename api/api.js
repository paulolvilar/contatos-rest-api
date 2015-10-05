var restful = require('node-restful');
var mongoose = restful.mongoose;
module.exports = function(app) {
	var rest_api={}
        rest_api.restful = restful
	rest_api.mongoose = mongoose

	mongoose.connect("mongodb://localhost/resources");

	var Contato = rest_api.Contato = restful.model('contato', mongoose.Schema({
	    nome: String,
	    email: String,
	    telefone: Number
	  }))
	  .methods(['get', 'post', 'put', 'delete']);
         
	Contato.register(app, '/api/contatos');
        app.rest_api = rest_api
        return rest_api;
}
