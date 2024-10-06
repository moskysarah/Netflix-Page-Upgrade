document.getElementById('myForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailValidation = document.getElementById('email-validation');
    const passwordValidation = document.getElementById('password-validation');

 let isValid = true;
    

    if (!email.checkValidity()) {
        emailValidation.classList.add('visible');

        isValid = false;
    } else {
        emailValidation.classList.remove('visible');
    }

    if (!password.checkValidity()) {
        passwordValidation.classList.add('visible');
        isValid = false;
    } else {
        passwordValidation.classList.remove('visible');
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailValidation = document.getElementById('email-validation');
    if (this.checkValidity()) {
        emailValidation.classList.remove('visible');
        
    } else {
        emailValidation.classList.add('visible');
    }
});

document.getElementById('password').addEventListener('input', function() {
    const passwordValidation = document.getElementById('password-validation');
    if (this.checkValidity()) {
        passwordValidation.classList.remove('visible');
    } else {
        passwordValidation.classList.add('visible');
    }
});