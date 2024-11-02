const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Frontend running at http://127.0.0.1:${PORT}`);
});
