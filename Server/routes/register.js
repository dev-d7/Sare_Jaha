const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Make sure the path is correct

const router = express.Router();

// POST route for registration
router.post('/', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

//   // Validation checks
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: 'Please fill all fields' });
//   }

//   // Passwords match check
//   if (password !== cpassword) {
//     return res.status(422).json({ error: 'Passwords do not match' });
//   }

//   // Check if user already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(422).json({ error: 'User already exists' });
//   }

//   // Hash password and save the user
//   const hashedPassword = await bcrypt.hash(password, 12);
//   const user = new User({ name, email, phone, work, password: hashedPassword, cpassword: hashedPassword });

  try {
    await user.save();
    res.status(201).json({ status: 'success', message: 'Registration successful' });
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
