require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

app.use('/places', require('./controllers/places.js'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

const start = async () => {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to db')
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    })
}

start();