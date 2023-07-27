document.getElementById("startButton").addEventListener("click", async () => {
  intervalTime = document.getElementById("intervalTime").value;
  alwaysNotify = document.getElementById("alwaysNotify").checked;
  var response = await chrome.runtime.sendMessage({
    command: "start",
    intervalTime: intervalTime,
    alwaysNotify: alwaysNotify,
  });
  document.getElementById("status").innerText = response.msg;
});

document.getElementById("stopButton").addEventListener("click", async () => {
  var response = await chrome.runtime.sendMessage({ command: "stop" });
  document.getElementById("status").innerText = response.msg;
});
