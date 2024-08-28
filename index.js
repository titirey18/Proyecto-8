require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const userRoutes = require('./src/api/routes/user')
const listasRouter = require('./src/api/routes/listas')
const productoRouter = require('./src/api/routes/productos')
const cloudinary = require('cloudinary').v2

const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(express.json())
app.use(cors())

connectDB()
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/productos', productoRouter)
app.use('/api/v1/lista', listasRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('return not found')
})

app.listen(3000, () => {
  console.log('servidor levantado en http://localhost:3000')
})
