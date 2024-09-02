const express = require('express');
const router = express.Router();
const Part = require('../models/Part');

// Add a part
router.post('/part/add', async (req, res) => {
    const { name, description } = req.body;

    const part = new Part({ name, description });

    try {
        await part.save();
        res.status(201).json(part);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// List all parts
router.get('/part/list', async (req, res) => {
    try {
        const parts = await Part.find();
        res.json(parts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
