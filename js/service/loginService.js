const loginService = (function() {
    const apiUrl = 'http://192.168.10.139:8080/oznightmanager/api/';
    async function login(username, password) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.success;
        } catch (error) {
            console.error('There was a problem with the login request:', error);
            return false;
        }
    }
    return {
        login
    };
})();