const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwardValue = password.value.trim();

    if(fnameValue === ' ') {
        // show error
        //add error class
        setErrorFor(fname, 'first name cannot be blank')
    } else {
       // do nothing 
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement; / / .form-control
    const small = formControl.querySelector('small');

    // add error message  inside small
    small, innerText = message;

    // addd error class
    formControl.classname = 'form-control error';
}