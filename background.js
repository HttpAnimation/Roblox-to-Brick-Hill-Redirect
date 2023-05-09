const redirectUrl = "https://www.brick-hill.com/dashboard";

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("roblox.com")) {
      return {redirectUrl: redirectUrl};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
