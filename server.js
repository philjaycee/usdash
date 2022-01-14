const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const { PORT = 8000} = process.env

// View Engine 
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(expressLayout)
app.set('layout','layouts/default')
/*
app.use('layout', 'views/layouts/default')
*/

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const router = require('./router/index')
app.use(router)


const setDefault = (req, res, next) => {
    res.locals.contentName = "Default"
    next()}


app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})
//app.get('/', (req,res)=> {


//})

//Terakhir sampe partials dashboard 
//Nanti kerjain authentication layout
