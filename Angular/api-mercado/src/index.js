const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const router = require('./routes');

//inicializacion
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
//app.use(require('./routes/index'));
app.use('/api/login', require('./routes/login'));
app.use('/api/inicio', require('./routes/inicio'));
app.use('/api/registro', require('./routes/registro'));
app.use('/api/carrito', require('./routes/carrito'));
app.use('/api/cuenta', require('./routes/cuenta'));
app.use('/api/abc-productos', require('./routes/abc-productos'));
app.use('/api/producto', require('./routes/producto'));
app.use('/api/ganancia', require('./routes/ganancia'));
app.use('/api/venta', require('./routes/venta'));

//Start server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
