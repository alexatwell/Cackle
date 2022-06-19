const express = require('express')
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'cackledb',
  password: 'cackledb',
  database: 'cackledb'
});

/*//Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
});*/

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
    //var sql = "INSERT INTO Users (FullName, MobileNumber, EmailAddress, HomeAddress, Password) VALUES ('Alex', '123', 'test@mail.com', 'Bridgetown', 'bhvfhvhhhvv')";
});

const app = express();

/*//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created');
    });
});*/

//create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY id)';
    if(err) throw err;
    console.log(result);
    res.send('table created');
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});*/
