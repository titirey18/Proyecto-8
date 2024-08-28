const { Administrador } = require('../../middlewares/auth')
const upload = require('../../middlewares/files')
const {
  getlista,
  getlistasById,
  postlista,
  putlista,
  deletelista
} = require('../controllers/listas')

const listasRouter = require('express').Router()

listasRouter.get('/:id', getlistasById)
listasRouter.get('/', getlista)
listasRouter.post('/', [Administrador], upload.single('image'), postlista)
listasRouter.put('/:id', [Administrador], upload.single('image'), putlista)
listasRouter.delete('/:id', [Administrador], deletelista)

module.exports = listasRouter
