const express = require('express');
const { addAdmin, removeAdmin } = require('../controller/Admin');
const router = express.Router();


router.post('/add-admin', addAdmin)
router.post('/remove-admin', removeAdmin)

module.exports = router;