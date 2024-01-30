// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const PORT = process.env.PORT || 5001;
const quoteRouter = require('./routes/quote.router.js');

// Allow req.body
// Alternative to body parser when using Axios
app.use(express.json());

// ??? Look here for files 👍bug#9
app.use(express.static('server/public'));

app.use('/quotes', quoteRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
