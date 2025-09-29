const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const userRoute = require("./routes/userRoute");
const gameRoute = require("./routes/gameRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/game", gameRoute);
app.use("/", userRoute);

// app.get("/about",(req,res) =>{
//     res.send("Hello from Project Two - About");
// })
// app.post('/about',(req,res) =>{
//     res.send("Hello from Project Two - About Post Request");
// });
// app.put("/info",(req,res) =>{
//     res.send("Hello from Project Two - Info Put Request");
// });
// app.delete("/info",(req,res) =>{
//     res.send("Hello from Project Two - Info Delete Request");
// });
// the above routes are commented to make routes folder and work on it

app.listen(PORT, () => {
  console.log(`Project Two is running on port ${PORT}`);
});
