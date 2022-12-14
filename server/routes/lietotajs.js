const express = require("express");
const router = express.Router();

const { register, login, logout, getLoggedInUser } = require('../controllers/lietotajs')

const { userRegisterValidator, userById } = require("../middlewares/lietotajs");
const { verifyToken, isAdmin } = require("../middlewares/auth");
// api routes
router.post("/register", userRegisterValidator, register);
router.post('/login', login)
router.get("/logout", logout)
router.get('/user', verifyToken, userById, getLoggedInUser, isAdmin)
module.exports = router;