// Function to open a popup with given title and description
function openPopup(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to fetch project status from API
function fetchProjectStatus() {
    const apiUrl = 'https://api.mcstatus.io/v2/status/java/velsatis.sytes.net:22440';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById('status-projekt-1');
            if (data.online) {
                statusElement.innerText = 'ONLINE 🟢';
            } else {
                statusElement.innerText = 'OFFLINE 🔴';
            }
        })
        .catch(error => {
            console.error('Error fetching project status:', error);
            document.getElementById('status-projekt-1').innerText = 'Error';
        });
}

// Example usage of fetchProjectStatus function
document.addEventListener('DOMContentLoaded', () => {
    fetchProjectStatus();
});
