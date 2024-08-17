document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    let sessionCounter = window.sessions.length + 1; // Initialize counter based on existing sessions

    function loadCreateSessionPage() {
        mainContent.innerHTML = `
            <div id="create-session-section">
                <h2>Create New Session</h2>
                <form id="createSessionForm">
                    <label for="sessionName">Session Name:</label>
                    <input type="text" id="sessionName" name="sessionName" required>
                    <label for="groupName">Group Name:</label>
                    <input type="text" id="groupName" name="groupName" required>
                    <br>
                    <label for="groupDescription">Group Description:</label>
                    <input type="text" id="groupDescription" name="groupDescription" required>
                    <br>
                    <button type="submit">Create Session</button>
                </form>
                <p id="createSessionMessage"></p>
                <button id="backButton">Go Back</button>
            </div>
        `;

        document.getElementById('createSessionForm').addEventListener('submit', handleCreateSession);
        document.getElementById('backButton').addEventListener('click', loadViewSessionPage);
    }

    function handleCreateSession(event) {
        event.preventDefault();
        const sessionName = document.getElementById('sessionName').value;
        const groupName = document.getElementById('groupName').value;
        const groupDescription = document.getElementById('groupDescription').value;
        const sessionState = 'Active'; // Assuming a new session starts as 'Active'
        const sessionId = String(sessionCounter++);
        
        // Ensure window.groups is initialized
        window.groups = window.groups || [];

        // Add new session to the global sessions array
        window.sessions.push({ id: sessionId, name: sessionName, state: sessionState });
        
        // Add the new group with 1 member
        window.groups.push({ name: groupName, description: groupDescription, members: 1 });

        const createSessionMessage = document.getElementById('createSessionMessage');
        createSessionMessage.textContent = `Session "${sessionName}" and Group "${groupName}" created successfully!`;
        createSessionMessage.style.color = 'green';
        // Simulate a delay and then return to the session view page
        setTimeout(loadViewSessionPage, 1000);
    }

    function loadViewSessionPage() {
        if (typeof window.loadViewSessionPage === 'function') {
            window.loadViewSessionPage();
        }
    }

    window.loadCreateSessionPage = loadCreateSessionPage;
});
