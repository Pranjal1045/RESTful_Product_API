const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./Routes/productRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit : "16kb" }));

// Routes
app.use('/api/products', productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
   console.log("ERROR", err);
   throw err;
});
