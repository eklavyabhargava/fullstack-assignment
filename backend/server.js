const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cardRoutes = require('./routes/cards');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.get('/ping', (req, res) => {
	res.send('Server is running!');
});

app.use('/api', cardRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

