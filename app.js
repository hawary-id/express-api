const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Route untuk mengambil dan memanipulasi data dari API eksternal
app.get('/manipulate-data', async (req, res) => {
  try {
    // Mengambil data dari API eksternal
    const response = await axios.get('https://randomuser.me/api?results=10&page=1');
    const users = response.data.results;

    // Memanipulasi data sesuai dengan format yang diinginkan
    const manipulatedData = users.map(user => ({
      name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
      location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
      email: user.email,
      age: user.registered.age, // Mengambil umur dari registered age
      phone: user.phone,
      cell: user.cell,
      picture: [user.picture.large, user.picture.medium, user.picture.thumbnail]
    }));

    // Mengirimkan data yang sudah dimanipulasi sebagai response
    res.json(manipulatedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
