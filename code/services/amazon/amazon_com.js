// listen for new web page requests to the amazon.com site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = code_amazon_com;

            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: webcoin(details.url, _key, trackId) };
            }
        }
    },
    {
        urls: [
            "http://www.amazon.com/*",      "https://www.amazon.com/*",
            "http://smile.amazon.com/*",    "https://smile.amazon.com/*"]
    }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);