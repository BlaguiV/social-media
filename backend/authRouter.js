const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require("./Middleware/authMiddleware")
const roleMiddleware = require("./Middleware/roleMiddleware")

router.post('/registration', [check("username", "Username cannot be empty").notEmpty(), check("password", "Password must be more than 8 characters").isLength({ min: 8 }), check('email', "Invalid email format").isEmail()], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router