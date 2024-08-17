document.addEventListener('DOMContentLoaded', function() {

    



    const mainContent = document.getElementById('main-content');
    //const backgroundMusic = document.getElementById('backgroundMusic');

    backgroundMusic.play();
    function loadLoginPage() {
        mainContent.innerHTML = `<div id="login-section">
                                    <h2>Login</h2>
                                    <form id="loginForm">
                                        <label for="username">Username:</label>
                                        <input type="text" id="username" name="username" required>
                                        <br>
                                        <label for="password">Password:</label>
                                        <input type="password" id="password" name="password" required>
                                        <br>
                                        <br>
                                        <button type="submit">Login</button>
                                    </form>
                                    <p id="loginMessage"></p>
                                    <p>Don't have an account? <button id="createAccountButton">Create Account</button></p>
                                </div>
        `;

        document.getElementById('loginForm').addEventListener('submit', handleLogin);
        document.getElementById('createAccountButton').addEventListener('click', loadRegisterPage);
    }

    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginMessage = document.getElementById('loginMessage');

        if (username === 'wizard' && password === 'oz') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
            setTimeout(loadCharacterSelection, 1000);
        } else {
            loginMessage.textContent = 'Invalid username or password';
            loginMessage.style.color = 'red';
        }
    }

    function loadCharacterSelection() {
        mainContent.innerHTML = `
            <button id="createNewSessionButton">Create a New Session</button>
            <button id="viewHistoryButton">View a History</button>
            <button id="viewProfileButton">View a Profile</button>
        `;

        document.getElementById('createNewSessionButton').addEventListener('click', function() {
            loadCharacterPage('Create a New Session', 'session.jpg', 'There\'s no place like home!');
        });

        document.getElementById('viewHistoryButton').addEventListener('click', function() {
            loadCharacterPage('View a History', 'history.jpg', 'I do believe in spooks, I do, I do, I do!');
        });

        document.getElementById('viewProfileButton').addEventListener('click', function() {
            loadCharacterPage('View a profile', 'profile.jpg', 'If I only had a brain!');
        });
    }

    function loadRegisterPage() {
        if (typeof window.loadRegisterPage === 'function') {
            window.loadRegisterPage();
        }
    }

    function loadProfilePage() {
        if (typeof window.loadProfilePage === 'function') {
            window.loadProfilePage();
        }
    }

    // Initial load
    loadLoginPage();
    // Expose functions to be used by other scripts
    window.loadLoginPage = loadLoginPage;

});
