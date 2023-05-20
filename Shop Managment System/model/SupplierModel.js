const mongoose = require('mongoose');
const Joi = require('joi');

const supplierSchema = new mongoose.Schema({
  _id: String,
  name: String,
  mail: String,
  phone: String,
  anotherPhone: String,
  company: String,
});

const supplierModel = mongoose.model('suppliers', supplierSchema);

function validateSupplier(_bodyData) {
  const JoiSchema = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    mail: Joi.string().required(),
    phone: Joi.string().required(),
    anotherPhone: Joi.string().required(),
    company: Joi.string().required(),
  });
  return JoiSchema.validate(_bodyData);
}

module.exports = { supplierModel, validateSupplier };
