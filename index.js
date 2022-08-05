require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const companyRoutes = require("./routes/companyRoutes")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/company", companyRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));