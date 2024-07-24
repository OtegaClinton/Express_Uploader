require ("dotenv").config();
const express = require("express");
const database = require("./config/database");
const router = require("./Routers/router")
const Port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/api/v1",router)


app.listen(Port,()=>{
    console.log(`server is listening to PORT: ${Port}.`)
});
