const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/manipulate-data', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api?results=10&page=1');
    const users = response.data.results;

    const manipulatedData = users.map(user => ({
      name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
      location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
      email: user.email,
      age: user.registered.age,
      phone: user.phone,
      cell: user.cell,
      picture: [user.picture.large, user.picture.medium, user.picture.thumbnail]
    }));

    res.json(manipulatedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
