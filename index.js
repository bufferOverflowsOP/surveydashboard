const express = require('express');
const path = require('path');
const fs = require('fs'); // Import the fs module for file system operations

const hostname = '127.0.0.1'; // Localhost
const port = 3000; // Choose any desired port
const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true })); // extended: true uses the qs library

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
// Handle POST requests to '/submit'
app.post('/submit', (req, res) => {
  const postData = req.body; // Access the parsed data
  const name = "data/index.json";
  let data = JSON.parse(fs.readFileSync(name).toString());
  data[postData["name"]] = {subjects: postData["subjects"], fav: postData["fav"]}
  fs.writeFileSync(name, JSON.stringify(data));
  res.send('New data:', data);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});