const express= require('express');
const router= express.Router();
const UserController= require('../controllers/user')
const isUserAuthenticated = require('../middleware/isUserAuthenticated')


//user apis
router.post('/auth/register',UserController.signup)
router.post('/auth/login',UserController.login)


//middleware
router.all('/api/*',isUserAuthenticated)
router.get('/api/get_user_data',UserController.getUserData)

module.exports=router
