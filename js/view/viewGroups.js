document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');

    // Define some predefined groups
    const predefinedGroups = [
        { name: 'Wizards', description: 'A group of magical beings.', members: 12 },
        { name: 'Adventurers', description: 'People who seek adventure and thrills.', members: 8 },
        { name: 'Scholars', description: 'Individuals dedicated to learning and research.', members: 15 }
    ];

    // Initialize the global groups array if not already set
    window.groups = window.groups || [...predefinedGroups];

    function loadViewGroupPage() {
        mainContent.innerHTML = `
            <div id="view-group-section">
                <h2>Search Groups</h2>
                <input type="text" id="searchBar" placeholder="Search for groups..." />
                <table class="table table-bordered" id="groupsTable">
                    <thead>
                        <tr>
                            <th>Group Name</th>
                            <th>Description</th>
                            <th>Members</th>
                            <th>Request</th>
                        </tr>
                    </thead>
                    <tbody id="groupsTableBody">
                        <!-- Rows will be populated here -->
                    </tbody>
                </table>
                <button id="backButton">Go Back</button>
            </div>
        `;

        document.getElementById('backButton').addEventListener('click', loadCharacterSelection);
        document.getElementById('searchBar').addEventListener('input', filterGroups);
        populateGroupsTable();
    }

    function populateGroupsTable() {
        // Get the combined list of groups
        const groups = window.groups;

        const tbody = document.getElementById('groupsTableBody');
        tbody.innerHTML = ''; // Clear existing rows

        groups.forEach((group, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${group.name}</td>
                <td>${group.description}</td>
                <td>${group.members}</td>
                <td>
                    <button class="requestButton" data-index="${index}">Request to Join</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Attach event listeners to the request buttons
        document.querySelectorAll('.requestButton').forEach(button => {
            button.addEventListener('click', handleRequestClick);
        });
    }

    function filterGroups() {
        const query = document.getElementById('searchBar').value.toLowerCase();
        const rows = document.querySelectorAll('#groupsTableBody tr');
        rows.forEach(row => {
            const groupName = row.cells[0].textContent.toLowerCase();
            const groupDescription = row.cells[1].textContent.toLowerCase(); 

            if (groupName.includes(query) || groupDescription.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function handleRequestClick(event) {
        const index = event.target.getAttribute('data-index');
        const group = window.groups[index];

        // Simulate sending a request (in a real application, this could involve an API call)
        console.log(`Request to join group: ${group.name}`);

        // Alert the user that the request was sent
        alert(`Your request to join the group "${group.name}" has been sent!`);
    }

    function loadCharacterSelection() {
        if (typeof window.loadCharacterSelection === 'function') {
            window.loadCharacterSelection();
        }
    }

    window.loadViewGroupPage = loadViewGroupPage;
});
