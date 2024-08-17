document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    //const backgroundMusic = document.getElementById('backgroundMusic');

    function loadViewProfilePage() {
        const account = JSON.parse(localStorage.getItem('account')) || {};

        mainContent.innerHTML = `
            <div id="profile-section">
                <h2>View Profile</h2>
                <table class="table table-bordered">
                    <tr>
                        <th>Name</th>
                        <td>${account.username || '-- Name --'}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>${account.age || '-- Age --'}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>${account.email || '-- Email --'}</td>
                    </tr>
                    <tr>
                        <th>Nationality</th>
                        <td>${account.nationality || '-- Nationality --'}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>${account.city || '-- City --'}</td>
                    </tr>
                    <tr>
                        <th>Rating</th>
                        <td>5</td>
                    </tr>
                </table>
                <button id="editProfileButton">Edit Profile</button>
                <button id="backButton">Go Back</button>
            </div>
        `;
        
        document.getElementById('editProfileButton').addEventListener('click', loadEditProfilePage);
        document.getElementById('backButton').addEventListener('click', loadCharacterSelection);
    }

    function loadEditProfilePage() {
        if (typeof window.loadEditProfilePage === 'function') {
            window.loadEditProfilePage();
        }
    }

    function loadCharacterSelection() {
        if (typeof window.loadCharacterSelection === 'function') {
            window.loadCharacterSelection();
        }
    }

    window.loadViewProfilePage = loadViewProfilePage;
});
