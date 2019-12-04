	
const sqlite3 = require('sqlite3').verbose();

 
// open the database
let db = new sqlite3.Database('../database/Ophelias database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Ophelias database database.');
});
 
let sql = `SELECT CustomerName name, 
                  Email email,
                  RoomNumber room,
                  DatesReserved date,
                  ReservationID ID
                  FROM Customer`;
      

db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {    
              
              console.log(row.name);
            });
          });
 function addcustomer(name,email,roomnumber,dateRese,ReseID){


  var x='INSERT INTO Customer(CustomerName,Email,RoomNumber,DatesReserved,ReservationID) VALUES("martin","email","roomnumber","dateRese","ReseID")';
  db.run(x, [], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
 
 }         
 addcustomer("martin","martinmail","6","12/3/19","1235");
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});