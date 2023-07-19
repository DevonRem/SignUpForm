function comparepass(form) {
    const errormsg = document.querySelector('.errormessage');
    password1 = form.password.value;
    password2 = form.confirm_password.value;
    if (password1==='' || password2==='') {
        document.getElementById("user_password").style.borderColor = "red";
        document.getElementById("confirm_password").style.borderColor = "red";
        return false

    }
    else if (password1===password2) {
        alert('Passwords match, thank you!');
        return true;

    }
    else {
        document.getElementById("user_password").style.borderColor = "red";
        document.getElementById("confirm_password").style.borderColor = "red";
        errormsg.style.color = "red";
        errormsg.textContent = "Passwords do not match";
        return false;
    }
}