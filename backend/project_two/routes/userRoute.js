const express = require('express');
const router = express.Router();
// req,res are coming from controller file

router.get("/",(req,res) =>{
    res.send("Hello from Project Two - Home");
});
router.get("/users",(req,res) =>{
    res.status(200).json({
        name:"John Doe",
        age:30,
        email:"5E2yD@example.com"
    });
});
router.post('/about',(req,res) =>{
    res.send("Hello from Project Two - About Post Request");
});
router.put("/info",(req,res) =>{
    res.send("Hello from Project Two - Info Put Request");
});
router.delete("/info",(req,res) =>{
    res.send("Hello from Project Two - Info Delete Request");
});
module.exports = router
