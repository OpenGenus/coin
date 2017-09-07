// listen for new web page requests to the amazon.in site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {

            var trackId = code_amazon_in;

            // if the url does not already contain the tracking id (OpenGenus Coin)
            if (details.url.search(trackId) == -1 && 
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: webcoin(details.url, _key, trackId) };
            }
        }
    },
    // only run for requests to the following urls
    { urls: ["http://www.amazon.in/*", "https://www.amazon.in/*"] }, 
    // blocking permission necessary in order to perform the redirect
    ['blocking']    
);