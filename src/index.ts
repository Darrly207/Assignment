// src/index.ts
import express from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import apiRoutes from './routers/api/index';
import viewRoutes from './routers/views/index';
dotenv.config(); // Load environment variables

const app = express();
const PORT =  3001;

// Middleware to parse JSON
app.use(express.json());

// CORS configuration
const corsOptions: CorsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Define routes
viewRoutes(app);
apiRoutes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
