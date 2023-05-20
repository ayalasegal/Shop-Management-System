const mongoose =require('mongoose');
const Joi = require('joi');

const productSchema = new mongoose.Schema({
    _id:String,
    name:  String,
    cost:Number,
    stack:Number,
    category:String,
    company:String

})

const productModel = mongoose.model('products',productSchema)

function vaildproduct (_bodydata){
    const JoiSchema=Joi.object({
        _id:Joi.string().required(),
        name:  Joi.string().required(),
        cost:Joi.number().required(),
        stack:Joi.number().required(),
        category:Joi.string().required(),
        company:Joi.string().required()

    })
    return JoiSchema.validate(_bodydata);
}
module.exports={productModel,vaildproduct}
