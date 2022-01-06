const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const router = require('./routes');
const cors = require('cors');

//inicializacion
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


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
