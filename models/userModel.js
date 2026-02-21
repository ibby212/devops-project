const pool = require('../config/db');

// Function to insert a user into the database
const createUser = async (name, email) => {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;';
    const values = [name, email];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// NEW: Function to get all users
const getUsers = async () => {
    const query = 'SELECT * FROM users;';
    const result = await pool.query(query);
    return result.rows;
};

// Make sure to export both!
module.exports = { createUser, getUsers };