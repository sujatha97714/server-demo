const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const printReq = (request, response, next) => {
    console.log("Printing from middleware "+ request.url);
    next();
}

app.use(printReq);

app.use(express.static('./public'));

app.post('/home', (request, response) => {
    response.end("Home result");
})

app.post('/profile', (request, response) => {
    response.end("Profile result");
})

const server = app.listen(8000, () => {
    console.log("************* Express Server started *****************");
})