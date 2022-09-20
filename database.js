const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',            // Replace with your host name
  user: 'root',                 // Replace with your database username
  password: '12345',            // Replace with your database password
  database: 'demoapp'     // Replace with your database Name
}); 


// Establishing Connection 
conn.connect(function(err) {
  if (err){
    console.log("Database not conneted");
  }
  else{
    console.log('Database is connected successfully!');
  }
});

module.exports = conn;
