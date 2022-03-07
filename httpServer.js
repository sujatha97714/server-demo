const http = require('http');
const fs = require('fs');
const path = require('path');

const requestListener = (request, response) => {
    console.log(request.url);
    switch(request.url) {
        case '/home':
            let data = fs.readFileSync('./public/home.html');
            response.end(data); break;
        case '/profile':
            response.end("Data from http server for profile"); break;
        case '/checkout':
            response.end("Data from http server for checkout"); break;
        default: 
            response.end("Data from http server");
    }
}

const server = http.createServer(requestListener);

server.on('error', (err) => {
    console.log("Error in server " + err);
})

server.listen(8000, () => {
    console.log("************* Server started *****************");
});