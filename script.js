function toggleForm() {
    document.getElementById('container').classList.toggle('flip');
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateSignup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    document.getElementById('signupNameError').textContent =
        name ? '' : 'Name is required';
    document.getElementById('signupEmailError').textContent =
        validateEmail(email) ? '' : 'Invalid email format';
    document.getElementById('signupPasswordError').textContent =
        password.length >= 6 ? '' : 'Minimum 6 characters required';

    if (name && validateEmail(email) && password.length >= 6) {
        alert('Account created successfully!');
        toggleForm();
    }
}

function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    document.getElementById('loginEmailError').textContent =
        validateEmail(email) ? '' : 'Invalid email format';
    document.getElementById('loginPasswordError').textContent =
        password.length >= 6 ? '' : 'Minimum 6 characters required';

    if (validateEmail(email) && password.length >= 6) {
        alert('Login successful!');
        location.reload();
    }
}