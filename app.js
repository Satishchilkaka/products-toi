
const express = require('express')
const path = require('path');

const bodyParser = require('body-parser');

const errorHandle = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopAdminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', shopAdminRoute);
app.use(shopRoute);

app.use(errorHandle.notFound);

app.listen(3000);
