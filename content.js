// Listen for run-scraper-event from the webpage
window.addEventListener('run-scraper-event', (event) => {
    // Forward the event data to the background script
    chrome.runtime.sendMessage({
        type: 'RUN_SCRAPER',
        payload: event.detail
    }, (response) => {
        // Send the result back to the webpage
        window.dispatchEvent(new CustomEvent('scraper-result-event', {
            detail: response
        }));
    });
});
