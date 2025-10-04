document.addEventListener('DOMContentLoaded', function() {

    // Function to display the current time
    function startTime() {
        const today = new Date();
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.innerHTML = today.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
        setTimeout(startTime, 1000);
    }

    // Function to display the last modified date of the document
    function displayLastModified() {
        const lastUpdatedElement = document.getElementById('lastUpdated');
        if (lastUpdatedElement) {
            const lastModified = new Date(document.lastModified);
            const formattedDate = lastModified.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            lastUpdatedElement.innerHTML += formattedDate;
        }
    }

    // Initialize functions
    startTime();
    displayLastModified();

});