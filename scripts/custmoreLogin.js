


function Validate(){
    let username = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let valid = false; 
   
    if(username == "martin@mail.com" & password == "1234"){
        vaild = true;
//hardcoded
    }else{
        valid =false;
    }
    
    if (valid){
        alert("login was successful");
        window.location = "./main.html";
        return false;
    }else{
        alert("login was not successful, please try again.");
    }
    

}