const express = require('express')
const cors = require('cors');

const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('dev'))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact-db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
 db.on('error', (err) => {
   console.log(err)
 })
 db.once('open', () => {
   console.log('database connected')
 })

const contactRoute = require('./api/routes/contact')

// app.use((req, res, next) => {
//     console.log('I am middleware function')
//     next()
// })

app.use('/api/contacts', contactRoute)
app.use('/api/contacts/:id', contactRoute)

app.get('/', (req, res) => {
  res.send('Hello World sh!')
})
app.get('/posts', (req, res) => {
    res.send('hello tahmina')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})