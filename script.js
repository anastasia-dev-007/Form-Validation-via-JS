function validateForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;

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
    } else if(phone.length !== 9 || isNaN(phone) || phone.charAt(0) !== "0" || (phone.charAt(1) !== "6" && phone.charAt(1) !== "7") ) {
        document.getElementById("alertPhone").innerHTML = "Enter a valid phone number from Moldova (exactly as in example in the field)";
        document.getElementById("alertPhone").style.color = "red";
        document.getElementById("phone").style.border = "1px solid red";
        isValid = false;
    } 


    return isValid; // Allow form submission if all fields are filled out
}
