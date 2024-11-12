import conexao from '../config/conexao.js'

const Campeonato = conexao.Schema({
    nome: {type:String, required:true},
    jogos: {type:Number},
    inicio: {type:Date}
})

export default conexao.model('Campeonato',Campeonato)