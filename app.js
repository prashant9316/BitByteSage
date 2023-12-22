const express = require('express');
const app = express();



const path = require('path');
const route = require('./routes/route');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const apis = require('./api')

var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Calcutta");

const { connectDB } = require("./config/db");

connectDB()


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(upload());

app.use(express.json());
app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(cookieParser());

app.set('layout', 'partials/layout-vertical');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));


app.use('/api/admin', apis.AdminRouter)
app.use('/api/blog', apis.BlogRouter)

app.use('/', route);

app.use((err, req, res, next) => {
    let error = { ...err }
    if (error.name === 'JsonWebTokenError') {
        err.message = "please login again";
        err.statusCode = 401;
        return res.status(401).redirect('view/login');
    }
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'errors';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,

    })
});

const http = require("http").createServer(app);
http.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));