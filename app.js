const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const AppError = require("./util/error/appError");
app.use(express.json());
const demo = require('./routes/demo');
app.use('/v1/demo',demo);

app.all("*",(request,response,next)=>{
    const error = new AppError(`Invalid route path "${request.originalUrl}"`,404);
    next(error);
})
//error middleware
app.use(errorMiddleware);

module.exports = app;
