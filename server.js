const express = require('express');
const app = express();

// little heroku express webserver

// Serve only the static files form the dist directory
app.use(express.static(`${__dirname}/dist`));

//default to index.html
app.use((req, res) => res.sendFile(`${__dirname}/dist/index.html`))

// Start the app
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`started on port ${port}`);
});