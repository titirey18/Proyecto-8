const mongoose = require('mongoose')

const listaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, //Ejemplo: Compras del Sabado
    image: { type: String, required: true }, //Ejemplo: carrito de supermercado
    productos: [
      { type: mongoose.Types.ObjectId, ref: 'productos', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'lista'
  }
)

const Lista = mongoose.model('Lista', listaSchema)
module.exports = Lista
