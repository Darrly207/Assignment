import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Set strictQuery outside the connectDB function
mongoose.set("strictQuery", false);

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env['MONGODB_URI'];
  console.log("DB_URI:", process.env['MONGODB_URI']);


    if (!uri) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables"
      );
    }

    console.log("Attempting to connect with URI:", uri);

    const conn = await mongoose.connect(uri, {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Type assertion for error
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`Error: ${error}`);
    }
    process.exit(1);
  }
};

export default connectDB;
