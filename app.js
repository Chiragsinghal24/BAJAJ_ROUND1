const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// POST /bfhl route
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Input validation
  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid input',
    });
  }

  // Extract user information
  const user_id = 'chiragsinghal';
  const email = 'chirag.singhal2021@vitstudent.ac.in';
  const roll_number = '21BKT0181';

  // Separate numbers and alphabets
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));

  // Find the highest lowercase alphabet
  const lowerAlphabets = alphabets.filter(
    item => item === item.toLowerCase() && item.match(/[a-z]/)
  );
  const highestLowercaseAlphabet = lowerAlphabets.sort().reverse()[0] || '';

  // Prepare the response
  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
  });
});

// GET /bfhl route
app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
