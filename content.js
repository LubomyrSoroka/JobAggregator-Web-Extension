// Listen for messages from the webpage via window.postMessage
window.addEventListener('message', (event) => {
    // We only accept messages from ourselves
    if (event.source !== window) return;

    if (event.data && event.data.type === "enable-debugger") {
        console.log("enabling debugging")
        chrome.runtime.sendMessage({
            type: 'ENABLE_DEBUGGER',
            payload: event.data.payload
        });
    }
    if (event.data && event.data.type === 'stop-scraper') {
        chrome.runtime.sendMessage({
            type: "STOP_SCRAPER",
            scraperId: event.data.scraperId
        })
    }

    if (event.data && event.data.type === 'run-scraper-event') {
        const payload = event.data.payload;

        // Open a long-lived connection to the background script
        const port = chrome.runtime.connect({ name: 'scraper-port' });

        // Forward the event data to the background script
        port.postMessage({
            type: 'RUN_SCRAPER',
            payload: payload
        });

        // Listen for results from the background script
        port.onMessage.addListener((message) => {

            // Send the result back to the webpage
            window.postMessage({
                type: 'scraper-result-event',
                ...message
            }, '*');
        });

        // Handle disconnection/errors
        port.onDisconnect.addListener(() => {
            if (chrome.runtime.lastError) {
                window.postMessage({
                    type: 'scraper-result-event',
                    type_original: 'error',
                    error: chrome.runtime.lastError.message
                }, '*');
            }
        });
    }

    if (event.data && event.data.type === 'file-action-event') {
        const payload = event.data.payload;
        console.log(`sending file action. Type: ${payload.type}`)
        const port = chrome.runtime.connect({ name: 'scraper-port' });
        port.postMessage({
            type: 'FILE_ACTION',
            payload: payload
        });
        port.onMessage.addListener((message) => {
            if (message.status === 'success') {
                window.postMessage({
                    direction: 'file-action-result-web',
                    ...message
                }, '*');
                port.disconnect();
            }
        });
    }
});