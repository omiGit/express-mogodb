const AppError = require("./appError");

exports.handleCasteErrorDB = (error)=>{
    const message = `Invalid ${error.path}: ${error.value}`;
    return new AppError(message,400);
}

exports.handleDuplicateFieldErrorDB = (error)=>{
    const duplicateValue = error.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/);
    const messge = `Duplicate field value: ${duplicateValue}`;
    return new AppError(message, 400);
}

exports.handleValidationErrorDB = (error) =>{
    const values = Object.values(error.errors).map((element)=>{
        return element.message;
    })
    const message = `Invalid Input data: ${values.join('. ')}`;
    return new AppError(message, 400);
}
