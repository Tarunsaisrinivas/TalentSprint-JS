const express = require("express");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
const { Logger } = require("./middleware/Logger");
const { ErrorHandling } = require("./middleware/ErrorHandling");
const { GetUser } = require("./controllers/userController");
const { connectDB } = require("./utils/db");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(Logger);
app.use(express.json());
app.use("/", userRoute);
// app.use("/", GetUser);
app.use(ErrorHandling);

app.listen(PORT, () => {
  // console.log(process.env)
  connectDB();
  console.log(`Project Three is running on port http://localhost:${PORT}`);
});
