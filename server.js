const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:"./.env"});
const port = process.env.PORT;
app.listen(process.env.PORT,()=>console.log(`Listning on port number ${port}`));