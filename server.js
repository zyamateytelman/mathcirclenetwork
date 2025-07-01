const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mathcircles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const circleSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});
const Circle = mongoose.model('Circle', circleSchema);

// Register a new math circle
app.post('/api/circles', async (req, res) => {
  try {
    const { name, location, email } = req.body;
    if (!name || !location || !email) return res.status(400).json({ error: 'Missing fields' });
    const circle = new Circle({ name, location, email });
    await circle.save();
    res.status(201).json({ message: 'Circle registered!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get the number of circles
app.get('/api/circles/count', async (req, res) => {
  try {
    const count = await Circle.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Placeholder for contact form
app.post('/api/contact', (req, res) => {
  // TODO: Implement email sending or store contact requests
  res.json({ message: 'Contact form received (not implemented).' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 