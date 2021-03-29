exports.sendProductionError = (error, response)=>{
    if(error.isOperational){
        const {statusCode, status, message} = error;  
        response.
        status(statusCode).
        json({status, message});
    }else{
        response.
        status(500).
        json({
            status: "Error",
            message: "something went wrong"
        })
    }
}

exports.sendDevelopmentError = (error, response)=>{
        const {statusCode, status, message, stack} = error;  
        response.
        status(statusCode).
        json({status, message, error, stack});
}
