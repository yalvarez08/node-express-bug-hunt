# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

TODO: Add the error here followed by the line of code you fixed.

### Bug 1

`TypeError: Router.use() requires a middleware function but got a Object`

The server was not starting up because it was not receiving module import from quote.router.js file.
The quote.router.js was missing the module export declaration. To fix this issue, I included `module.exports = router;` 
on line 28 of the file. 
### Bug 2

`List of quotes written as "let quoteList = {};"`

In quote.router.js, the variable "quoteList" was set to equal an object. Instead it should be set to an (empty) array because arrays can accept several objects .Otherwise, pushing new quotes into it won't work when trying to do so later.

### Bug 3

`router.get('/quotes', (req, res) =>...`

The path in the router.get was '/quotes'; whereas it should be just '/'. I just deleted the word quotes so that the path was accurate.

### Bug 4

`for(let quote of quotesFromServer) {
            contentDiv.innerHTML += `
                <p>
                    "${quote.quote}" -${quote.author}
                </p>
            `;
            i += 1;
        }`
The code in the <p> was incorrect. The object property name did not reflect that of the property name in the object's (quoteForServer) name. These two need to match in order for the requests to understand what they are referring to. To correct this, I changed `"${quote.text}" -${quote.author}` to `"${quote.quote}" -${quote.author}`.

### Bug 5

`getQuote(); in line 55 of client.js`

The getQuotes() function was initially missing 's' at the end in the .then (response) of the axios POST request.

### Bug 6

`url: '/quotes}' in line 8 of client.js`

There was a random curly brace in the url path of the axios GET request. I deleted the curly brace so that the url path is just '/quotes'.

### Bug 7

`quotesList.push(quoteToAdd); in line 30 of quote.router.js`

The quote list array is named 'quoteList', not 'quotesList'. I corrected the spelling here.

### Bug 8

` <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> `

The axios url sourced in the html file was included underneath the sourced in client.js file. I just reversed the order.

### Bug 9

`app.use(express.static('public'));`

The files would not be located this way before the path is incorrect. The public folder is within the server folder; therefore, it needs to be rewritten like --> `app.use(express.static('server/public'));`

### Bug 10

`const PORT = process.env.PORT || 5007;`

The comments above this line in the server.js stated to use port 5001. I just changed the port number to 5001 instead.

## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
