const { Administrador } = require('../../middlewares/auth')
const { uploadList } = require('../../middlewares/file')
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
listasRouter.post('/', [Administrador], uploadList.single('image'), postlista)
listasRouter.put('/:id', [Administrador], uploadList.single('image'), putlista)
listasRouter.delete('/:id', [Administrador], deletelista)

module.exports = listasRouter
