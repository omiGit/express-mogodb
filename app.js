const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoDBSanitize = require('express-mongo-sanitize');
const httpParameterPolution = require('hpp');
const app = express();
const errorMiddleware = require('./middleware/error');
const AppError = require("./util/error/appError");
app.use(express.json({limit: "10kb"}));
app.use(helmet());
app.use(xss());
app.use(mongoDBSanitize());
app.use(httpParameterPolution({
    whitelist:[]
}))
const demo = require('./routes/demo');
app.use('/v1/demo',demo);

app.all("*",(request,response,next)=>{
    const error = new AppError(`Invalid route path "${request.originalUrl}"`,404);
    next(error);
})
//error middleware
app.use(errorMiddleware);

module.exports = app;
