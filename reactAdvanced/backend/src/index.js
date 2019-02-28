require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');


const server = createServer();

//TODO use express middleware to handle cookies (JWT)
//TODO use express middleware to populate currente user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, deets => {
  console.log(`Server is now running on port http:/localhost${deets.port}`);
});