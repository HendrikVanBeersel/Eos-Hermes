var total = 0;
chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { command } = obj;
  if (command === "check") {
    try {
      var total = document
        .getElementsByClassName("total-count")[0]
        .innerText.split(" ")[1];
    } catch (e) {
      var total = -1;
    }
    response({ total });
    //priority-jobs
  }
});
