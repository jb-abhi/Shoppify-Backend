const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected Successfully"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({
  extended:true
  }));
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


app.listen(process.env.port || 5000, () => {
  console.log("Server is listening");
});
