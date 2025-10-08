// packages
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const keerthi = require("./routes/recipeRoutes");
const { Logger, ErrorHandle } = require("./middlewares/Loggers");
dotenv.config();
// packages end

// express or ports
const jasmin = express();
const PORT = process.env.PORT || 3000;
jasmin.use(express.json()); // to get details from body
jasmin.use(Logger);
jasmin.use("/recipe", keerthi);
jasmin.use(ErrorHandle);
connectDB().then(() => {
  jasmin.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
