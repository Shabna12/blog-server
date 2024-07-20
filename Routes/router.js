const express = require('express')
const userController = require('../Controllers/userController')
const contentController = require('../Controllers/contentController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerMiddleware = require('../Middleware/multerMiddleware')


const router = new express.Router()

//register - POST - http://localhost:3000/register
router.post('/register',userController.registerController)

//login - http://localhost:3000/login
router.post('/login',userController.loginController)

//add content
router.post('/featuredexplore/add',jwtMiddleware,multerMiddleware.single('contentImg'),contentController.addContentController)

//get - allContents
router.get('/all-contents',jwtMiddleware,contentController.allContentsController)

//update
router.put('/featuredexplore/:cid/update',jwtMiddleware,multerMiddleware.single('contentImg'),contentController.updateContentController)

//remove
router.delete('/featuredexplore/:cid/delete',jwtMiddleware,contentController.deleteContentController)


module.exports = router