chrome.runtime.onConnect.addListener((port) => {
    if (port.name === 'scraper-port') {
        port.onMessage.addListener(async (message) => {
            if (message.type === 'RUN_SCRAPER') {
                const { code, parameters } = message.payload;

                try {
                    // Pre-define helpers that might be needed by the scraper
                    const helpers = {
                        setCookies: setCookies
                    };

                    // Construct an async function wrapper
                    // We pass helpers to the function so the scraper can use them if needed,
                    // although they are also in the global scope of this service worker.
                    const runner = new Function('params', 'helpers', `
                        const { setCookies } = helpers;
                        ${code}
                        if (typeof scrape === 'function') {
                            return scrape(...params);
                        }
                        throw new Error("No 'scrape' function detected in provided source.");
                    `);

                    for await (let jobs of runner(parameters, helpers)) {
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