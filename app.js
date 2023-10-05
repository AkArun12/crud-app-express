import express from "express";
import connectDB from "./db/connectdb.js";
import {join} from 'path'
import web from './routes/web.js'

const app = express();
const port = process.env.PORT || "3000";

const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017";



// Databse connection 
connectDB(DATABASE_URL)

// when we want ot get data enterred in form * urlencoded is builtin middleware
app.use(express.urlencoded({extended:false}))


// Static files- publicfolder (we can use css and js now)
app.use('/employee',express.static(join(process.cwd(),"public")))
app.use('/employee/edit',express.static(join(process.cwd(),"public")))

// Set template engine
app.set("views","./views")
app.set("view engine", "ejs")


// Load routes
app.use('/employee',web)







app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
