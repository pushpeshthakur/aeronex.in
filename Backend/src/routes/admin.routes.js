const express = require('express');
const adminController = require('../controllers/admin.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/login', adminController.loginAdmin);

router.post('/logout', adminController.logoutAdmin);

router.get('/', authMiddleware.authAdmin, adminController.getAllQuotes);
router.get('/quotes', authMiddleware.authAdmin, adminController.getAllQuotes);

module.exports = router;