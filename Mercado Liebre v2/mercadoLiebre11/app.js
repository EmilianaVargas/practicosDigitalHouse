const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const mainRouter = require('./routes/main');
//const productsRouter = require('./routes/products');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*  el cliente espera contar con la posibilidad de acceso a las siguientes URL's:
● /
● /product/detail/id/category
¡Atención! Las anteriores deberán ser direcciones de acceso a la aplicación desde el
navegador. Par el segundo endpoint, id será número obligatorio y category será un
string obligatorio.
*/


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/', mainRouter);
//app.use('/product/detail/id/category',productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
