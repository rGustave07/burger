const mysql = require('mysql');

let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect( function(err){
    if (err){
      console.error("Error:" + err.stack);
      return;
    }
    console.log("Successfully connected", connection.threadId);
})

module.exports = connection;
