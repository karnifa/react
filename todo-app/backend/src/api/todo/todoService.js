const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
//quando mandar um comando de atualizar, retorne o registro atualizado
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo