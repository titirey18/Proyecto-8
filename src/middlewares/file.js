const multer = require('multer')
const { createCloudinaryStorage } = require('../utils/cloudinaryconfig')

const productStorage = createCloudinaryStorage('Products')
const uploadProduct = multer({ storage: productStorage })

const listStorage = createCloudinaryStorage('Lists')
const uploadList = multer({ storage: listStorage })

module.exports = { uploadProduct, uploadList }
