import mongoose from "mongoose";


// defining schema

const employeeSchema=new mongoose.Schema({

    name:{type:String ,required:true , trim:true},
    age:{type:Number, required:true ,min:18, max:60},
    salary:{type:mongoose.Decimal128 ,required:true, validate:(value)=>value>=10000 }

})


// Comiling model
const employeeModel=mongoose.model('employee',employeeSchema)


export default employeeModel;