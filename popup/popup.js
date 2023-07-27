document.getElementById("startButton").addEventListener("click", async () => {
  intervalTime = document.getElementById("intervalTime").value;
  var response = await chrome.runtime.sendMessage({
    command: "start",
    intervalTime: intervalTime,
  });
  document.getElementById("status").innerText = response.msg;
});

document.getElementById("stopButton").addEventListener("click", async () => {
  var response = await chrome.runtime.sendMessage({ command: "stop" });
  document.getElementById("status").innerText = response.msg;
});
