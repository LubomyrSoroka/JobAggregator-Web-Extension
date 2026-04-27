chrome.runtime.onConnect.addListener((port) => {
    if (port.name === 'scraper-port') {
        port.onMessage.addListener(async (message) => {
            if (message.type === 'RUN_SCRAPER') {
                const { scraperName, code, parameters } = message.payload;

                try {
                    // Construct an async function wrapper
                    // We pass helpers to the function so the scraper can use them if needed,
                    // although they are also in the global scope of this service worker.
                    const runner = new Function('params', `
                        ${code}
                        if (typeof scrape === 'function') {
                            return scrape(...params);
                        }
                        throw new Error("No 'scrape' function detected in provided source.");
                        //# sourceURL=scraper-${scraperName.replace(/\s+/g, '-')}.js
                    `);

                    for await (let jobs of runner(parameters)) {
                        port.postMessage({ result: jobs });
                    }
                    port.postMessage({ done: true });

                } catch (error) {
                    console.error("Execution failed in background:", error);
                    port.postMessage({ error: error.message });
                }
            }
        });
    }
});

const debugCache = new Map();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'ENABLE_DEBUGGER') {
        const { scraperName, code, parameters } = request.payload;

        const runner = new Function('params', `
            ${code}
            if (typeof scrape === 'function') {
                return scrape(...params);
            }
            throw new Error("No 'scrape' function detected in provided source.");
            //# sourceURL=scraper-${scraperName.replace(/\s+/g, '-')}.js
        `);

        // This keeps it in memory without running it!
        debugCache.set(scraperName, runner);

    }
});