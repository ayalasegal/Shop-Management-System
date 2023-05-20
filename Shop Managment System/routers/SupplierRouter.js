const express = require('express');
const supplierController = require('../controllers/SupplierController');

const router = express.Router();

router.get('/getAllSuppliers', supplierController.getAllSuppliers);
router.get('/getSupplierById/:id', supplierController.getSupplierById);
router.get('/getSupplierByName/:name', supplierController.getSupplierByName);
router.get('/getSupplierByMail/:mail', supplierController.getSupplierByMail);
router.get('/getSupplierByPhone/:phone', supplierController.getSupplierByPhone);
router.get('/getSupplierByAnotherPhone/:anotherPhone', supplierController.getSupplierByAnotherPhone);
router.get('/getSupplierByCompany/:company', supplierController.getSupplierByCompany);
router.post('/addNewSupplier', supplierController.addNewSupplier);
router.put('/updateSupplier/:id', supplierController.updateSupplier);
router.delete('/deleteSupplier/:id', supplierController.deleteSupplier);

module.exports = router;
