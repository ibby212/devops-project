const express = require('express');
const app = express();
const pool = require('./config/db'); 

app.use(express.json()); // Allows the app to receive JSON data

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'dev'} mode on port ${PORT}`);
});