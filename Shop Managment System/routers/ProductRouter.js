const express=require('express');
const productController=require('../controllers/ProductController')

const router=express.Router();


router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductById/:id', productController.getProductById)
router.get('/getProductByName/:name', productController.getProductByName)
router.get('/getProductByCost/:cost', productController.getProductByCost)
router.get('/getProductByCategory/:category', productController.getProductByCategory)
router.get('/getProductByStack/:stack', productController.getProductByStack)
router.get('/getProductByCompany/:company', productController.getProductByCompany)
router.post('/addNewProduct',productController.addNewProduct)
router.put('/updateProduct/:id',productController.updateProduct)
router.delete('/deleteProduct/:id',productController.deleteProduct)


module.exports=router
