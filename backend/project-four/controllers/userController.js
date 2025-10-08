const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
exports.getUser = async (req, res) => {
  console.log(`Req url: ${req.url} Method: ${req.method}`);
  const users = await userSchema.find({}, "-password");
  if (!users)
    return res
      .status(404)
      .json({ error: "User not found or no users in the db" });
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill all the details" });
  }
  let hashpwd = bcrypt.hashSync(password, 12);
  const existingUser = await userSchema.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: "Email already exists" });
  } else {
    const newUser = await new userSchema({
      name,
      email,
      password: hashpwd,
    });
    const { _id } = await newUser.save();
    res.json({ message: "User added successfully",email,password,_id });
  }

};

exports.deleteOneUser = async (req, res) => {
  const { email } = req.body;
  const user = await userSchema.findOneAndDelete({ email });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User deleted successfully" });
};


exports.deleteUsers = async(req,res)=>{
  const users = await userSchema.deleteMany();
  if(!users) return res.status(404).json({error: "Users not found"});
  res.json({message: "Users deleted successfully"});
}

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = userSchema.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });
  let isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ message: "User logged in successfully" });
}

exports.updateUser = (req,res) =>{
  const { email,name,password } = req.body;
  const user = userSchema.findOneAndUpdate({ email });
  if(password) user.password = bcrypt.hashSync(password, 12);
  
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User updated successfully" })
}
