const { Auth, Administrador } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const {
  getproductos,
  getproductosById,
  getproductosBycategory,
  getProductosByPrice,
  postproductos,
  putproducto,
  deleteproductos
} = require('../controllers/productos')

const productoRouter = require('express').Router()

productoRouter.get('/price/:price', getProductosByPrice)
productoRouter.get('/category/:category', getproductosBycategory)
productoRouter.get('/:id', getproductosById)
productoRouter.get('/', getproductos)
productoRouter.post('/', [Auth], upload.single('image'), postproductos)
productoRouter.put('/:id', [Administrador], putproducto)
productoRouter.delete('/:id', [Administrador], deleteproductos)

module.exports = productoRouter
