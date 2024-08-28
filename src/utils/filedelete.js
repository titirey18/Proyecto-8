const cloudinary = require('cloudinary').v2

const filedelete = (url) => {
  const imagesplit = url.split('/')

  const foldername = imagesplit.at(-2)
  const filename = imagesplit.at(-1).split('.'[0])

  cloudinary.uploader.destroy(`${foldername}/${filename}`, () => {
    console.log('eliminado')
  })
}

module.exports = { filedelete }
