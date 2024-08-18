const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

// POST /cards: Create a new card
router.post('/cards', async (req, res) => {
	try {
		const { title, description, link } = req.body;
		const newCard = new Card({ title, description, link });

		await newCard.save();
		res.status(201).json(newCard);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: error.message });
	}
});

// GET /cards/:title: Retrieve a card by title
router.get('/cards/:title', async (req, res) => {
	try {
		const card = await Card.findOne({ title: req.params.title });
		if (!card) {
			return res.status(404).json({ error: 'Card not found' });
		}

		res.json(card);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

// GET /cards: Retrieve all cards
router.get('/cards', async (req, res) => {
	try {
		const cards = await Card.find().select('title description link -_id').lean();
		res.json(cards);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;

