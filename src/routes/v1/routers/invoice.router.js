const express = require('express');
const {
    newInvoice
 } = require('../../../controllers/User.controller')

 const router = express.Router({ mergeParams: true });

 router.post('/', newInvoice);
  
 module.exports = router;