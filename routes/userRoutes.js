const express = require('express');
const router = express.express(); // Correction: express.Router(); Let's use the right one!
// Use: const router = express.Router();
const pool = require('../config/db');

// Feature 1: Create a new user (POST request)
router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// NEW: GET route to fetch all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;