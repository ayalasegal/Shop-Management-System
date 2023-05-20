const express = require('express');
const employeeController = require('../controllers/EmployeeController');

const router = express.Router();

router.get('/getAllEmployees', employeeController.getAllEmployees);
router.get('/getEmployeeById/:id', employeeController.getEmployeeById);
router.get('/getEmployeeByName/:name', employeeController.getEmployeeByName);
router.get('/getEmployeeByMail/:mail', employeeController.getEmployeeByMail);
router.get('/getEmployeeByPhone/:phone', employeeController.getEmployeeByPhone);
router.get('/getEmployeeBySalary/:salary', employeeController.getEmployeeBySalary);
router.get('/getEmployeeBySeniority/:seniority', employeeController.getEmployeeBySeniority);
router.post('/addNewEmployee', employeeController.addNewEmployee);
router.put('/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = router;
