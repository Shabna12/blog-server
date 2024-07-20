const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./Uploads')
    },
    filename: (req,file,callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const multerMiddleware = multer({
    storage
})

module.exports = multerMiddleware