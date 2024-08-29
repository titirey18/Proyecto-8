const jwt = require('jsonwebtoken')

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET no está definido en las variables de entorno')
}

const generateSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1y' })
}

const verifyJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    throw new Error('Token inválido o expirado')
  }
}

module.exports = { generateSign, verifyJWT }
