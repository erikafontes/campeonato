import conexao from '../config/conexao.js'

const Atleta = conexao.Schema({
    nome: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    datanasc: { type: Date, default: Date.now },
    equipe: {type: conexao.Schema.Types.ObjectId, ref:"Equipe"}
})

export default conexao.model('Atleta',Atleta)