function webcoin(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

// listen for click on the extensions toolbar button
chrome.browserAction.onClicked.addListener(
    function (tab) {
        chrome.tabs.create(
            {
                'url': 'http://opengenus.org',
                'selected': true
            },
            function (tab) {
                // tab opened, further processing takes place in content.js                
            }
        );
    }
);
