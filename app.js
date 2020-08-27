const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birthDate = document.getElementById("birthDate");
const state = document.getElementById("state");
const nationality = document.getElementById("nationality");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    //validate time of registration
    const now = new Date();
    let checkTime = now.getTime();
    let start = new Date('2020-08-29 00:00:00').getTime();
    let end = new Date('2020-08-31 23:59:59').getTime();

    //calling the values
    const firstNameValue = fname.value.trim();
    const lastNameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const birthDateValue = birthDate.value.trim();
    const stateValue = state.value.trim();
    const nationalityValue = nationality.value.trim();

    //validate firstName
    if (firstNameValue === "") {
        setErrorFor(fname, "First Name cannot be blank");
    } else {
        setSuccessFor(fname);
    }

    //validate LastName
    if (lastNameValue === "") {
        setErrorFor(lname, "Last Name cannot be blank");
    } else {
        setSuccessFor(lname);
    }

    //validate email
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }

    //validate phone number
    if (phoneValue === "") {
        setErrorFor(phone, "Phone Number cannot be blank");
    } else if(!isPhone(phoneValue)) {
        setErrorFor(phone, "Phone Number is not valid");
    } else {
        setSuccessFor(phone);
    }

    //validate birth Date
    if (birthDateValue === "") {
        setErrorFor(birthDate, "Date of Birth cannot be blank");
    } else {
        setSuccessFor(birthDate);
    }


    //validate State of Origin
    if (stateValue === "") {
        setErrorFor(state, "State of Origin cannot be blank");
    } else {
        setSuccessFor(state);
    }

    //validate nationality
    if (nationalityValue === "") {
        setErrorFor(nationality, "Nationality cannot be blank");
    } else {
        setSuccessFor(nationality);
    }

    
    //validate form to submit the form
    if (firstNameValue === "" && lastNameValue === "") {
        alert("Please, fill in your details");
    } else if (emailValue === "" && !isEmail(emailValue)) {
        alert("Please, fill in your details");
    } else if (phoneValue === "" && !isPhone(phoneValue)) {
        alert("Please, fill in your details");
    } else if (stateValue === "") {
        alert("Please, fill in your details");
    } else if (nationalityValue === "") {
        alert("Please, fill in your details");
    } else if (checkTime < start) {
        alert("Registration has not commenced");
    } else if (checkTime > end) {
        alert("Registration has ended");
    } else {
        alert ("YOUR REGISTRATION IS SUCCESSFUL \n Check your mail to confirm your registration");
    }
}

//to set error
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //target the small tag
    small.innerText = message;

    small.value = ""
    
    //error class
    formControl.className = "form-control error";
}

//to set success
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";   
}

//test for email
function isEmail(email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
}

//test for phone number
function isPhone(phone) {
    return /^[0-9\+]{11,14}$/.test(phone);
}