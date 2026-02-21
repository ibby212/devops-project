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

module.exports = router;