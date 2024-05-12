document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const errorMessage = document.getElementById('error-message');

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in both fields.';
        } else if (username === 'admin' && password === 'password') {
            window.location.href = './pages/home.html';
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});