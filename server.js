
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'cackledb',
  password: 'cackledb',
  database: 'cackledb'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
    //var sql = "INSERT INTO Users (FullName, MobileNumber, EmailAddress, HomeAddress, Password) VALUES ('Alex', '123', 'test@mail.com', 'Bridgetown', 'bhvfhvhhhvv')";
});

//let initial_path = path.join(__dirname, "public");

const app = express();
//app.use(express.static(initial_path));

//insert record
    app.get('/', (req, res) => {
        let sql = "INSERT INTO Users (FullName, MobileNumber, EmailAddress, HomeAddress, Password) VALUES ('"+fullName+"', '"+mobileNumber+"', '"+emailAddress+"', '"+homeAddress+"', '"+userPassword+"')";
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            //res.send('record inserted');
        });
    });

/*app.get('/', (reg, res) => {
    res.sendFile(path.join(initial_path, "register.html"))
})*/

app.listen("3000", () => {
    console.log('listening.......');
});

var fullName = "bopl";
var mobileNumber = "18";
var emailAddress = "opnp";
var homeAddress = 'ojuhp';
var userPassword = "leerp";

function registration() {
    //link form
    const form = document.getElementById('register');

    //link form elements
    const name = form.elements['name'].value;
    const mobile = form.elements['mobile'].value;
    const email = form.elements['email'].value;
    const address = form.elements['address'].value;
    const userpass = form.elements['password'].value;

    //get values submitted in form
    let fullName = name.value;
    let mobileNumber = mobile.value;
    let emailAddress = email.value;
    let homeAddress = address.value;
    let userPassword = userpass.value;

    alert("Correct "+name);
}
