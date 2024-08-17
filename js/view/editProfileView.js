document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    //const backgroundMusic = document.getElementById('backgroundMusic');
 
    backgroundMusic.play();

    function loadEditProfilePage() {
        const account = JSON.parse(localStorage.getItem('account')) || {};

        mainContent.innerHTML = `
            <div id="profile-section">
                <h2>Edit Profile</h2>
                <form id="profileForm">
                    <table class="table table-bordered">
                        <tr>
                            <th>Name</th>
                            <td><input type="text" id="username" name="username" value="${account.username || ''}" required></td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td><input type="number" id="age" name="age" value="${account.age || ''}" required></td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td><input type="email" id="email" name="email" value="${account.email || ''}" required></td>
                        </tr>
                        <tr>
                            <th>Nationality</th>
                            <td><input type="text" id="nationality" name="nationality" value="${account.nationality || ''}" required></td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td><input type="text" id="city" name="city" value="${account.city || ''}" required></td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td><input type="number" id="rating" name="rating" value="${account.rating || 5}" min="1" max="10" required></td>
                        </tr>
                    </table>
                    <button type="submit">Save</button>
                </form>
                <button id="backButton">Go Back</button>
                <p id="profileMessage"></p>
            </div>
        `;
        
        document.getElementById('profileForm').addEventListener('submit', handleProfileSave);
        document.getElementById('backButton').addEventListener('click', loadViewProfilePage);
    }

    function handleProfileSave(event) {
        event.preventDefault();

        const updatedAccount = {
            username: document.getElementById('username').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
            nationality: document.getElementById('nationality').value,
            city: document.getElementById('city').value,
            rating: document.getElementById('rating').value
        };

        localStorage.setItem('account', JSON.stringify(updatedAccount));

        const profileMessage = document.getElementById('profileMessage');
        profileMessage.textContent = 'Profile saved successfully!';
        profileMessage.style.color = 'green';

        setTimeout(loadViewProfilePage, 1000); // Redirect to profile view after saving
    }

    function loadViewProfilePage() {
        if (typeof window.loadViewProfilePage === 'function') {
            window.loadViewProfilePage();
        }
    }

    window.loadEditProfilePage = loadEditProfilePage;
});
