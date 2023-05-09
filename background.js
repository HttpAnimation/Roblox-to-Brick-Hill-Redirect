const redirectUrl = "https://www.brick-hill.com/dashboard";

function redirect(requestDetails) {
  if (requestDetails.url.includes("roblox.com")) {
    return {redirectUrl: redirectUrl};
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls: ["<all_urls>"]},
  ["blocking"]
);
