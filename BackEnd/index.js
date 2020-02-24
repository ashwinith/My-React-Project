let express = require("express");
let mongoose=require("mongoose");
let app=express();
let port=process.env.PORT || 4800;
let contactus=require("./Express API/contactusApi");
let sendmail=require("./Express API/sendmailAPI");
let forgotpassord=require("./Express API/forgotpasswordAPI");

app.use(express.json());

//connection
mongoose
        .connect("mongodb://localhost/ECommerceProjectDB",{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log("Succesfully connected to db"))
        .catch(error=>console.log(`Something went wrong ${error.message}`));

app.listen(port, ()=>console.log("Connected to port"));

app.use("/api",contactus);
app.use("/api",sendmail);
app.use("/api",forgotpassord);


// Now create Schema. Schema is nothing but a JSON object that allows us to define content of documents.
//In MongoDB collection is nothing but a table and documents are nothing but the rows and fields are columns.






