import employeeModel from "../models/Employee.js";
class EmployeeController {
  // Create documents
  static createDoc = async (req, res) => {
    // console.log("create doc post method....")

    try {
      const { name, age, salary } = req.body;

      const doc = new employeeModel({
        name: name,
        age: age,
        salary: salary,
      });

      //    saving document

      const result = await doc.save();
      // console.log(result)

      res.redirect("/employee");
    } catch (err) {
      console.log(err);
    }
  };

  // Acccess all documents

  static getAllDoc = async (req, res) => {
    try {
      const result = await employeeModel.find();

      res.render("index", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  // Edit form document
  static editDoc = async (req, res) => {
    // console.log(req.params.id)

    try {
      const result = await employeeModel.findById(req.params.id);
      //   console.log(result)

      res.render("edit", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  // Update document

  static updateDocById = async (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    try {
      const result = await employeeModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
    } catch (err) {
      console.log(err);
    }

    res.redirect("/employee");
  };
  

  //   delete document
  static deleteDocById = async (req, res) => {
    try {
      const result = await employeeModel.findByIdAndDelete(req.params.id);
      res.redirect("/employee");
    } catch (err) {
      console.log(err);
    }
  };
}

export default EmployeeController;
