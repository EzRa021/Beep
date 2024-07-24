// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, getUser, logoutUser } = require('../controllers/authContoller');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUser);
router.post('/logout', logoutUser);

module.exports = router;
