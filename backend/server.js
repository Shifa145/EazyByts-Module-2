// server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
