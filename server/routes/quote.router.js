const express = require('express');
const router = express.Router();

// ??? List of quotes 👍bug#2
let quoteList = [];
//     {
//         quote: 'here is a good quote',
//         author: 'Martha Stewart'
//     },
//     {
//         quote: 'here is another really good quote',
//         author: 'Oprah Winfrey'
//     }
// ];

// ??? GET request returns information 👍bug#3
router.get('/', (req, res) => {
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(quoteList);
});

// ??? POST request save user input 👍bug#7
router.post('/', (req, res) => {
    console.log('POST Request made for /quotes');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd);
    res.sendStatus(201);
});

// PUT request update information

// ???  👍bug#1
module.exports = router;