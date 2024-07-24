// server.js
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'https://beep-xi.vercel.app/', credentials: true })); // Adjust the origin as needed

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = "3000";
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
