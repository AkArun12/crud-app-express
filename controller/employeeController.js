
import employeeModel from "../models/Employee.js"
class EmployeeController{


// Create documents
    static createDoc=(req,res)=>{
        res.redirect('/employee')
    }




    

// Acccess al documents

    static getAllDoc=async (req,res)=>{
        try{

            const result=await employeeModel.find()
       
             res.render("index", {data:result}) 
        }
        catch(err){
            console.log(err)
        }

       

    }

   
// Edit document
    static editDoc=(req,res)=>{
        res.render("edit")
    }


// Update document

    static updateDocById=(req,res)=>{
         res.redirect("/employee");
    }

    static deleteDocById=(req,res)=>{
         res.redirect("/employee");
    }


}


export default EmployeeController
    
