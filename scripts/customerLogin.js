import  {addcustomer,checkcuslogin} from './databasehandler.js';


function Validate(){
    let username = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let valid = false; 
   
    valid = checkcuslogin(username,password);
    
    if (valid){
        alert("login was successful");
        window.location = "./main.html";
        return false;
    }else{
        alert("login was not successful, please try again.");
    }
    

}