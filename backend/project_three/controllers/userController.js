// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// exports.GetUser = (req, res) => {
//   let status = false;
//   if (!status) {
//     throw new Error("User Not Found");
//   }
//   res.json({
//     message: "Get User Controller",
//   });
// };

// exports.addUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ error: "Please fill all the details" });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ error: "Email already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({
//       message: "User added successfully",
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     });
//   } catch (error) {
//     console.error("Error saving user:", error);
//     res.status(500).json({ error: "Failed to add user" });
//   }
// };

// // READ ALL
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}, "-password"); 
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// };

// // READ ONE
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id, "-password");
//     if (!user) return res.status(404).json({ error: "User not found" });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch user" });
//   }
// };

// // UPDATE
// exports.updateUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const updateData = { name, email };
//     if (password) {
//       const salt = await bcrypt.genSalt(10);
//       updateData.password = await bcrypt.hash(password, salt);
//     }

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedUser) return res.status(404).json({ error: "User not found" });

//     res.json({
//       message: "User updated successfully",
//       user: { id: updatedUser._id, name: updatedUser.name, email: updatedUser.email },
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update user" });
//   }
// };

// // DELETE
// exports.deleteUser = async (req, res) => {
//   try {
//     const deleted = await User.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ error: "User not found" });
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete user" });
//   }
// };


// mongodb client code
const { getCollection } = require("../config/db");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill all the details" });
  }

  try {
    const collection = getCollection();
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await collection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User added successfully",
      user: { id: result.insertedId, name, email },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const collection = getCollection();
    const users = await collection
      .find({}, { projection: { password: 0 } })
      .toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const collection = getCollection();
    const user = await collection
      .findOne({ _id: req.params.id }, { projection: { password: 0 } });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

exports.updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const collection = getCollection();
    const updateData = { name, email };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await collection.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!updatedUser.value) return res.status(404).json({ error: "User not found" });

    res.json({
      message: "User updated successfully",
      user: { id: updatedUser.value._id, name: updatedUser.value.name, email: updatedUser.value.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const collection = getCollection();
    const deleted = await collection.findOneAndDelete({ _id: req.params.id });
    if (!deleted.value) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};  
    