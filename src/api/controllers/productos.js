const { filedelete } = require('../../utils/filedelete')
const Producto = require('../models/productos')
const getproductos = async (req, res, next) => {
  try {
    const productos = await Producto.find()
    return res.status(200).json(productos)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getproductosById = async (req, res, next) => {
  try {
    const { id } = req.params
    const producto = await Producto.findById(id)
    return res.status(200).json(producto)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getproductosBycategory = async (req, res, next) => {
  try {
    const { category } = req.params
    const productos = await Producto.find({ category })
    return res.status(200).json(productos)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getProductosByPrice = async (req, res, next) => {
  try {
    const { price } = req.params
    const priceNumber = Number(price)

    if (isNaN(priceNumber)) {
      return res.status(400).json({ message: 'Precio inválido' })
    }

    const productos = await Producto.find({ price: priceNumber })
    return res.status(200).json(productos)
  } catch (error) {
    return res.status(404).json({ message: 'Error en la solicitud' })
  }
}

const postproductos = async (req, res, next) => {
  try {
    const newproducto = new Producto(req.body)

    if (req.file) {
      newproducto.image = req.file.path
    }

    if (req.user.rol === 'admin') {
      newproducto.verified = true
    } else {
      newproducto.verified = false
    }
    const productosave = await newproducto.save()
    return res.status(201).json(productosave)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const putproducto = async (req, res, next) => {
  try {
    const { id } = req.params
    const newproducto = new Producto(req.body)
    newproducto._id = id

    if (req.file) {
      newproducto.image = req.file.path
      const oldproducto = await Producto.findById(id)
      filedelete(oldproducto.image)
    }
    const updatproducto = await Equipo.findByIdAndUpdate(id, newproducto, {
      new: true
    })
    return res.status(200).json(updatproducto)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const deleteproductos = async (req, res, next) => {
  try {
    const { id } = req.params
    const productodelete = await Producto.findByIdAndDelete(id)
    filedelete(productodelete.image)
    return res.status(200).json(productodelete)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

module.exports = {
  getproductos,
  getproductosById,
  getproductosBycategory,
  getProductosByPrice,
  postproductos,
  putproducto,
  deleteproductos
}
