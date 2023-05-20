const mongoose =require('mongoose');
const Joi = require('joi');
// איידי
// שם
// מייל
// טלפון
// וותק
// משכורת
const EmployeeSchema = new mongoose.Schema({
    _id:String,
    name:  String,
    mail:  String,
    phone:  String,
    seniority:Number,
    salary:Number,
})

const EmployeeModel = mongoose.model('employees',EmployeeSchema)

function vaildEmployee (_bodydata){
    const JoiSchema=Joi.object({
        _id:Joi.string().required(),
        name:  Joi.string().required(),
        mail:Joi.string().required(),
        phone:Joi.string().required(),
        seniority:Joi.number().required(),
        salary:Joi.number().required(),
    })
    return JoiSchema.validate(_bodydata);
}
module.exports={EmployeeModel,vaildEmployee}
