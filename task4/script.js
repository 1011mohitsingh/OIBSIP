const users = [];

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    if (username && password) {
        users.push({ username, password });
        alert('Registration successful! Please login.');
        showLoginForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        alert('Login successful!');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('secure-page').style.display = 'flex';
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    document.getElementById('secure-page').style.display = 'none';
    showLoginForm();
}
