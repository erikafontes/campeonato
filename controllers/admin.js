import Usuario from '../models/usuario.js';
import Campeonato from '../models/campeonato.js';
import equipe from '../models/equipe.js';

export async function listaratleta(req, res){
    const usuarios = await Usuario.find({}).catch(function(err){console.log(err)});
    res.render('admin/usuarios/lst', {usuarios: usuarios});
}
export async function abreaddatleta(req, res) {
    res.render('admin/usuarios/add')
}
export async function addatleta(req, res) {
    await Usuario.create({
        nome:req.body.nome
    })
    res.redirect('/admin/usuario/add')
}
export async function detalhe(req, res) {
    const usuario = await Usuario.findById(req.params.id);
    res.render('admin/usuarios/detalhe', {usuario: usuario});
}

export async function abreaddcampeonato(req, res) {
    res.render('admin/campeonato/add')
}

export async function addcampeonato(req, res) {
    await Campeonato.create({
        nome:req.body.nome
    })
    res.redirect('/admin/campeonato/add')
}

export async function listarcampeonato(req, res) {
    const campeonatos = await Campeonato.find({})
    res.render('admin/campeonato/lst',{Campeonatos: campeonatos});
}

export async function filtrarcampeonato(req, res) {
    const campeonatos = await Campeonato.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/campeonato/lst',{Campeonatos: campeonatos});
}

export async function deletacampeonato(req, res) {
    await Campeonato.findByIdAndDelete(req.params.id)
    res.redirect('/admin/campeonato/lst')
}

export async function abreedtcampeonato(req, res){
    const campeonato = await Campeonato.findById(req.params.id)
    res.render('admin/campeonato/edt.ejs',{campeonato: campeonato.js})
}

export async function edtcampeonato(req, res){
    await Campeonato.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/campeonato/lst')
}

export async function abreaddequipe(req, res) {
    res.render('admin/equipe/add')
}

export async function addequipe(req, res) {
    await equipe.create({
        nome:req.body.nome,
        valor: req.body.valor,
        campeonato: req.body.campeonato,
        quantidade: req.body.quantidade,
        fotos: req.body.fotos,
    })
    res.redirect('/admin/equipe/add')
}

export async function listarequipe(req, res) {
    const equipes = await equipe.find({})
    res.render('admin/equipe/lst',{Equipes: equipes});
}

export async function filtrarequipe(req, res) {
    const equipes = await equipe.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/equipe/lst',{Equipes: equipes});
}

export async function deletaequipe(req, res) {
    await equipe.findByIdAndDelete(req.params.id)
    res.redirect('/admin/equipe/lst')
}

export async function abreedtequipe(req, res){
    const equipes = await equipe.findById(req.params.id)
    res.render('admin/equipe/edt.ejs',{Equipe: equipe})
}

export async function edtequipe(req, res){
    await equipe.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/equipe/lst')
}