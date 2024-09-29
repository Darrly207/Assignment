const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const routes = require("./routers/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Define routes
routes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
