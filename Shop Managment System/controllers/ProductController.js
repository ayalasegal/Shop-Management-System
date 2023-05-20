const mongoose = require('mongoose');
const { productModel, vaildproduct } = require('../model/productModel');

const productController = {
  
  getAllProducts: async (req, res) => {
    try {
      const products = await productModel.find();
      res.send(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProductByName: async (req, res) => {
    try {
      const product = await productModel.findOne({ name: req.params.name });
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProductByCost: async (req, res) => {
    try {
      const product = await productModel.find({ cost: req.params.cost });
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  getProductByStack: async (req, res) => {
    try {
      const product = await productModel.find({ stack: req.params.stack });
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  getProductByCategory: async (req, res) => {
    try {
      const product = await productModel.find({ category: req.params.category });
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  getProductByCompany: async (req, res) => {
    try {
      const product = await productModel.find({ company: req.params.company });
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  addNewProduct: async (req, res) => {
    try {
      const { error } = vaildproduct(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const product = new productModel(req.body);
      await product.save();
      res.send(product);
    } catch (error) {
      console.error('Error adding new product:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { error } = vaildproduct(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).send('product not found');
      }
      res.send(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await productModel.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send('product not found');
      }
      await productModel.deleteOne(product)
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = productController;
