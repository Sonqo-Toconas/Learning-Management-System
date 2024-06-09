const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session')

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "Secreto" }))

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

const indexRoutes = require('./src/routes/indexRoutes');

app.use('/', indexRoutes);

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto http://localhost:3030');
});