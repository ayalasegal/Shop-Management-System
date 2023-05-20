const mongoose = require('mongoose');
const { supplierModel, validateSupplier } = require('../model/SupplierModel');

const supplierController = {
  getAllSuppliers: async (req, res) => {
    try {
      const suppliers = await supplierModel.find();
      res.send(suppliers);
    } catch (error) {
      console.error('Error retrieving suppliers:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getSupplierById: async (req, res) => {
    try {
      const supplier = await supplierModel.findById(req.params.id);
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error retrieving supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getSupplierByName: async (req, res) => {
    try {
      const supplier = await supplierModel.findOne({ name: req.params.name });
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error retrieving supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getSupplierByMail: async (req, res) => {
    try {
      const supplier = await supplierModel.findOne({ mail: req.params.mail });
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error retrieving supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getSupplierByPhone: async (req, res) => {
    try {
      const supplier = await supplierModel.findOne({ phone: req.params.phone });
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error retrieving supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getSupplierByAnotherPhone: async (req, res) => {
    try {
      const supplier = await supplierModel.findOne({ anotherPhone: req.params.anotherPhone });
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error retrieving supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getSupplierByCompany: async (req, res) => {
    try {
      const supplier = await supplierModel.find({ company: req.params.company });
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error retrieving supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  addNewSupplier: async (req, res) => {
    try {
      const { error } = validateSupplier(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const supplier = new supplierModel(req.body);
      await supplier.save();
      res.send(supplier);
    } catch (error) {
      console.error('Error adding new supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  updateSupplier: async (req, res) => {
    try {
      const { error } = validateSupplier(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const supplier = await supplierModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      res.send(supplier);
    } catch (error) {
      console.error('Error updating supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteSupplier: async (req, res) => {
    try {
      const supplier = await supplierModel.findByIdAndDelete(req.params.id);
      if (!supplier) {
        return res.status(404).send('Supplier not found');
      }
      await supplierModel.deleteOne(supplier);
      res.send('Supplier deleted successfully');
    } catch (error) {
      console.error('Error deleting supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = supplierController;
