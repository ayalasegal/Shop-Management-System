const mongoose = require('mongoose');
const { EmployeeModel, vaildEmployee } = require('../model/EmployeeModel');

const employeeController = {
  getAllEmployees: async (req, res) => {
    try {
      const employees = await EmployeeModel.find();
      res.send(employees);
    } catch (error) {
      console.error('Error retrieving employees:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getEmployeeById: async (req, res) => {
    try {
      const employee = await EmployeeModel.findById(req.params.id);
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error retrieving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getEmployeeByName: async (req, res) => {
    try {
      const employee = await EmployeeModel.findOne({ name: req.params.name });
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error retrieving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getEmployeeByMail: async (req, res) => {
    try {
      const employee = await EmployeeModel.findOne({ mail: req.params.mail });
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error retrieving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getEmployeeByPhone: async (req, res) => {
    try {
      const employee = await EmployeeModel.findOne({ phone: req.params.phone });
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error retrieving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  addNewEmployee: async (req, res) => {
    try {
      const { error } = vaildEmployee(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const employee = new EmployeeModel(req.body);
      await employee.save();
      res.send(employee);
    } catch (error) {
      console.error('Error adding new employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const { error } = vaildEmployee(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const employee = await EmployeeModel.findByIdAndDelete(req.params.id);
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      await EmployeeModel.deleteOne(employee);
      res.send('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  getEmployeeBySalary: async (req, res) => {
    try {
      const employee = await EmployeeModel.find({ salary: req.params.salary });
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error retrieving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getEmployeeBySeniority: async (req, res) => {
    try {
      const employee = await EmployeeModel.find({ seniority: req.params.seniority });
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
      res.send(employee);
    } catch (error) {
      console.error('Error retrieving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = employeeController;
