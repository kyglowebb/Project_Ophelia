import  {addcustomer} from './databasehandler.js';


function Validate(){
    let username = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let valid = false; 
   

    for (const profile in custmoreDataBase) {
        if (username == profile.username && password == profile.username){
            valid = true;
            break;
        }
    }
    if (valid){
        alert("login was successful");
        window.location = "./main.html";
        return false;
    }else{
        alert("login was not successful, please try again.");
    }
    

}