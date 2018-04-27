var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;