import  bookingformation from './bookinginformation.js';
import pricegenerator from './pricegenerator.js'

//running it & testing 

let rese = new bookingformation("Incentive","martin","Phillip","10/24/2019","11/12/2019","1/1/2020");

let gen = new pricegenerator(rese, 150, 0.5);
//let roomreseveravtioin = new (rese);


gen.setbaserate(220);

console.log(rese.billrate());
console.log(rese.firstname);
console.log(rese.Lastname);
console.log(rese.datereserverd);
console.log(rese.Arrivaldate);
console.log(gen.baserate);