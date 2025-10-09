const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const { Logger, ErrorHandler, AuthValidator } = require("./middleware/Logger");
const { connectDB } = require("./lib/db");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(Logger);


app.use('/users', userRoute);
app.use(ErrorHandler);
app.listen(PORT, () => {
    connectDB()
  console.log(`Server is running on port ${PORT}`);
});