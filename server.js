const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`started on port ${port}`);
});