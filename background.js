chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'RUN_SCRAPER') {
        const cookieString = "ph_phc_PF366Udfg1etPsVw8cx8tlB6ePhBp7KO6E7ncWcXKtd_posthog=%7B%22%24device_id%22%3A%220197d78c-0a58-7953-9469-3232c00be469%22%2C%22distinct_id%22%3A%22s3RAuxOIedTld6y9qFDWVrVfG002%22%2C%22%24sesid%22%3A%5B1769808217757%2C%22019c10be-8df8-722b-8ef1-ceafbf3daf8f%22%2C1769807449585%5D%2C%22%24epp%22%3Atrue%2C%22%24initial_person_info%22%3A%7B%22r%22%3A%22%24direct%22%2C%22u%22%3A%22https%3A%2F%2Fhiring.cafe%2F%22%7D%7D; cf_clearance=.CSXf_QtxRLxB0R7uqv5yCWrR1J8y.ySvKpmDuEDcl8-1774489841-1.2.1.1-Qf7JYecV810R1v6ZvJ2yfI5ckoeuIho2pNQwxX63uSFx7RltFDBaxp_hpW4RwsLsT.FjxFmiD5PfrsKeHnyzoiYneNwrfOW1F0k5HZeZRPKiSIWDgvq6P6Yc4jSb.pmIw4APOoNnCIN0_WoktzAABhQrciIcaJsVkkpC0Y99G2UaPYqk7IyLiBwFQa3r1hcoOwjQk1fSisLOxRVgxvhr03CT5JhUGVe4cBINgZS8et4; ph_phc_JGTYtvrmh9S1TaiGImeAB7KKa6u8IB15ZHJJvXkwNbp_posthog=%7B%22%24device_id%22%3A%22019c6f6d-cc43-754e-bde1-cf49f3d24328%22%2C%22distinct_id%22%3A%22019d27e1-d73e-71af-86bf-799c98cf156d%22%2C%22%24sesid%22%3A%5Bnull%2Cnull%2Cnull%5D%2C%22%24user_state%22%3A%22anonymous%22%7D";

        (async () => {
            try {
                // Set cookies first
                await setCookies(cookieString, "https://hiring.cafe");
                console.log("Cookies set successfully");

                // Perform the fetch
                const res = await fetch("https://hiring.cafe/api/search-jobs?s=JTdCJTIybG9jYXRpb25zJTIyJTNBJTVCJTdCJTIyZm9ybWF0dGVkX2FkZHJlc3MlMjIlM0ElMjJDYW5hZGElMjIlMkMlMjJ0eXBlcyUyMiUzQSU1QiUyMmNvdW50cnklMjIlNUQlMkMlMjJnZW9tZXRyeSUyMiUzQSU3QiUyMmxvY2F0aW9uJTIyJTNBJTdCJTIybGF0JTIyJTNBJTIyNDkuMjQ3NiUyMiUyQyUyMmxvbiUyMiUzQSUyMi0xMjMuMTIzNCUyMiU3RCU3RCUyQyUyMmlkJTIyJTNBJTIydXNlcl9jb3VudHJ5JTIyJTJDJTIyYWRkcmVzc19jb21wb25lbnRzJTIyJTNBJTVCJTdCJTIybG9uZ19uYW1lJTIyJTNBJTIyQ2FuYWRhJTIyJTJDJTIyc2hvcnRfbmFtZSUyMiUzQSUyMkNBJTIyJTJDJTIydHlwZXMlMjIlM0ElNUIlMjJjb3VudHJ5JTIyJTVEJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZsZXhpYmxlX3JlZ2lvbnMlMjIlM0ElNUIlMjJhbnl3aGVyZV9pbl9jb250aW5lbnQlMjIlMkMlMjJhbnl3aGVyZV9pbl93b3JsZCUyMiU1RCU3RCU3RCU1RCUyQyUyMndvcmtwbGFjZVR5cGVzJTIyJTNBJTVCJTIyUmVtb3RlJTIyJTJDJTIySHlicmlkJTIyJTJDJTIyT25zaXRlJTIyJTVEJTJDJTIyZGVmYXVsdFRvVXNlckxvY2F0aW9uJTIyJTNBdHJ1ZSUyQyUyMnVzZXJMb2NhdGlvbiUyMiUzQW51bGwlMkMlMjJwaHlzaWNhbEVudmlyb25tZW50cyUyMiUzQSU1QiUyMk9mZmljZSUyMiUyQyUyMk91dGRvb3IlMjIlMkMlMjJWZWhpY2xlJTIyJTJDJTIySW5kdXN0cmlhbCUyMiUyQyUyMkN1c3RvbWVyLUZhY2luZyUyMiU1RCUyQyUyMnBoeXNpY2FsTGFib3JJbnRlbnNpdHklMjIlM0ElNUIlMjJMb3clMjIlMkMlMjJNZWRpdW0lMjIlMkMlMjJIaWdoJTIyJTVEJTJDJTIycGh5c2ljYWxQb3NpdGlvbnMlMjIlM0ElNUIlMjJTaXR0aW5nJTIyJTJDJTIyU3RhbmRpbmclMjIlNUQlMkMlMjJvcmFsQ29tbXVuaWNhdGlvbkxldmVscyUyMiUzQSU1QiUyMkxvdyUyMiUyQyUyMk1lZGl1bSUyMiUyQyUyMkhpZ2glMjIlNUQlMkMlMjJjb21wdXRlclVzYWdlTGV2ZWxzJTIyJTNBJTVCJTIyTG93JTIyJTJDJTIyTWVkaXVtJTIyJTJDJTIySGlnaCUyMiU1RCUyQyUyMmNvZ25pdGl2ZURlbWFuZExldmVscyUyMiUzQSU1QiUyMkxvdyUyMiUyQyUyMk1lZGl1bSUyMiUyQyUyMkhpZ2glMjIlNUQlMkMlMjJjdXJyZW5jeSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyQW55JTIyJTJDJTIydmFsdWUlMjIlM0FudWxsJTdEJTJDJTIyZnJlcXVlbmN5JTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJBbnklMjIlMkMlMjJ2YWx1ZSUyMiUzQW51bGwlN0QlMkMlMjJtaW5Db21wZW5zYXRpb25Mb3dFbmQlMjIlM0FudWxsJTJDJTIybWluQ29tcGVuc2F0aW9uSGlnaEVuZCUyMiUzQW51bGwlMkMlMjJtYXhDb21wZW5zYXRpb25Mb3dFbmQlMjIlM0FudWxsJTJDJTIybWF4Q29tcGVuc2F0aW9uSGlnaEVuZCUyMiUzQW51bGwlMkMlMjJyZXN0cmljdEpvYnNUb1RyYW5zcGFyZW50U2FsYXJpZXMlMjIlM0FmYWxzZSUyQyUyMmNhbGNGcmVxdWVuY3klMjIlM0ElMjJZZWFybHklMjIlMkMlMjJjb21taXRtZW50VHlwZXMlMjIlM0ElNUIlMjJGdWxsJTIwVGltZSUyMiUyQyUyMlBhcnQlMjBUaW1lJTIyJTJDJTIyQ29udHJhY3QlMjIlMkMlMjJJbnRlcm5zaGlwJTIyJTJDJTIyVGVtcG9yYXJ5JTIyJTJDJTIyU2Vhc29uYWwlMjIlMkMlMjJWb2x1bnRlZXIlMjIlNUQlMkMlMjJqb2JUaXRsZVF1ZXJ5JTIyJTNBJTIyJTIyJTJDJTIyam9iRGVzY3JpcHRpb25RdWVyeSUyMiUzQSUyMiUyMiUyQyUyMmFzc29jaWF0ZXNEZWdyZWVGaWVsZHNPZlN0dWR5JTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRBc3NvY2lhdGVzRGVncmVlRmllbGRzT2ZTdHVkeSUyMiUzQSU1QiU1RCUyQyUyMmJhY2hlbG9yc0RlZ3JlZUZpZWxkc09mU3R1ZHklMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZEJhY2hlbG9yc0RlZ3JlZUZpZWxkc09mU3R1ZHklMjIlM0ElNUIlNUQlMkMlMjJtYXN0ZXJzRGVncmVlRmllbGRzT2ZTdHVkeSUyMiUzQSU1QiU1RCUyQyUyMmV4Y2x1ZGVkTWFzdGVyc0RlZ3JlZUZpZWxkc09mU3R1ZHklMjIlM0ElNUIlNUQlMkMlMjJkb2N0b3JhdGVEZWdyZWVGaWVsZHNPZlN0dWR5JTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWREb2N0b3JhdGVEZWdyZWVGaWVsZHNPZlN0dWR5JTIyJTNBJTVCJTVEJTJDJTIyYXNzb2NpYXRlc0RlZ3JlZVJlcXVpcmVtZW50cyUyMiUzQSU1QiU1RCUyQyUyMmJhY2hlbG9yc0RlZ3JlZVJlcXVpcmVtZW50cyUyMiUzQSU1QiU1RCUyQyUyMm1hc3RlcnNEZWdyZWVSZXF1aXJlbWVudHMlMjIlM0ElNUIlNUQlMkMlMjJkb2N0b3JhdGVEZWdyZWVSZXF1aXJlbWVudHMlMjIlM0ElNUIlNUQlMkMlMjJsaWNlbnNlc0FuZENlcnRpZmljYXRpb25zJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRMaWNlbnNlc0FuZENlcnRpZmljYXRpb25zJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZUFsbExpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnMlMjIlM0FmYWxzZSUyQyUyMnNlbmlvcml0eUxldmVsJTIyJTNBJTVCJTIyTm8lMjBQcmlvciUyMEV4cGVyaWVuY2UlMjBSZXF1aXJlZCUyMiUyQyUyMkVudHJ5JTIwTGV2ZWwlMjIlMkMlMjJNaWQlMjBMZXZlbCUyMiUyQyUyMlNlbmlvciUyMExldmVsJTIyJTVEJTJDJTIycm9sZVR5cGVzJTIyJTNBJTVCJTIySW5kaXZpZHVhbCUyMENvbnRyaWJ1dG9yJTIyJTJDJTIyUGVvcGxlJTIwTWFuYWdlciUyMiU1RCUyQyUyMnJvbGVZb2VSYW5nZSUyMiUzQSU1QjAlMkMyMCU1RCUyQyUyMmV4Y2x1ZGVJZlJvbGVZb2VJc05vdFNwZWNpZmllZCUyMiUzQWZhbHNlJTJDJTIybWFuYWdlbWVudFlvZVJhbmdlJTIyJTNBJTVCMCUyQzIwJTVEJTJDJTIyZXhjbHVkZUlmTWFuYWdlbWVudFlvZUlzTm90U3BlY2lmaWVkJTIyJTNBZmFsc2UlMkMlMjJzZWN1cml0eUNsZWFyYW5jZXMlMjIlM0ElNUIlMjJOb25lJTIyJTJDJTIyQ29uZmlkZW50aWFsJTIyJTJDJTIyU2VjcmV0JTIyJTJDJTIyVG9wJTIwU2VjcmV0JTIyJTJDJTIyVG9wJTIwU2VjcmV0JTJGU0NJJTIyJTJDJTIyUHVibGljJTIwVHJ1c3QlMjIlMkMlMjJJbnRlcmltJTIwQ2xlYXJhbmNlcyUyMiUyQyUyMk90aGVyJTIyJTVEJTJDJTIybGFuZ3VhZ2VSZXF1aXJlbWVudHMlMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZExhbmd1YWdlUmVxdWlyZW1lbnRzJTIyJTNBJTVCJTVEJTJDJTIybGFuZ3VhZ2VSZXF1aXJlbWVudHNPcGVyYXRvciUyMiUzQSUyMk9SJTIyJTJDJTIyZXhjbHVkZUpvYnNXaXRoQWRkaXRpb25hbExhbmd1YWdlUmVxdWlyZW1lbnRzJTIyJTNBZmFsc2UlMkMlMjJhaXJUcmF2ZWxSZXF1aXJlbWVudCUyMiUzQSU1QiUyMk5vbmUlMjIlMkMlMjJNaW5pbWFsJTIyJTJDJTIyTW9kZXJhdGUlMjIlMkMlMjJFeHRlbnNpdmUlMjIlNUQlMkMlMjJsYW5kVHJhdmVsUmVxdWlyZW1lbnQlMjIlM0ElNUIlMjJOb25lJTIyJTJDJTIyTWluaW1hbCUyMiUyQyUyMk1vZGVyYXRlJTIyJTJDJTIyRXh0ZW5zaXZlJTIyJTVEJTJDJTIybW9ybmluZ1NoaWZ0V29yayUyMiUzQSU1QiU1RCUyQyUyMmV2ZW5pbmdTaGlmdFdvcmslMjIlM0ElNUIlNUQlMkMlMjJvdmVybmlnaHRTaGlmdFdvcmslMjIlM0ElNUIlNUQlMkMlMjJ3ZWVrZW5kQXZhaWxhYmlsaXR5UmVxdWlyZWQlMjIlM0ElMjJEb2Vzbid0JTIwTWF0dGVyJTIyJTJDJTIyaG9saWRheUF2YWlsYWJpbGl0eVJlcXVpcmVkJTIyJTNBJTIyRG9lc24ndCUyME1hdHRlciUyMiUyQyUyMm92ZXJ0aW1lUmVxdWlyZWQlMjIlM0ElMjJEb2Vzbid0JTIwTWF0dGVyJTIyJTJDJTIyb25DYWxsUmVxdWlyZW1lbnRzJTIyJTNBJTVCJTIyTm9uZSUyMiUyQyUyMk9jY2FzaW9uYWwlMjAob25jZSUyMGElMjBtb250aCUyMG9yJTIwbGVzcyklMjIlMkMlMjJSZWd1bGFyJTIwKG9uY2UlMjBhJTIwd2VlayUyMG9yJTIwbW9yZSklMjIlNUQlMkMlMjJiZW5lZml0c0FuZFBlcmtzJTIyJTNBJTVCJTVEJTJDJTIyYXBwbGljYXRpb25Gb3JtRWFzZSUyMiUzQSU1QiU1RCUyQyUyMmNvbXBhbnlOYW1lcyUyMiUzQSU1QiU1RCUyQyUyMmV4Y2x1ZGVkQ29tcGFueU5hbWVzJTIyJTNBJTVCJTVEJTJDJTIyY29tcGFueUhxQ291bnRyaWVzJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRDb21wYW55SHFDb3VudHJpZXMlMjIlM0ElNUIlNUQlMkMlMjJ1c2FHb3ZQcmVmJTIyJTNBbnVsbCUyQyUyMmluZHVzdHJpZXMlMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZEluZHVzdHJpZXMlMjIlM0ElNUIlNUQlMkMlMjJjb21wYW55S2V5d29yZHMlMjIlM0ElNUIlNUQlMkMlMjJjb21wYW55S2V5d29yZHNCb29sZWFuT3BlcmF0b3IlMjIlM0ElMjJPUiUyMiUyQyUyMmV4Y2x1ZGVkQ29tcGFueUtleXdvcmRzJTIyJTNBJTVCJTVEJTJDJTIyaGlkZUpvYlR5cGVzJTIyJTNBJTVCJTVEJTJDJTIyZW5jb3VyYWdlZFRvQXBwbHklMjIlM0ElNUIlNUQlMkMlMjJzZWFyY2hRdWVyeSUyMiUzQSUyMnNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIyJTJDJTIyZGF0ZUZldGNoZWRQYXN0TkRheXMlMjIlM0EyJTJDJTIyaGlkZGVuQ29tcGFuaWVzJTIyJTNBJTVCJTVEJTJDJTIydXNlciUyMiUzQW51bGwlMkMlMjJzZWFyY2hNb2RlU2VsZWN0ZWRDb21wYW55JTIyJTNBbnVsbCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTVCJTVEJTJDJTIycmVzdHJpY3RlZFNlYXJjaEF0dHJpYnV0ZXMlMjIlM0ElNUIlNUQlMkMlMjJzb3J0QnklMjIlM0ElMjJleHBlcmllbmNlX2FzYyUyMiUyQyUyMnRlY2hub2xvZ3lLZXl3b3Jkc1F1ZXJ5JTIyJTNBJTIyJTIyJTJDJTIycmVxdWlyZW1lbnRzS2V5d29yZHNRdWVyeSUyMiUzQSUyMiUyMiUyQyUyMmNvbXBhbnlQdWJsaWNPclByaXZhdGUlMjIlM0ElMjJhbGwlMjIlMkMlMjJsYXRlc3RJbnZlc3RtZW50WWVhclJhbmdlJTIyJTNBJTVCbnVsbCUyQ251bGwlNUQlMkMlMjJsYXRlc3RJbnZlc3RtZW50U2VyaWVzJTIyJTNBJTVCJTVEJTJDJTIybGF0ZXN0SW52ZXN0bWVudEFtb3VudCUyMiUzQW51bGwlMkMlMjJsYXRlc3RJbnZlc3RtZW50Q3VycmVuY3klMjIlM0ElNUIlNUQlMkMlMjJpbnZlc3RvcnMlMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZEludmVzdG9ycyUyMiUzQSU1QiU1RCUyQyUyMmlzTm9uUHJvZml0JTIyJTNBJTIyYWxsJTIyJTJDJTIyb3JnYW5pemF0aW9uVHlwZXMlMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZE9yZ2FuaXphdGlvblR5cGVzJTIyJTNBJTVCJTVEJTJDJTIyY29tcGFueVNpemVSYW5nZXMlMjIlM0ElNUIlNUQlMkMlMjJtaW5ZZWFyRm91bmRlZCUyMiUzQW51bGwlMkMlMjJtYXhZZWFyRm91bmRlZCUyMiUzQW51bGwlMkMlMjJleGNsdWRlZExhdGVzdEludmVzdG1lbnRTZXJpZXMlMjIlM0ElNUIlNUQlN0Q=&size=40&page=0&sv=control", {
                    "headers": {
                        // DO NOT set the cookie header here! 
                        // The browser will attach the ones we set via chrome.cookies.set automatically.
                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:149.0) Gecko/20100101 Firefox/149.0",
                        "Accept": "*/*",
                        "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
                        "Sec-Fetch-Dest": "empty",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Site": "same-origin",
                        "Priority": "u=4"
                    },
                    "referrer": "https://hiring.cafe/?searchState=%7B%22searchQuery%22%3A%22software+developer%22%2C%22dateFetchedPastNDays%22%3A2%7D",
                    "method": "GET",
                    "mode": "cors"
                });

                if (!res.ok) {
                    const textArea = await res.text();
                    throw new Error(`HTTP Error: ${res.status} - Body: ${textArea.substring(0, 100)}...`);
                }

                const data = await res.json();
                console.log("Scrape successful:", data);
                sendResponse({ success: true, result: data });

            } catch (error) {
                console.error("Fetch failed:", error);
                sendResponse({ success: false, error: error.message });
            }
        })();

        return true; // Keep message channel open for async response
    }
});

/**
 * Helper to set cookies from a header string
 * @param {string} cookieString - "name1=val1; name2=val2"
 * @param {string} url - The domain URL to set them for
 */
async function setCookies(cookieString, url) {
    const cookies = cookieString.split('; ');
    const urlObj = new URL(url);

    for (const cookie of cookies) {
        const firstEqual = cookie.indexOf('=');
        if (firstEqual === -1) continue;

        const name = cookie.substring(0, firstEqual);
        const value = cookie.substring(firstEqual + 1);

        await chrome.cookies.set({
            url: url,
            name: name,
            value: value,
            domain: urlObj.hostname,
            path: "/"
        });
    }
}


/**
 * Scrapes job listings from hiring.cafe API based on search query
 * 
 * @param {string} searchQuery - The search term for job listings
 * @returns {Promise<Array>} - List of job objects or empty list if failed
 */
async function scrape(searchQuery) {
    // API endpoints
    const baseUrl = "https://hiring.cafe";
    const jobsEndpoint = `${baseUrl}/api/search-jobs`;
    // Search state configuration - comprehensive filter settings
    const searchState = {
        "locations": [{
            "formatted_address": "United States",
            "types": ["country"],
            "geometry": {
                "location": {
                    "lat": "39.8283",
                    "lon": "-98.5795"
                }
            },
            "id": "user_country",
            "address_components": [{
                "long_name": "United States",
                "short_name": "US",
                "types": ["country"]
            }],
            "options": {
                "flexible_regions": ["anywhere_in_continent", "anywhere_in_world"]
            }
        }],
        "workplaceTypes": ["Remote", "Hybrid", "Onsite"],
        "defaultToUserLocation": false,
        "userLocation": null,
        "physicalEnvironments": ["Office", "Outdoor", "Vehicle", "Industrial", "Customer-Facing"],
        "physicalLaborIntensity": ["Low", "Medium", "High"],
        "physicalPositions": ["Sitting", "Standing"],
        "oralCommunicationLevels": ["Low", "Medium", "High"],
        "computerUsageLevels": ["Low", "Medium", "High"],
        "cognitiveDemandLevels": ["Low", "Medium", "High"],
        "currency": { "label": "Any", "value": null },
        "frequency": { "label": "Any", "value": null },
        "minCompensationLowEnd": null,
        "minCompensationHighEnd": null,
        "maxCompensationLowEnd": null,
        "maxCompensationHighEnd": null,
        "restrictJobsToTransparentSalaries": false,
        "calcFrequency": "Yearly",
        "commitmentTypes": ["Full Time", "Part Time", "Contract", "Internship", "Temporary", "Seasonal", "Volunteer"],
        "jobTitleQuery": "",
        "jobDescriptionQuery": "",
        "associatesDegreeFieldsOfStudy": [],
        "excludedAssociatesDegreeFieldsOfStudy": [],
        "bachelorsDegreeFieldsOfStudy": [],
        "excludedBachelorsDegreeFieldsOfStudy": [],
        "mastersDegreeFieldsOfStudy": [],
        "excludedMastersDegreeFieldsOfStudy": [],
        "doctorateDegreeFieldsOfStudy": [],
        "excludedDoctorateDegreeFieldsOfStudy": [],
        "associatesDegreeRequirements": [],
        "bachelorsDegreeRequirements": [],
        "mastersDegreeRequirements": [],
        "doctorateDegreeRequirements": [],
        "licensesAndCertifications": [],
        "excludedLicensesAndCertifications": [],
        "excludeAllLicensesAndCertifications": false,
        "seniorityLevel": ["No Prior Experience Required", "Entry Level", "Mid Level"],
        "roleTypes": ["Individual Contributor", "People Manager"],
        "roleYoeRange": [0, 20],
        "excludeIfRoleYoeIsNotSpecified": false,
        "managementYoeRange": [0, 20],
        "excludeIfManagementYoeIsNotSpecified": false,
        "securityClearances": ["None", "Confidential", "Secret", "Top Secret", "Top Secret/SCI", "Public Trust", "Interim Clearances", "Other"],
        "languageRequirements": [],
        "excludedLanguageRequirements": [],
        "languageRequirementsOperator": "OR",
        "excludeJobsWithAdditionalLanguageRequirements": false,
        "airTravelRequirement": ["None", "Minimal", "Moderate", "Extensive"],
        "landTravelRequirement": ["None", "Minimal", "Moderate", "Extensive"],
        "morningShiftWork": [],
        "eveningShiftWork": [],
        "overnightShiftWork": [],
        "weekendAvailabilityRequired": "Doesn't Matter",
        "holidayAvailabilityRequired": "Doesn't Matter",
        "overtimeRequired": "Doesn't Matter",
        "onCallRequirements": ["None", "Occasional (once a month or less)", "Regular (once a week or more)"],
        "benefitsAndPerks": [],
        "applicationFormEase": [],
        "companyNames": [],
        "excludedCompanyNames": [],
        "usaGovPref": null,
        "industries": [],
        "excludedIndustries": [],
        "companyKeywords": [],
        "companyKeywordsBooleanOperator": "OR",
        "excludedCompanyKeywords": [],
        "hideJobTypes": [],
        "encouragedToApply": [],
        "searchQuery": searchQuery, // Dynamic search query
        "dateFetchedPastNDays": 61,
        "hiddenCompanies": [],
        "user": null,
        "searchModeSelectedCompany": null,
        "departments": [],
        "restrictedSearchAttributes": [],
        "sortBy": "default",
        "technologyKeywordsQuery": "",
        "requirementsKeywordsQuery": "",
        "companyPublicOrPrivate": "all",
        "latestInvestmentYearRange": [null, null],
        "latestInvestmentSeries": [],
        "latestInvestmentAmount": null,
        "latestInvestmentCurrency": [],
        "investors": [],
        "excludedInvestors": [],
        "isNonProfit": "all",
        "companySizeRanges": [],
        "minYearFounded": null,
        "maxYearFounded": null,
        "excludedLatestInvestmentSeries": []
    };
    // Encode search state the same way the browser does:
    // btoa(encodeURIComponent(JSON.stringify(state)))
    const encodeState = (state) =>
        Buffer.from(encodeURIComponent(JSON.stringify(state))).toString('base64');
    // btoa(encodeURIComponent(JSON.stringify(state)));


    try {

        // Scrape jobs with pagination
        const allJobs = [];
        let page = 0;

        while (true) {
            console.log(`\nGetting page ${page} with size 1000...`);

            const encodedState = encodeState(searchState);
            const url = `${jobsEndpoint}?s=${encodedState}&size=1000&page=${page}`;

            const jobsResponse = await fetch("https://hiring.cafe/api/search-jobs?s=JTdCJTIybG9jYXRpb25zJTIyJTNBJTVCJTdCJTIyZm9ybWF0dGVkX2FkZHJlc3MlMjIlM0ElMjJDYW5hZGElMjIlMkMlMjJ0eXBlcyUyMiUzQSU1QiUyMmNvdW50cnklMjIlNUQlMkMlMjJnZW9tZXRyeSUyMiUzQSU3QiUyMmxvY2F0aW9uJTIyJTNBJTdCJTIybGF0JTIyJTNBJTIyNDkuMjQ3NiUyMiUyQyUyMmxvbiUyMiUzQSUyMi0xMjMuMTIzNCUyMiU3RCU3RCUyQyUyMmlkJTIyJTNBJTIydXNlcl9jb3VudHJ5JTIyJTJDJTIyYWRkcmVzc19jb21wb25lbnRzJTIyJTNBJTVCJTdCJTIybG9uZ19uYW1lJTIyJTNBJTIyQ2FuYWRhJTIyJTJDJTIyc2hvcnRfbmFtZSUyMiUzQSUyMkNBJTIyJTJDJTIydHlwZXMlMjIlM0ElNUIlMjJjb3VudHJ5JTIyJTVEJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZsZXhpYmxlX3JlZ2lvbnMlMjIlM0ElNUIlMjJhbnl3aGVyZV9pbl9jb250aW5lbnQlMjIlMkMlMjJhbnl3aGVyZV9pbl93b3JsZCUyMiU1RCU3RCU3RCU1RCUyQyUyMndvcmtwbGFjZVR5cGVzJTIyJTNBJTVCJTIyUmVtb3RlJTIyJTJDJTIySHlicmlkJTIyJTJDJTIyT25zaXRlJTIyJTVEJTJDJTIyZGVmYXVsdFRvVXNlckxvY2F0aW9uJTIyJTNBdHJ1ZSUyQyUyMnVzZXJMb2NhdGlvbiUyMiUzQW51bGwlMkMlMjJwaHlzaWNhbEVudmlyb25tZW50cyUyMiUzQSU1QiUyMk9mZmljZSUyMiUyQyUyMk91dGRvb3IlMjIlMkMlMjJWZWhpY2xlJTIyJTJDJTIySW5kdXN0cmlhbCUyMiUyQyUyMkN1c3RvbWVyLUZhY2luZyUyMiU1RCUyQyUyMnBoeXNpY2FsTGFib3JJbnRlbnNpdHklMjIlM0ElNUIlMjJMb3clMjIlMkMlMjJNZWRpdW0lMjIlMkMlMjJIaWdoJTIyJTVEJTJDJTIycGh5c2ljYWxQb3NpdGlvbnMlMjIlM0ElNUIlMjJTaXR0aW5nJTIyJTJDJTIyU3RhbmRpbmclMjIlNUQlMkMlMjJvcmFsQ29tbXVuaWNhdGlvbkxldmVscyUyMiUzQSU1QiUyMkxvdyUyMiUyQyUyMk1lZGl1bSUyMiUyQyUyMkhpZ2glMjIlNUQlMkMlMjJjb21wdXRlclVzYWdlTGV2ZWxzJTIyJTNBJTVCJTIyTG93JTIyJTJDJTIyTWVkaXVtJTIyJTJDJTIySGlnaCUyMiU1RCUyQyUyMmNvZ25pdGl2ZURlbWFuZExldmVscyUyMiUzQSU1QiUyMkxvdyUyMiUyQyUyMk1lZGl1bSUyMiUyQyUyMkhpZ2glMjIlNUQlMkMlMjJjdXJyZW5jeSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyQW55JTIyJTJDJTIydmFsdWUlMjIlM0FudWxsJTdEJTJDJTIyZnJlcXVlbmN5JTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJBbnklMjIlMkMlMjJ2YWx1ZSUyMiUzQW51bGwlN0QlMkMlMjJtaW5Db21wZW5zYXRpb25Mb3dFbmQlMjIlM0FudWxsJTJDJTIybWluQ29tcGVuc2F0aW9uSGlnaEVuZCUyMiUzQW51bGwlMkMlMjJtYXhDb21wZW5zYXRpb25Mb3dFbmQlMjIlM0FudWxsJTJDJTIybWF4Q29tcGVuc2F0aW9uSGlnaEVuZCUyMiUzQW51bGwlMkMlMjJyZXN0cmljdEpvYnNUb1RyYW5zcGFyZW50U2FsYXJpZXMlMjIlM0FmYWxzZSUyQyUyMmNhbGNGcmVxdWVuY3klMjIlM0ElMjJZZWFybHklMjIlMkMlMjJjb21taXRtZW50VHlwZXMlMjIlM0ElNUIlMjJGdWxsJTIwVGltZSUyMiUyQyUyMlBhcnQlMjBUaW1lJTIyJTJDJTIyQ29udHJhY3QlMjIlMkMlMjJJbnRlcm5zaGlwJTIyJTJDJTIyVGVtcG9yYXJ5JTIyJTJDJTIyU2Vhc29uYWwlMjIlMkMlMjJWb2x1bnRlZXIlMjIlNUQlMkMlMjJqb2JUaXRsZVF1ZXJ5JTIyJTNBJTIyJTIyJTJDJTIyam9iRGVzY3JpcHRpb25RdWVyeSUyMiUzQSUyMiUyMiUyQyUyMmFzc29jaWF0ZXNEZWdyZWVGaWVsZHNPZlN0dWR5JTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRBc3NvY2lhdGVzRGVncmVlRmllbGRzT2ZTdHVkeSUyMiUzQSU1QiU1RCUyQyUyMmJhY2hlbG9yc0RlZ3JlZUZpZWxkc09mU3R1ZHklMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZEJhY2hlbG9yc0RlZ3JlZUZpZWxkc09mU3R1ZHklMjIlM0ElNUIlNUQlMkMlMjJtYXN0ZXJzRGVncmVlRmllbGRzT2ZTdHVkeSUyMiUzQSU1QiU1RCUyQyUyMmV4Y2x1ZGVkTWFzdGVyc0RlZ3JlZUZpZWxkc09mU3R1ZHklMjIlM0ElNUIlNUQlMkMlMjJkb2N0b3JhdGVEZWdyZWVGaWVsZHNPZlN0dWR5JTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWREb2N0b3JhdGVEZWdyZWVGaWVsZHNPZlN0dWR5JTIyJTNBJTVCJTVEJTJDJTIyYXNzb2NpYXRlc0RlZ3JlZVJlcXVpcmVtZW50cyUyMiUzQSU1QiU1RCUyQyUyMmJhY2hlbG9yc0RlZ3JlZVJlcXVpcmVtZW50cyUyMiUzQSU1QiU1RCUyQyUyMm1hc3RlcnNEZWdyZWVSZXF1aXJlbWVudHMlMjIlM0ElNUIlNUQlMkMlMjJkb2N0b3JhdGVEZWdyZWVSZXF1aXJlbWVudHMlMjIlM0ElNUIlNUQlMkMlMjJsaWNlbnNlc0FuZENlcnRpZmljYXRpb25zJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRMaWNlbnNlc0FuZENlcnRpZmljYXRpb25zJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZUFsbExpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnMlMjIlM0FmYWxzZSUyQyUyMnNlbmlvcml0eUxldmVsJTIyJTNBJTVCJTIyTm8lMjBQcmlvciUyMEV4cGVyaWVuY2UlMjBSZXF1aXJlZCUyMiUyQyUyMkVudHJ5JTIwTGV2ZWwlMjIlMkMlMjJNaWQlMjBMZXZlbCUyMiUyQyUyMlNlbmlvciUyMExldmVsJTIyJTVEJTJDJTIycm9sZVR5cGVzJTIyJTNBJTVCJTIySW5kaXZpZHVhbCUyMENvbnRyaWJ1dG9yJTIyJTJDJTIyUGVvcGxlJTIwTWFuYWdlciUyMiU1RCUyQyUyMnJvbGVZb2VSYW5nZSUyMiUzQSU1QjAlMkMyMCU1RCUyQyUyMmV4Y2x1ZGVJZlJvbGVZb2VJc05vdFNwZWNpZmllZCUyMiUzQWZhbHNlJTJDJTIybWFuYWdlbWVudFlvZVJhbmdlJTIyJTNBJTVCMCUyQzIwJTVEJTJDJTIyZXhjbHVkZUlmTWFuYWdlbWVudFlvZUlzTm90U3BlY2lmaWVkJTIyJTNBZmFsc2UlMkMlMjJzZWN1cml0eUNsZWFyYW5jZXMlMjIlM0ElNUIlMjJOb25lJTIyJTJDJTIyQ29uZmlkZW50aWFsJTIyJTJDJTIyU2VjcmV0JTIyJTJDJTIyVG9wJTIwU2VjcmV0JTIyJTJDJTIyVG9wJTIwU2VjcmV0JTJGU0NJJTIyJTJDJTIyUHVibGljJTIwVHJ1c3QlMjIlMkMlMjJJbnRlcmltJTIwQ2xlYXJhbmNlcyUyMiUyQyUyMk90aGVyJTIyJTVEJTJDJTIybGFuZ3VhZ2VSZXF1aXJlbWVudHMlMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZExhbmd1YWdlUmVxdWlyZW1lbnRzJTIyJTNBJTVCJTVEJTJDJTIybGFuZ3VhZ2VSZXF1aXJlbWVudHNPcGVyYXRvciUyMiUzQSUyMk9SJTIyJTJDJTIyZXhjbHVkZUpvYnNXaXRoQWRkaXRpb25hbExhbmd1YWdlUmVxdWlyZW1lbnRzJTIyJTNBZmFsc2UlMkMlMjJhaXJUcmF2ZWxSZXF1aXJlbWVudCUyMiUzQSU1QiUyMk5vbmUlMjIlMkMlMjJNaW5pbWFsJTIyJTJDJTIyTW9kZXJhdGUlMjIlMkMlMjJFeHRlbnNpdmUlMjIlNUQlMkMlMjJsYW5kVHJhdmVsUmVxdWlyZW1lbnQlMjIlM0ElNUIlMjJOb25lJTIyJTJDJTIyTWluaW1hbCUyMiUyQyUyMk1vZGVyYXRlJTIyJTJDJTIyRXh0ZW5zaXZlJTIyJTVEJTJDJTIybW9ybmluZ1NoaWZ0V29yayUyMiUzQSU1QiU1RCUyQyUyMmV2ZW5pbmdTaGlmdFdvcmslMjIlM0ElNUIlNUQlMkMlMjJvdmVybmlnaHRTaGlmdFdvcmslMjIlM0ElNUIlNUQlMkMlMjJ3ZWVrZW5kQXZhaWxhYmlsaXR5UmVxdWlyZWQlMjIlM0ElMjJEb2Vzbid0JTIwTWF0dGVyJTIyJTJDJTIyaG9saWRheUF2YWlsYWJpbGl0eVJlcXVpcmVkJTIyJTNBJTIyRG9lc24ndCUyME1hdHRlciUyMiUyQyUyMm92ZXJ0aW1lUmVxdWlyZWQlMjIlM0ElMjJEb2Vzbid0JTIwTWF0dGVyJTIyJTJDJTIyb25DYWxsUmVxdWlyZW1lbnRzJTIyJTNBJTVCJTIyTm9uZSUyMiUyQyUyMk9jY2FzaW9uYWwlMjAob25jZSUyMGElMjBtb250aCUyMG9yJTIwbGVzcyklMjIlMkMlMjJSZWd1bGFyJTIwKG9uY2UlMjBhJTIwd2VlayUyMG9yJTIwbW9yZSklMjIlNUQlMkMlMjJiZW5lZml0c0FuZFBlcmtzJTIyJTNBJTVCJTVEJTJDJTIyYXBwbGljYXRpb25Gb3JtRWFzZSUyMiUzQSU1QiU1RCUyQyUyMmNvbXBhbnlOYW1lcyUyMiUzQSU1QiU1RCUyQyUyMmV4Y2x1ZGVkQ29tcGFueU5hbWVzJTIyJTNBJTVCJTVEJTJDJTIyY29tcGFueUhxQ291bnRyaWVzJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRDb21wYW55SHFDb3VudHJpZXMlMjIlM0ElNUIlNUQlMkMlMjJ1c2FHb3ZQcmVmJTIyJTNBbnVsbCUyQyUyMmluZHVzdHJpZXMlMjIlM0ElNUIlNUQlMkMlMjJleGNsdWRlZEluZHVzdHJpZXMlMjIlM0ElNUIlNUQlMkMlMjJjb21wYW55S2V5d29yZHMlMjIlM0ElNUIlNUQlMkMlMjJjb21wYW55S2V5d29yZHNCb29sZWFuT3BlcmF0b3IlMjIlM0ElMjJPUiUyMiUyQyUyMmV4Y2x1ZGVkQ29tcGFueUtleXdvcmRzJTIyJTNBJTVCJTVEJTJDJTIyaGlkZUpvYlR5cGVzJTIyJTNBJTVCJTVEJTJDJTIyZW5jb3VyYWdlZFRvQXBwbHklMjIlM0ElNUIlNUQlMkMlMjJzZWFyY2hRdWVyeSUyMiUzQSUyMnNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIyJTJDJTIyZGF0ZUZldGNoZWRQYXN0TkRheXMlMjIlM0ExMjElMkMlMjJoaWRkZW5Db21wYW5pZXMlMjIlM0ElNUIlNUQlMkMlMjJ1c2VyJTIyJTNBbnVsbCUyQyUyMnNlYXJjaE1vZGVTZWxlY3RlZENvbXBhbnklMjIlM0FudWxsJTJDJTIyZGVwYXJ0bWVudHMlMjIlM0ElNUIlNUQlMkMlMjJyZXN0cmljdGVkU2VhcmNoQXR0cmlidXRlcyUyMiUzQSU1QiU1RCUyQyUyMnNvcnRCeSUyMiUzQSUyMmRlZmF1bHQlMjIlMkMlMjJ0ZWNobm9sb2d5S2V5d29yZHNRdWVyeSUyMiUzQSUyMiUyMiUyQyUyMnJlcXVpcmVtZW50c0tleXdvcmRzUXVlcnklMjIlM0ElMjIlMjIlMkMlMjJjb21wYW55UHVibGljT3JQcml2YXRlJTIyJTNBJTIyYWxsJTIyJTJDJTIybGF0ZXN0SW52ZXN0bWVudFllYXJSYW5nZSUyMiUzQSU1Qm51bGwlMkNudWxsJTVEJTJDJTIybGF0ZXN0SW52ZXN0bWVudFNlcmllcyUyMiUzQSU1QiU1RCUyQyUyMmxhdGVzdEludmVzdG1lbnRBbW91bnQlMjIlM0FudWxsJTJDJTIybGF0ZXN0SW52ZXN0bWVudEN1cnJlbmN5JTIyJTNBJTVCJTVEJTJDJTIyaW52ZXN0b3JzJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRJbnZlc3RvcnMlMjIlM0ElNUIlNUQlMkMlMjJpc05vblByb2ZpdCUyMiUzQSUyMmFsbCUyMiUyQyUyMm9yZ2FuaXphdGlvblR5cGVzJTIyJTNBJTVCJTVEJTJDJTIyZXhjbHVkZWRPcmdhbml6YXRpb25UeXBlcyUyMiUzQSU1QiU1RCUyQyUyMmNvbXBhbnlTaXplUmFuZ2VzJTIyJTNBJTVCJTVEJTJDJTIybWluWWVhckZvdW5kZWQlMjIlM0FudWxsJTJDJTIybWF4WWVhckZvdW5kZWQlMjIlM0FudWxsJTJDJTIyZXhjbHVkZWRMYXRlc3RJbnZlc3RtZW50U2VyaWVzJTIyJTNBJTVCJTVEJTdE&size=40&page=0&sv=control", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "if-none-match": "W/\"errdntz64m13np1\"",
                    "priority": "u=1, i",
                    "sec-ch-ua": "\"Chromium\";v=\"146\", \"Not-A.Brand\";v=\"24\", \"Google Chrome\";v=\"146\"",
                    "sec-ch-ua-arch": "\"arm\"",
                    "sec-ch-ua-bitness": "\"64\"",
                    "sec-ch-ua-full-version": "\"146.0.7680.154\"",
                    "sec-ch-ua-full-version-list": "\"Chromium\";v=\"146.0.7680.154\", \"Not-A.Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"146.0.7680.154\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-model": "\"\"",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-ch-ua-platform-version": "\"12.7.6\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "cookie": "cf_clearance=jonNHs1lzRCYgXgkHnBFgmwjNwCAPteX4dQjc7DC01g-1774418783-1.2.1.1-SJcltSbjaxngIePYLpn8iOLfHaxgCmutGzP9Et0eBj2egUHUJ_OqjyiqejEB3wGr3RUTJQnzejcfm3jFtRfSMNKRH5KkDPiBpze0Qtun2uhSVKESR0cU5w.WFpyabYCfP8vjeCNYHcEZZGLtz6mIWfGGVBY9PCmpWSI3VXX_DCYAh.HkZwYgPMUS9mH5HfVN0Q2N64R1N8MlMBzzbmnsnCbFiPCfsgwkMsT85M5NtOs; _ga=GA1.1.2014515038.1774418784; _ga_KJCD0N6Q7T=GS2.1.s1774418784$o1$g1$t1774418846$j60$l0$h0; ph_phc_JGTYtvrmh9S1TaiGImeAB7KKa6u8IB15ZHJJvXkwNbp_posthog=%7B%22%24device_id%22%3A%22019d2399-f04b-7e08-8f7b-15081c57506c%22%2C%22distinct_id%22%3A%22019d239a-e410-7e26-ae61-292e15d9969a%22%2C%22%24sesid%22%3A%5B1774418846744%2C%22019d239a-e418-716d-a7db-ae7aec2d3cec%22%2C1774418846744%5D%2C%22%24user_state%22%3A%22anonymous%22%7D",
                    "Referer": "https://hiring.cafe/?searchState=%7B%22searchQuery%22%3A%22software+developer%22%7D",
                    "Origin": "lololo",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
                    "If-Modified-Since": "0"
                },
                "body": null,
                "method": "GET"
            });

            console.log(`Jobs API Status: ${jobsResponse.status}`);

            if (jobsResponse.ok) {
                try {
                    const jobsData = await jobsResponse.json();
                    let currentBatch = [];

                    if (Array.isArray(jobsData)) {
                        currentBatch = jobsData;
                    } else if (jobsData && typeof jobsData === 'object') {
                        // Look for job data in various possible keys
                        const possibleKeys = ['results', 'jobs', 'data', 'items', 'content'];
                        for (const key of possibleKeys) {
                            if (Array.isArray(jobsData[key])) {
                                currentBatch = jobsData[key];
                                console.log(`Found jobs in '${key}': ${currentBatch.length} items`);
                                break;
                            }
                        }

                        if (currentBatch.length === 0 && jobsData.hits && typeof jobsData.hits === 'object') {
                            // Elasticsearch-style response
                            const hits = jobsData.hits.hits;
                            if (Array.isArray(hits)) {
                                currentBatch = hits.map(hit => hit._source || hit);
                                console.log(`Found jobs in Elasticsearch format: ${currentBatch.length} items`);
                            }
                        }
                    }

                    if (currentBatch.length === 0) {
                        console.log("No jobs found in this batch");
                        break;
                    }

                    // Add to our collection
                    allJobs.push(...currentBatch);
                    console.log(`Total jobs collected so far: ${allJobs.length}`);

                    // Check if we have more pages
                    if (currentBatch.length < 1000) {
                        console.log("Reached end of results");
                        break;
                    }

                    page++;

                    // Safety check to avoid infinite loop
                    // if (page > 50) { // Max 50 pages
                    //     console.log("Reached maximum page limit");
                    //     break;
                    // }
                    break; // just get one page for now

                } catch (e) {
                    console.error("Jobs response JSON parse error");
                    break;
                }
            } else {
                const errorText = await jobsResponse.text;
                console.log(`Jobs API failed: ${jobsResponse.status}`);
                console.log("Error response:", errorText.substring(0, 300));
                break;
            }
        }

        if (allJobs.length > 0) {
            console.log(`\nSuccessfully scraped ${allJobs.length} jobs for '${searchQuery}'`);
            return allJobs;
        } else {
            console.log("No jobs found");
            return [];
        }

    } catch (error) {
        console.error("Request error:", error);
        return [];
    }
}



// Intercept network responses to inject CORS headers
// chrome.webRequest.onHeadersReceived.addListener(
//     function (details) {
//         let headers = details.responseHeaders;

//         // Remove existing CORS headers to avoid duplicates or conflicts
//         headers = headers.filter(h => !h.name.toLowerCase().startsWith('access-control-allow-'));

//         // If Access-Control-Allow-Credentials is true, Access-Control-Allow-Origin cannot be '*'
//         // Firefox uses details.originUrl, Chrome uses details.initiator
//         let origin = '*';
//         try {
//             if (details.originUrl) {
//                 origin = new URL(details.originUrl).origin;
//             } else if (details.initiator) {
//                 origin = details.initiator;
//             }
//         } catch (e) { }
//         //headers.push({ name: 'Access-Control-Allow-Origin', value: origin !== 'null' ? origin : '*' });
//         headers.push({ name: 'Access-Control-Allow-Origin', value: origin });
//         headers.push({ name: 'Access-Control-Allow-Methods', value: '*' });
//         headers.push({ name: 'Access-Control-Allow-Headers', value: '*' });
//         headers.push({ name: 'Access-Control-Allow-Credentials', value: 'true' });
//         headers.push({ name: 'Access-Control-Allow-Private-Network', value: 'true' });

//         console.log(`Intercepted and modified CORS for [${details.method}]:`, details.url);

//         return { responseHeaders: headers };
//     },
//     { urls: ["*://hiring.cafe/*", "*://*.hiring.cafe/*"] },
//     ["blocking", "responseHeaders"]
// );

// // Intercept outgoing requests to spoof headers to bypass Cloudflare and prevent preflights
// chrome.webRequest.onBeforeSendHeaders.addListener(
//     function (details) {
//         let headers = details.requestHeaders || [];

//         let targetOrigin = '*';
//         try {
//             targetOrigin = new URL(details.url).origin;
//         } catch (e) { }

//         const spoofedHeaders = {
//             "accept": "*/*",
//             "accept-language": "en-US,en;q=0.9",
//             "if-none-match": "W/\"6b0v1tjxsgk22b\"",
//             "priority": "u=1, i",
//             "sec-ch-ua": "\"Chromium\";v=\"146\", \"Not-A.Brand\";v=\"24\", \"Google Chrome\";v=\"146\"",
//             "sec-ch-ua-arch": "\"arm\"",
//             "sec-ch-ua-bitness": "\"64\"",
//             "sec-ch-ua-full-version": "\"146.0.7680.154\"",
//             "sec-ch-ua-full-version-list": "\"Chromium\";v=\"146.0.7680.154\", \"Not-A.Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"146.0.7680.154\"",
//             "sec-ch-ua-mobile": "?0",
//             "sec-ch-ua-model": "\"\"",
//             "sec-ch-ua-platform": "\"macOS\"",
//             "sec-ch-ua-platform-version": "\"12.7.6\"",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-origin",
//             "cookie": "cf_clearance=o9XepXBs_GSzicAPzhUwNq4mBH8rmFm533Caa0_Etz0-1774402529-1.2.1.1-3nk5Z0nw7fc6ncy3Vv5qnCL9rY8BZrjbG0RaNbKtQCuS_tOh8QxDCU3tYNFCoJGCN.C36otco5n.VGCQpIA3BwjEd4VXjtorRb7JScYas89aJa.XAjWsIJw3AdV6E0CBgnDcFu.EVXES2rKnZzvyNqh52wGz3rht8btnklYbbr_GBIypIURvCqLDnrt9FvcKL.ToVdqOJLcJ.XpPMIzfhXPTKYKBz2CTOo2N1v8pJKw; _ga=GA1.1.586339869.1774402530; _ga_KJCD0N6Q7T=GS2.1.s1774402529$o1$g1$t1774402540$j49$l0$h0; ph_phc_JGTYtvrmh9S1TaiGImeAB7KKa6u8IB15ZHJJvXkwNbp_posthog=%7B%22%24device_id%22%3A%22019d22a1-e8c7-7af5-b703-03914c17a899%22%2C%22distinct_id%22%3A%22019d22a2-1697-7971-87c3-606c7cf90e51%22%2C%22%24sesid%22%3A%5B1774402541220%2C%22019d22a2-169d-7c07-a0b7-ea20394b24e7%22%2C1774402541213%5D%2C%22%24user_state%22%3A%22anonymous%22%7D",
//             "referer": "https://hiring.cafe/?searchState=%7B%22searchQuery%22%3A%22software+developer%22%2C%22dateFetchedPastNDays%22%3A2%2C%22sortBy%22%3A%22experience_asc%22%7D",
//             "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.7680.80 Safari/537.36"
//         };

//         // We also want to spoof Origin dynamically to match the target request
//         if (targetOrigin && targetOrigin !== 'null' && targetOrigin !== '*') {
//             spoofedHeaders['origin'] = targetOrigin;
//         }

//         let seenHeaders = new Set();

//         for (let h of headers) {
//             let name = h.name.toLowerCase();
//             if (spoofedHeaders[name] !== undefined) {
//                 h.value = spoofedHeaders[name];
//                 seenHeaders.add(name);
//             }
//         }

//         // Add any missing headers that weren't originally in the request
//         for (let [name, value] of Object.entries(spoofedHeaders)) {
//             if (!seenHeaders.has(name)) {
//                 headers.push({ name: name, value: value });
//             }
//         }

//         console.log(`Spoofed ALL headers for [${details.method}]:`, details.url);

//         return { requestHeaders: headers };
//     },
//     { urls: ["*://hiring.cafe/*", "*://*.hiring.cafe/*"] },
//     ["blocking", "requestHeaders"]
// );
