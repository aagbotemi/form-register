const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //validate username
    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
    } else if(!isUsername(usernameValue)) {
        setErrorFor(username, "Username should be 3 - 15 characters");
    } else {
        setSuccessFor(username);
    }

    //validate email
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }

    //validate password
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else if(!isPassword(passwordValue)) {
        setErrorFor(password, "Password should contain 6 - 16 characters");
    } else {
        setSuccessFor(password);
    }

    //validate confirm password
    if (password2Value === "") {
        setErrorFor(password2, "Password2 cannot be blank");
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords does not match");
    } else {
        setSuccessFor(password2);
    }

    //validate form to submit the form
    if (usernameValue === "" && !isUsername(usernameValue)) {
        alert("Error");
    } else if (emailValue === "" && !isEmail(emailValue)) {
        alert("Error");
    } else if ((passwordValue === "") && (!isPassword(passwordValue)) || (passwordValue !== password2Value)){
        alert("Error");
    } else {
        alert ("Successful");
    }
}

//to set error
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //target the small tag
    small.innerText = message;
    
    //error class
    formControl.className = "form-control error";
}

//to set success
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";   
}

//test for username
function isUsername(username) {
    return /^[a-zA-Z0-9_\-\.]{3,12}$/.test(username);
}

//test for email
function isEmail(email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
}

//test for password
function isPassword(password) {
    return /^[a-zA-Z0-9\-\+\.\@]{6,16}$/.test(password);
}

