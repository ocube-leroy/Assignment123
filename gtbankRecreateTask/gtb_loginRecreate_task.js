//This function disables keyboard from entering values in password fields.

function keyboardDisable(event) {
    event.preventDefault();
}

//This function allows keypad designed to enter values in password field.

function numPad(buttonId) {
    var numButton = document.getElementById(buttonId).innerHTML;
    document.getElementById('pass1').value += numButton;
}

//This function removes the last character in the password field when clicked.
function delPad() {
let delButton = document.getElementById('pass1').value;
let pinLength = delButton.length - 1;
document.getElementById('pass1').value = delButton.substr(0,pinLength);
}

//This function clears both username and password fields.
function myClr() {
    document.getElementById('gtTest').reset();
}


/*These functions check if something was entered in the Username and Password fields and
 if the Username and Password entered are correct*/
function checkUsername() {
    var x = document.gtForm.username1.value;
    if (x == '') {
        alert('Enter a Username');
        return false;
    }
}


function checkPassword() {
    var x = document.gtForm.password1.value;
    if (x == '') {
        alert('Enter a Password');
        return false;
    }
}

function enterUserPass() {
    var password = document.getElementById('pass1').value;
    var username = document.getElementById('userId').value;
    if (password == '12345' && username == 'goke@gmail.com') {
        window.location = 'success.html';
        return true;
    }

    else if (password !== '12345' || username !== "goke@gmail.com") {
        alert('Email or Password incorrect, Pls try again');
        return false;
    }
}
       

