chrome.action.onClicked.addListener(async (tab) => {
  // Reload the current active tab
  await chrome.tabs.reload(tab.id, { bypassCache: true });

  // After the page reloads, send a message to the content script to check for changes
  chrome.tabs.sendMessage(tab.id, { action: "checkForChanges" });
});
