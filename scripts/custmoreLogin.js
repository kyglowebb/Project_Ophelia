function Validate(){
    let username = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let valid = false; 
   
 if(username=="BillTheScienceGuy@gmail.com"& password=="1234")
 {
  valid=true;
 }
 else
 {
  valid=false;
 }
    
    if (valid){
        alert("login was successful");
        window.location = "./main.html";
        return false;
    }else{
        alert("login was not successful, please try again.");
    }
    

}