const mongoose = require('mongoose');

const connectDB = () => {
	const MONGODB_URI = process.env.MONGODB_URI;
	mongoose
		.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log('Connected to MongoDB'))
		.catch(error => console.log('Failed to connect to MongoDB:\n', error));
};

module.exports = connectDB;

