const { filedelete } = require('../../utils/filedelete')
const Lista = require('../models/listas')

const getlista = async (req, res, next) => {
  try {
    const listas = await Lista.find()
    return res.status(200).json(listas)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getlistasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const lista = await Lista.findById(id)
    return res.status(200).json(lista)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const postlista = async (req, res, next) => {
  try {
    const newlista = new Lista(req.body)
    if (req.file) {
      newlista.image = req.file.path
    }
    const listasave = await newlista.save()
    return res.status(201).json(listasave)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const putlista = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldlista = await Lista.findById(id)
    const newlista = new Lista(req.body)
    newlista._id = oldlista._id
    newlista.productos = [...oldlista.productos, ...req.body.productos]

    if (req.file) {
      newlista.image = req.file.path
      filedelete(oldlista.image)
    }

    const updatelista = await Lista.findByIdAndUpdate(id, newlista, {
      new: true
    })
    return res.status(200).json(updatelista)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const deletelista = async (req, res, next) => {
  try {
    const { id } = req.params
    const listadelete = await Lista.findByIdAndDelete(id)
    filedelete(listadelete.image)
    return res.status(200).json(listadelete)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

module.exports = {
  getlista,
  getlistasById,
  postlista,
  putlista,
  deletelista
}
