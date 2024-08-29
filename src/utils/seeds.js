const mongoose = require('mongoose')
const Producto = require('../api/models/productos')
const productos = require('../data/productos')

const semilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Proyecto8:AgXmxvFaoeqK05kO@cluster0.6axob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Producto.collection.drop()

    await Producto.insertMany(productos)

    await mongoose.disconnect()
  } catch (error) {
    console.log('error')
  }
}

semilla()
