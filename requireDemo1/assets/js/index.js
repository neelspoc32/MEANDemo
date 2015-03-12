var server = require('./server');
var dbConnection = require('./dbConnection');
server.start();
dbConnection.dbConnection();
