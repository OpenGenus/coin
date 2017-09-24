// listen for new web page requests to the amazon.in site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {

            var trackId = code_bluehost_com;

            // if the url does not already contain the tracking id (OpenGenus Coin)
            return { redirectUrl: "https://www.bluehost.com/track/opengenus" };
            
        }
    },
    // only run for requests to the following urls
    { urls: ["https://www.bluehost.com/", "https://www.bluehost.com/track/*"] }, 
    // blocking permission necessary in order to perform the redirect
    ['blocking']    
);