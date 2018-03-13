const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const index = require('./router/index')
const port = process.env.port || 3000;

// Set up my views folder.
app.set('views', path.join(__dirname, 'views'))

// Set up view engine
// Do I want to use ejs or learn react or vue?
app.set('view engine', 'ejs')

// Set up json reader
app.use(bodyParser.json())

// Set up middleware
app.use(bodyParser.urlencoded({extended: false}))

// Set up static files
app.use(express.static(path.join(__dirname, 'public')))

// Set up main page
app.use('/', index)

app.listen(port)

module.exports = app


// Listen for the server on port