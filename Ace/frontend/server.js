const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')))

//Serve the index.html file for the root route

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
