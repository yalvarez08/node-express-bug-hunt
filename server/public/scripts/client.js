console.log('script sourced.');


function getQuotes() {
    // Axios GET request (http request for information from the server)
    axios({
        method: 'GET',
        url: '/quotes' //👍bug#6
    }).then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';
        let i = 0;
        // ??? Loop over array of quotes and append to the content div 👍bug#4
        
        for(let quote of quotesFromServer) {
            contentDiv.innerHTML += `
                <p>
                    "${quote.quote}" -${quote.author}
                </p>
            `;
            i += 1;
        }
        
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// Call the function
getQuotes();

function submitForm(event) {
    // stop page from refreshing
    event.preventDefault();
    console.log('In submitForm function');
    let quote = document.querySelector('#quoteInput').value;
    let author = document.querySelector('#authorInput').value;
    console.log('Inputs ', quote, author);
    let quoteForServer = {
        quote: quote,
        author: author,
    };
    // ??? 👍bug#5
    axios({
        method: 'POST',
        url: '/quotes', 
        data: quoteForServer
    }).then((response) => {
        console.log(response);
        getQuotes();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    });
}