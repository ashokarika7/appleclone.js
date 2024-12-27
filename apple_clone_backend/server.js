const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/products', async (req, res) => {
  const { collection } = req.query;
  const url = `https://www.apple.com/shop/studio-data?collection=${collection}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(3001, () => console.log('Server running..........'));
