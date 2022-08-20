const exphbs = require('express-handlebars');
const sequelize = require('./config/connection')

const express = require('express')


const app = express()
const PORT = process.env.PORT || 3001
const routes = require('./controllers')

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use(routes)

// app.listen(PORT, () => {
//     console.log(`API server now on port ${PORT}!`)
// });

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});