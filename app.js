// Create Dependencies
const express = require("express");
const morgan = require("morgan");

// Create Variables for 'app' and 'PORT'
const app = express();
const PORT = 3000;

// Add Middleware
app.use(morgan('combined'));

// Add Path module
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');



// Server
app.listen(PORT, () =>{
    console.log(`The server is listening on port ${PORT}`);
});


// Updating Route Handlers(using render)
app.get('/', (request, respond) => {
    respond.render('pages/index');
});

app.get('/about', (request, respond) => {
    respond.render('pages/about')
});

app.get('/login', (request, respond) => {
    respond.render('pages/login')
});

app.get('/admin-console', (request, respond) => {
    respond.render('pages/admin')
});

app.get('/admin-console/create-book', (request, respond) => {
    respond.render('pages/create');
});


// GET routes with Params
app.get('/books/:id', (req, res) => {
    res.render('pages/books');
});

app.get('/admin-console/update-book/:id', (req, res) => {
    res.render('pages/update');

});








