//Implement JS on my page
const inputNom = document.getElementById("NameInput");
const inputPrenom = document.getElementById("LastNameInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", InscrireUtilisateur);

//Function to validate all form
function validateForm() {
    const nomOk = validateRequiered(inputNom);
    const prenomOk = validateRequiered(inputPrenom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordconfirmOk = validateConfirmPassword(inputPassword, inputValidatePassword);

    if (nomOk && prenomOk && mailOk && passwordOk && passwordconfirmOk) {
        btnValidation.disabled = false;
    }
    else {
        btnValidation.disabled = true;
    }
}

function validateMail(input) {
    //Define Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;

    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmPassword(inputPassword, inputConfirmPassword) {
    if (inputPassword.value == inputConfirmPassword.value) {
        inputConfirmPassword.classList.add("is-valid");
        inputConfirmPassword.classList.remove("is-invalid");
        return true;
    }
    else {
        inputConfirmPassword.classList.remove("is-valid");
        inputConfirmPassword.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    //Define Regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{4,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;

    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequiered(input) {
    if (input.value != '') { //If value diff nothing then
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
        //Denied value
    }
}

function InscrireUtilisateur() {
    let dataForm = new FormData(formInscription);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "firstName": dataForm.get("name"),
        "lastName": dataForm.get("prenom"),
        "email": dataForm.get("email"),
        "password": dataForm.get("Password"),
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"registration", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                alert("Erreur lors de l'inscription");
            }


        })
        .then(result => {

                alert("Inscription Réussie "+dataForm.get("prenom")+" ! Vous pouvez vous connecter.");
                document.location.href="/login";
            })
        .catch((error) => console.error(error));
}