	
const sqlite3 = require('sqlite3').verbose();
let sql = `SELECT CustomerName name, 
                  Email email,
                  RoomNumber room,
                  DatesReserved date,
                  ReservationID ID,
                  Password pass
                  FROM Customer`;

// open the database
let db = new sqlite3.Database('../database/Ophelias database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Ophelias database database.');
});

          
  function addcustomer(name,email,roomnumber,dateRese,ReseID){    
      let x ='INSERT INTO Customer(CustomerName,Email,RoomNumber,DatesReserved,ReservationID) VALUES('+name+','+email+','+roomnumber+','+dateRese+','+ReseID+')';
       db.run(x, [], function(err) {
      if (err) {
          return console.log(err.message);
      }
        // get the last insert id
       console.log(`A row has been inserted with rowid ${this.lastID}`);
    }); 
  }         
 
  function checkcuslogin(username,password){      

      db.all(sql, [], (err, rows) => {
          if (err) {
                    throw err;
          }
          rows.forEach((row) => {    
                if(row.pass == password && row.email == username){
                    return true;
                    console.log("logged in");
                }else{
                     return false;
                     console.log("wrong info");
               }      
          });
        });
  }

 function deleteCustomre(email){
    db.run(`DELETE FROM Customer WHERE Email=?`, email, function(err) {
      if (err) {
        return console.error(err.message);
      }
        console.log(`Row(s) deleted ${this.changes}`);
      });
}

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});