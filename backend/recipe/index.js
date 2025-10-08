const express = require("express");
const dotenv = require("dotenv");

const recipeRoutes = require("./routes/recipeRoutes");
const connectDB = require("./db");
const { ErrorHandle, Logger } = require("./middleware/Logger");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");
dotenv.config();

const app = express();

app.use(express.json());
// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Recipe API Documentation",
//       version: "1.0.0",
//       description: "A simple CRUD API for managing recipes",
//     },
//     servers: [
//       {
//         url: "http://localhost:5000",
//         description: "Local server",
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };
// const swaggerSpec = swaggerJsdoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(Logger);

app.use("/recipes", recipeRoutes);

app.use(ErrorHandle);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
