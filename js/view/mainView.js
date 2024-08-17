document.addEventListener('DOMContentLoaded', function() {

    console.log("Main spot")

    async function getQuestions(){
        console.log("trying to fetch data from api");
        fetch("http://192.168.10.139:8080/oznightmanager/api/question").then(parseToJson).then(populatePage)
        console.log("after fetch");
    }

    function parseToJson(data) {
        return data.json();
    }

    function populatePage(data) {
        console.log(data);
    }

    getQuestions();

    const mainContent = document.getElementById('main-content');
    //const backgroundMusic = document.getElementById('backgroundMusic');

    backgroundMusic.play();

    function loadLoginPage() {
        mainContent.innerHTML = `
            <div id="login-section">
                <h2>Login</h2>
                <form id="loginForm">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
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
            <button id="viewProfileButton">View a Profile</button>
            <button id="viewGroupButton">View Groups</button>
            <button id="viewSessionButton">View Sessions</button>
            <div><button id="logoutButton" style="background-color: red; color: white;">Logout</button></div>
        `;

        document.getElementById('viewProfileButton').addEventListener('click', loadViewProfilePage);
        document.getElementById('viewGroupButton').addEventListener('click', loadViewGroupPage);
        document.getElementById('viewSessionButton').addEventListener('click', loadViewSessionPage);
        document.getElementById('logoutButton').addEventListener('click', loadLoginPage);
    }

    function loadCharacterPage(name, image, quote) {
        mainContent.innerHTML = `
            <h2>${name}</h2>
            <img src="${image}" alt="${name}">
            <p>"${quote}"</p>
            <button id="backButton">Go Back</button>
        `;
        document.getElementById('backButton').addEventListener('click', loadCharacterSelection);
    }

    function loadRegisterPage() {
        if (typeof window.loadRegisterPage === 'function') {
            window.loadRegisterPage();
        }
    }

    function loadViewProfilePage() {
        if (typeof window.loadViewProfilePage === 'function') {
            window.loadViewProfilePage();
        }
    }

    function loadViewGroupPage() {
        if (typeof window.loadViewGroupPage === 'function') {
            window.loadViewGroupPage();
        }
    }

    function loadViewSessionPage() {
        if (typeof window.loadViewSessionPage === 'function') {
            window.loadViewSessionPage();
        }
    }

    // Initial load
    loadLoginPage();
    // Expose functions to be used by other scripts
    window.loadCharacterSelection = loadCharacterSelection;
    window.loadViewSessionPage = loadViewSessionPage;
});
