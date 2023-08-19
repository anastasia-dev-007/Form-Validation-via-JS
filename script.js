//Function to disable all date in return dates before selected flight date
function updateReturnDateMin() {
    const flightDate = document.getElementById("flightdate");
    const returnDate = document.getElementById("returndate");

    returnDate.min = flightDate.value;

    // Clear the return date input if it's invalid (best practice, but code works even without this)
    if (returnDate.value < returnDate.min) {
        returnDate.value = returnDate.min;
    }
}


//Function to validate age 18+ (is activated in the body of validateForm())
function validateAge() {
    const today = new Date();
    const adultAge = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const userBday = new Date(document.getElementById("birthday").value);

    return userBday <= adultAge;//will return a boolean value which further will be filtered by operator (! - is not/is false)
}

//MAIN VALIDATION
function validateForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const zip = document.getElementById("zip").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    let isValid = true;

    if (name.length === 0) {
        document.getElementById("alertName").innerHTML = "*Name must be filled out";
        document.getElementById("alertName").style.color = "red";
        document.getElementById("name").style.border = "1px solid red";
        isValid = false;
    } else if (name.length < 2 || !/^[A-Za-z]+$/.test(name)) {
        document.getElementById("alertName").innerHTML = "*Enter a valid name";
        document.getElementById("alertName").style.color = "red";
        document.getElementById("name").style.border = "1px solid red";
        isValid = false;
    }

    if (surname.length === 0) {
        document.getElementById("alertSurname").innerHTML = "*Surname must be filled out";
        document.getElementById("alertSurname").style.color = "red";
        document.getElementById("surname").style.border = "1px solid red";
        isValid = false;
    } else if (surname.length < 2 || !/^[A-Za-z]+$/.test(surname)) {
        document.getElementById("alertSurname").innerHTML = "*Enter a valid surname";
        document.getElementById("alertSurname").style.color = "red";
        document.getElementById("surname").style.border = "1px solid red";
        isValid = false;
    }

    if (phone.length === 0) {
        document.getElementById("alertPhone").innerHTML = "*Phone number must be filled out";
        document.getElementById("alertPhone").style.color = "red";
        document.getElementById("phone").style.border = "1px solid red";
        isValid = false;
    } else if (phone.length !== 9 || isNaN(phone) || phone.charAt(0) !== "0" || (phone.charAt(1) !== "6" && phone.charAt(1) !== "7")) {
        document.getElementById("alertPhone").innerHTML = "Enter a valid phone number from Moldova (exactly as in example in the field)";
        document.getElementById("alertPhone").style.color = "red";
        document.getElementById("phone").style.border = "1px solid red";
        isValid = false;
    }

    if (zip.length === 0) {
        document.getElementById("zipAlert").innerHTML = "*ZIP code must be filled out"
        document.getElementById("zipAlert").style.color = "red";
        document.getElementById("zip").style.border = "1px solid red";
        isValid = false;
    } else if (isNaN(zip) || zip.length !== 4) {
        document.getElementById("zipAlert").innerHTML = "*Enter a valid ZIP code"
        document.getElementById("zipAlert").style.color = "red";
        document.getElementById("zip").style.border = "1px solid red";
        isValid = false;
    }


    if (email.length === 0) {
        document.getElementById("emailAlert").innerHTML = "*email must be filled out";
        document.getElementById("emailAlert").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailAlert").innerHTML = "*Enter a valid email"
        document.getElementById("emailAlert").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
        isValid = false;
    }

    if (password.length === 0) {
        document.getElementById("passwordAlert").innerHTML = "*password must be filled out";
        document.getElementById("passwordAlert").style.color = "red";
        document.getElementById("password").style.border = "1px solid red";
        isValid = false;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password)) {
        document.getElementById("passwordAlert").innerHTML = "*password must contain minimum 8 characters out of which at least 1 uppercase letter and 1 symbol";
        document.getElementById("passwordAlert").style.color = "red";
        document.getElementById("password").style.border = "1px solid red";
        isValid = false;
    }

    if (!validateAge()) {
        document.getElementById("bdayAlert").innerHTML = "To be eligible in the contest, age must be 18+";
        document.getElementById("bdayAlert").style.color = "red";
        isValid = false;
        document.getElementById("birthday").style.border = "1px solid red";
    }

    return isValid; // Allow form submission if all fields are filled out
}
