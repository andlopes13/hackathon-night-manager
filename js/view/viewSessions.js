
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    //const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
    // Global array to store sessions
    window.sessions = [];
    function loadViewSessionPage() {
        mainContent.innerHTML = `
            <div id="session-view-section">
                <h2>View Sessions</h2>
                <table class="table table-bordered" id="sessionsTable">
                    <thead>
                        <tr>
                            <th>Session ID</th>
                            <th>Session Name</th>
                            <th>Session State</th>
                            <th>Add Member</th>
                            <th>Close Session</th>
                            <th>View Question</th>
                        </tr>
                    </thead>
                    <tbody id="sessionsTableBody">
                        <!-- Rows will be populated here -->
                    </tbody>
                </table>
                <button id="createSessionButton">Create New Session</button>
                <button id="backButton">Go Back</button>
            </div>
        `;
        document.getElementById('createSessionButton').addEventListener('click', loadCreateSessionPage);
        document.getElementById('backButton').addEventListener('click', loadCharacterSelection);
        populateSessionsTable();
    }
    function populateSessionsTable() {
        const tbody = document.getElementById('sessionsTableBody');
        tbody.innerHTML = ''; // Clear existing rows
        window.sessions.forEach(session => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${session.id}</td>
                <td>${session.name}</td>
                <td>${session.state}</td>
                <td>
                    <button class="addUserButton" data-id="${session.id}">Add Member</button>
                </td>
                <td>
                    <button class="deleteButton" data-id="${session.id}">End Session</button>
                </td>
                <td>
                    <button id="question">Questions</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        document.getElementById('question').addEventListener('click', loadQuestionViewPage);
        // Attach event listeners to the delete buttons
        const deleteButtons = document.querySelectorAll('.deleteButton');
        deleteButtons.forEach(button => {
            button.addEventListener('click', handleDeleteSession);
        });
        // Attach event listeners to the add user buttons
        const addUserButtons = document.querySelectorAll('.addUserButton');
        addUserButtons.forEach(button => {
            button.addEventListener('click', handleAddUser);
        });
    }
    function handleDeleteSession(event) {
        const sessionId = event.target.getAttribute('data-id');
        // Find the row to be deleted
        const rowToDelete = event.target.closest('tr');
        // Remove the row from the table
        rowToDelete.remove();
        // Optionally, you can remove the session from the sessions array or update the backend here
        window.sessions = window.sessions.filter(session => session.id !== sessionId);
        console.log(`Session with ID ${sessionId} deleted`);
    }
    function handleAddUser(event) {
        const sessionId = event.target.getAttribute('data-id');
        const username = prompt('Enter the username to add:');
        if (username) {
            // Optionally, you can add the user to the session in the sessions array or update the backend here
            console.log(`User "${username}" added to session with ID ${sessionId}`);
        }
    }
    function loadCreateSessionPage() {
        if (typeof window.loadCreateSessionPage === 'function') {
            window.loadCreateSessionPage();
        }
    }
    function loadCharacterSelection() {
        if (typeof window.loadCharacterSelection === 'function') {
            window.loadCharacterSelection();
        }
    }
    function loadQuestionViewPage() {
        if (typeof window.loadQuestionViewPage === 'function') {
            window.loadQuestionViewPage();
        }
    }
    // Expose function to be used by other scripts
    window.loadViewSessionPage = loadViewSessionPage;
});