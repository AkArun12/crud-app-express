

class EmployeeController{

    static createDoc=(req,res)=>{
        res.redirect("/employee")

    }

    static getAllDoc=(req,res)=>{
        res.render("index")
    }


    static editDoc=(req,res)=>{
        res.render("edit")
    }

    static updateDocById=(req,res)=>{
         res.redirect("/employee");
    }

    static deleteDocById=(req,res)=>{
         res.redirect("/employee");
    }


}


export default EmployeeController
    
