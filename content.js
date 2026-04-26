// Listen for messages from the webpage via window.postMessage
window.addEventListener('message', (event) => {
    // We only accept messages from ourselves
    if (event.source !== window) return;

    if (event.data && event.data.type === 'run-scraper-event') {
        const payload = event.data.payload;
        console.log("[SCRAPER-DEBUG] Content script received run-scraper-event", payload);

        // Open a long-lived connection to the background script
        const port = chrome.runtime.connect({ name: 'scraper-port' });

        // Forward the event data to the background script
        port.postMessage({
            type: 'RUN_SCRAPER',
            payload: payload
        });

        // Listen for results from the background script
        port.onMessage.addListener((message) => {
            console.log("[SCRAPER-DEBUG] Received message from background port:", message);

            // Send the result back to the webpage
            window.postMessage({
                type: 'scraper-result-event',
                ...message
            }, '*');
        });

        // Handle disconnection/errors
        port.onDisconnect.addListener(() => {
            if (chrome.runtime.lastError) {
                console.error("[SCRAPER-DEBUG] Port disconnected with error:", chrome.runtime.lastError.message);
                window.postMessage({
                    type: 'scraper-result-event',
                    type_original: 'error',
                    error: chrome.runtime.lastError.message
                }, '*');
            } else {
                console.log("[SCRAPER-DEBUG] Port disconnected normally");
                // We don't necessarily need to send 'done' here because the background script sends it explicitly,
                // but we could send a fallback 'done' if the background crashed without sending it.
            }
        });
    }
});