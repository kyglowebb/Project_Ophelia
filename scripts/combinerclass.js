import  bookingformation from './bookinginformation.js';
import pricegenerator from './pricegenerator.js'

//running it & testing 
let _ID = 1000;


_name = document.getElementById("name").value;

_ID++;
let rese = new bookingformation(_ID,_type,_name,_email,_datereserved, _Arrivaldate,_enddate,roomnumber );

let gen = new pricegenerator(rese, 150, 0.5);
//let roomreseveravtioin = new (rese);


gen.setbaserate(220);

console.log(rese.billrate());
console.log(rese.firstname);
console.log(rese.Lastname);
console.log(rese.datereserverd);
console.log(rese.Arrivaldate);
console.log(gen.baserate);