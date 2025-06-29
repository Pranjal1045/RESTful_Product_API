const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
   const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected !!! , DB_HOST : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
