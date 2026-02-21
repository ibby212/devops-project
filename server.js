const express = require('express');
const app = express();
const pool = require('./config/db'); 
const userRoutes = require('./routes/userRoutes'); // <-- Import the routes

app.use(express.json()); 

// Use the routes
app.use('/api', userRoutes); // <-- Mount them on /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'dev'} mode on port ${PORT}`);
});