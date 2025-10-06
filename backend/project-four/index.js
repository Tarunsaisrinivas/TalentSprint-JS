const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const { Logger, ErrorHandler } = require("./middleware/Logger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(Logger);
app.use('/users', userRoute);
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
