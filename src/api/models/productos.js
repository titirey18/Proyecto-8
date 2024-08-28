const mongoose = require('mongoose')

const productosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    Price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['verdura', 'carne', 'pezcado', 'snakcs']
    },
    verified: { type: Boolean, required: true, default: false }
  },

  {
    timestamps: true,
    collection: 'productos'
  }
)

const Producto = mongoose.model('productos', productosSchema, 'productos')
module.exports = Producto
