chrome.action.onClicked.addListener(sendCurrentUrl);

function sendCurrentUrl() {
  // chrome.tabs.create({url: 'index.html'});
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const currentUrl = tabs[0].url;
    console.log(currentUrl);
    fetch(
        'http://jowu598.ltd:8888',
        {method: 'POST', mode: 'cors', body: JSON.stringify({url: currentUrl})})
  });
}
