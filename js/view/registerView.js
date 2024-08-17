document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    //const backgroundMusic = document.getElementById('backgroundMusic');

    function loadRegisterPage() {
        mainContent.innerHTML = `
            <div id="register-section">
                <h2>Register</h2>
                <form id="registerForm">
                    <label for="newUsername">Username:</label>
                    <input type="text" id="newUsername" name="newUsername" required>
                    <br>
                    <label for="newAge">Age:</label>
                    <input type="text" id="newAge" name="newAge" required>
                    <br>
                    <label for="newEmail">Email:</label>
                    <input type="email" id="newEmail" name="newEmail" required>
                    <br>
                    <label for="newNationality">Nationality:</label>
                    <input type="text" id="newNationality" name="newNationality" required>
                    <br>
                    <label for="newCity">City:</label>
                    <input type="text" id="newCity" name="newCity" required>
                    <br>
                    <label for="newPassword">Password:</label>
                    <input type="password" id="newPassword" name="newPassword" required>
                    <br>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <br>
                    <button type="submit">Register</button>
                </form>
                <p id="registerMessage"></p>
                <button id="backToLogin">Back to Login</button>
            </div>
        `;

        document.getElementById('registerForm').addEventListener('submit', handleRegister);
        document.getElementById('backToLogin').addEventListener('click', loadLoginPage);
    }

    function handleRegister(event) {
        event.preventDefault();

        const newUsername = document.getElementById('newUsername').value;
        const newAge = document.getElementById('newAge').value;
        const newEmail = document.getElementById('newEmail').value;
        const newNationality = document.getElementById('newNationality').value;
        const newCity = document.getElementById('newCity').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            const registerMessage = document.getElementById('registerMessage');
            registerMessage.textContent = 'Passwords do not match!';
            registerMessage.style.color = 'red';
            return; // Exit the function if passwords do not match
        }

        const account = {
            username: newUsername,
            age: newAge,
            email: newEmail,
            nationality: newNationality,
            city: newCity,
            password: newPassword // For a real app, ensure password security
        };

        localStorage.setItem('account', JSON.stringify(account));

        const registerMessage = document.getElementById('registerMessage');
        registerMessage.textContent = 'Registration successful!';
        registerMessage.style.color = 'green';
        setTimeout(loadCharacterSelection, 1000);
    }

    function loadCharacterSelection() {
        if (typeof window.loadCharacterSelection === 'function') {
            window.loadCharacterSelection();
        }
    }

    function loadLoginPage() {
        if (typeof window.loadLoginPage === 'function') {
            window.loadLoginPage();
        }
    }

    window.loadRegisterPage = loadRegisterPage;
});
