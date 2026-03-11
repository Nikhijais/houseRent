const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const houseRoutes = require("./routes/houseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/houserent")
.then(()=>console.log("MongoDB Connected"));

app.use("/api/houses", houseRoutes);

app.get("/", (req,res)=>{
res.send("House Rent Backend Running");
});

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});