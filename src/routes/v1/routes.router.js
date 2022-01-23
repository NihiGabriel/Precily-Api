const express = require('express');


const router = express.Router();

const invoiceRoutes = require('./routers/invoice.router')

router.use('/invoices', invoiceRoutes);

module.exports = router;
