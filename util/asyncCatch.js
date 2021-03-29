
const asyncCatch = (controller)=>{
    return (request, response, next)=>{
        controller(request, response, next).catch((error)=>next(error));
    }
}

module.exports = asyncCatch;