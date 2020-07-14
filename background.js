fetch("https://api.myip.com")
  .then((response) => response.json())
  .then((data) => {
    var ip = data.ip;
    chrome.storage.local.set({ ip: ip });
  });
