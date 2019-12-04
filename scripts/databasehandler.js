	
const sqlite3 = require('sqlite3').verbose();

  
 let a,b,c,d,e, x;
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
                  ReservationID ID,
                  Password pass
                  FROM Customer`;
      

db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {    
              
              console.log(row.name);
            });
          });


          
 export function addcustomer(name,email,roomnumber,dateRese,ReseID){


      x='INSERT INTO Customer(CustomerName,Email,RoomNumber,DatesReserved,ReservationID) VALUES('+name+','+email+','+roomnumber+','+dateRese+','+ReseID+')';
      console.log(x);
      db.run(x, [], function(err) {
      if (err) {
      return console.log(err.message);
      }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
 
 }         
 export function checkcuslogin(username,password){
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {    
      if(row.pass == password && row.email == username){
        
        console.log("logged in");
      }else{
        console.log("wrong info");
      }
      
    });
  });
}



db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});