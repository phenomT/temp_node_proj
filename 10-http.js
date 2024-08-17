const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write("Welcome to my first node homepage");
        res.end()
    }
    if (req.url === '/about') {
        res.end("Welcome to my about page")
    }

    res.end(`<h1>Sorry, Page not found</h1>`);
    //res.end("page not found")
})

server.listen(5000);