


function Validate(_custmoreDataBase){
    let username = document.login.username.value;
    let password = doucment.lgoin.password.value;
    let valid = false; 
    let custmoreDataBase = _custmoreDataBase;

    for (const profile in custmoreDataBase) {
        if (username == profile.username && password d== profile.username){
            valid = true;
            break;
        }
    }
    if (valid){
        alert("login was successful");
        window.location = "./main.html";
        return false;
    }else{
        alert("login was not successful, please try again.")
    }
    

}