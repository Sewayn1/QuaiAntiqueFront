const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnLogin = document.getElementById("btnlogin");
const loginForm = document.getElementById("loginForm");

btnLogin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //Here, need to call the API to check Credentials in DB
    let dataForm = new FormData(loginForm);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("Password"),
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"login", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                mailInput.classList.add("is-invalid");
                passwordInput.classList.add("is-invalid");
            }


        })
        .then(result => {
            //Need to get the real token
            const token = result.apiToken;
            setToken(token);

            //Place this token in Cookie
            setCookie(RoleCookieName, result.roles[0], 7);
            window.location.replace("/");
        })
        .catch((error) => console.error(error));
}