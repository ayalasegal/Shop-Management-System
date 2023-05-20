//the libaries needed
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
//the routers needed from my project
const productRouter = require('./routers/ProductRouter');
const employeeRouter = require('./routers/EmployeeRouter');
const supplierRouter = require('./routers/SupplierRouter');

//connect to mongoDB
require("./connectToMongoDB")
//creating a server
const app=express();
const port=3000;

//needed for the server to work
app.use(cors());
app.use(bodyParser.json());
app.use(productRouter);
app.use(employeeRouter);
app.use(supplierRouter);

app.get('/',(req,res)=>{res.send('mongo-node-project')})

app.listen(port,()=>console.log(`listen to port ${port}`))

