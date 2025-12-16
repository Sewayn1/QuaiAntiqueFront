const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Here, need to call the API to check Credentials in DB

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){

         //Need to get the real token
         const token = "whfkwbflwifgwliofifgqfwoufwfiu"
         setToken(token);

         //Place this token in Cookie
         setCookie(RoleCookieName, "client", 7); //Add Admin Role to the website, during 7 days before being disconnected automaticly.
         window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}