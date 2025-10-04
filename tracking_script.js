/**
 * To use:
 * 1. Add this file in the same directory as your HTML files.
 * 2. Add <script src="tracking_script.js"></script> to the <head> or before the </body>
 * closing tag of your HTML files (Q1, Q2, Q3, Q4, Q5).
 */

document.addEventListener('DOMContentLoaded', () => {
    // This ensures the script runs only after the full HTML document has been loaded and parsed.

    /**
     * Captures a page view event.
     * Logs the timestamp, event type (view), and the URL of the page viewed.
     */
    function logPageView() {
        const timestamp = new Date().toISOString(); // Get current timestamp in ISO format
        const eventType = 'view'; // Define event type as 'view'
        const eventObject = {
            url: window.location.href, // Get the full URL of the current page
            title: document.title    // Get the title of the current page
        };
        // Print the captured information to the console.
        console.log(`[${timestamp}] Type: ${eventType}, Object: Page, Details: `, eventObject);
    }

    /**
     * Captures a click event on any element in the document.
     * Logs the timestamp, event type (click), and details of the clicked element.
     * @param {Event} event The DOM click event object.
     */
    function logClickEvent(event) {
        const timestamp = new Date().toISOString(); // Get current timestamp in ISO format
        const eventType = 'click'; // Define event type as 'click'
        const targetElement = event.target; // Get the specific HTML element that was clicked

        // Extract relevant details about the clicked element.
        const eventObject = {
            tagName: targetElement.tagName, // The HTML tag name (e.g., 'BUTTON', 'DIV', 'A')
            id: targetElement.id || 'N/A', // The element's ID, or 'N/A' if no ID
            className: targetElement.className || 'N/A', // The element's CSS classes
            textContent: targetElement.textContent ? targetElement.textContent.trim().substring(0, 50) + '...' : 'N/A', // First 50 chars of text content
            type: targetElement.type || 'N/A' // For input elements (e.g., 'submit', 'text')
        };
        // Print the captured information to the console.
        console.log(`[${timestamp}] Type: ${eventType}, Object: ${eventObject.tagName}, Details: `, eventObject);
    }

    // --- Attach Event Listeners ---

    // 1. Log page view when the DOM is fully loaded.
    logPageView();

    // 2. Attach a click event listener to the entire document.
    // This captures clicks on any element within the body.
    document.body.addEventListener('click', logClickEvent);

    // Optional: You could add more specific event listeners if needed,
    // e.g., for form submissions, mouseover, keypress, etc.
});