import express from 'express'
const router = express.Router()

import {    
        abreedtcampeonato, 
        edtcampeonato, 
        listarusuarios, 
        detalhe, 
        abreaddcampeonato,
        deletacampeonato, 
        addcampeonato, 
        listarcampeonato, 
        filtrarcampeonato,
        abreaddequipe,
        addequipe,
        listarequipe,
        filtrarequipe,
        deletaequipe,
        abreedtequipe,
        edtequipe
    } from '../controllers/admin.js';

router.get("/admin/usuarios/lst", listarusuarios)
router.get("/admin/usuarios/detalhe/:id", detalhe)

//create do modelo campeonato (create)
router.get('/admin/campeonato/add', abreaddcampeonato)
router.post('/admin/campeonato/add', addcampeonato)

//rotas do modelo campeonato (read)
router.get('/admin/campeonato/lst', listarcampeonato)
router.post('/admin/campeonato/lst', filtrarcampeonato)

//rota do modelo campeonato (delete)
router.get('/admin/campeonato/del/:id', deletacampeonato)

//rota do modelo campeonato (editar)
router.get('/admin/campeonato/edt/:id', abreedtcampeonato)
router.post('/admin/campeonato/edt/:id', edtcampeonato)

//create do modelo equipe (create)
router.get('/admin/equipe/add', abreaddequipe)
router.post('/admin/equipe/add', addequipe)

//rotas do modelo equipe (read)
router.get('/admin/equipe/lst', listarequipe)
router.post('/admin/equipe/lst', filtrarequipe)

//rota do modelo equipe (delete)
router.get('/admin/equipe/del/:id', deletaequipe)

//rota do modelo equipe (editar)
router.get('/admin/equipe/edt/:id', abreedtequipe)
router.post('/admin/equipe/edt/:id', edtequipe)
export default router