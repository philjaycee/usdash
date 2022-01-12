const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const { PORT = 8000} = process.env

// View Engine 
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayout)

app.use(express.urlencoded({extended:flase}))
app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})