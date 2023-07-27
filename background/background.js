let total = 0;
let prevTotal = 0;
let functionIsRunning = false;

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  switch (obj.command) {
    case "start":
      start(obj.intervalTime);
      response({ msg: "started" });
      break;
    case "stop":
      functionIsRunning = false;
      response({ msg: "stopped" });
      break;
    default:
  }
});

async function start(intervalTime) {
  functionIsRunning = true;
  var functionTab = await getCurrentTab();

  while (functionIsRunning) {
    chrome.tabs.reload(functionTab.id);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    var response = await chrome.tabs.sendMessage(functionTab.id, {
      command: "check",
    });
    total = response.total;
    diff = total - prevTotal;
    console.log("total: " + total);
    if (diff > 0) {
      sendNotification("New Jobs", "there is/are " + diff + " new job(s)");
    }
    await new Promise((resolve) => setTimeout(resolve, intervalTime * 1000));
  }
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
function sendNotification(title, message) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "../assets/wing.png",
    title: title,
    message: message,
    priority: 2,
  });
}
