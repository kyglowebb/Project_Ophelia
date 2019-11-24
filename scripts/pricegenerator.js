

import  bookingformation from './bookinginformation.js';

//starts here
   class pricegenerator
{
    

    //takes in the booking information object 
   constructor ( _reservation, _baserate,_expectedAvgOccupancy)
   {
       //type field var
       this.type = _reservation.type();
       //base rate to charge for rooms per night
       var baserate;
       //initalizing the baserate for the price gen
       baserate = _baserate;
       
       console.log(  _reservation.type());
       
       //changes the rate discount if any based on the type of reservation
            switch (_reservation.type())
       {
           case "Prepaid":
              _reservation.billr= baserate * 0.75;
               break;
           case "sixtydays":
               _reservation.billr= baserate * 0.85;
               break;
           case "Conventional":
               _reservation.billr = baserate;
               break;
           case "Incentive":
               if(_expectedAvgOccupancy < 0.6){
                 _reservation.billr = baserate * .8;
               }else{
                  _reservation.billr = baserate;
               }
               break;
       }
      }
      //allows managers to change the base price 
      setbaserate(_brate){
        return this.baserate = _brate;
      }
     fetchPrice(){
         return this.baserate;
     }
   }
//ends here





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


