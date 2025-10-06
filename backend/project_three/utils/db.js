// const { mongoose } = require("mongoose");

// const connectDB = async () => {
//   try {
//     const db = await mongoose.connect(process.env.MONGO_URI, {
//       dbName: process.env.DB_NAME,
//     });
//     console.log("MongoDB connected to dbname:", db.connection.name);
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };
// module.exports = { connectDB };
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const userCollection = process.env.COLLECTION_NAME;

let _db;
let uCollection;
async function connectDB() {
  try {
    const client = await MongoClient.connect(uri);
    _db = await client.db(dbName);
    uCollection = await _db.collection(userCollection);
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
}
getDB = () => {
  return _db;
};
getCollection = () => {
  return uCollection;
};
module.exports = { connectDB, getDB, getCollection };