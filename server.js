const path = require('path');
const express = require('express')
const sequelize = require('./config/connection');

// const Artist = require('./models/Artist')
// const Genre = require('./models/Genre')
// const User = require('./models/User')

const models = require('./models')


const PORT = process.env.PORT || 3001
const app = express()
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/', htmlRoutes)

sequelize.sync({ force: true }).then(() => {    app.listen(PORT, () => console.log('Now listening'));   });