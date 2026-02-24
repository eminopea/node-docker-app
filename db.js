const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongo:27017/testdb");
    console.log("Database MongoDB conectado");
  } catch (error) {
    console.error("Error de conexion:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
