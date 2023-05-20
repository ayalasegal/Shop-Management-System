const mongoose=require('mongoose');
const productController = require('./controllers/ProductController')
async function main(){
    //לא התחבר לי לדטה בייס עם לוקל הוסט והפתרון הזה היה בסטק-אובר-פלואו והוא עבד לי
   //זה גם משתנה בלוכלהוסט בדקתי במונגו דיבי קומפסס
    await mongoose.connect('mongodb://0.0.0.0:27017/demo')
    console.log("connect to data");

}
main().catch(err=>console.log(err));