// Define your list of items to check for changes
const itemsToCheck = ["item1", "item2", "item3"];

// Function to check for changes in the list of items
function checkForChanges() {
  const itemList = document.querySelectorAll("your-list-selector"); // Replace with the appropriate selector for your list

  // Loop through the items and check for changes
  itemList.forEach((item) => {
    const itemText = item.textContent.trim();
    if (itemsToCheck.includes(itemText)) {
      // Do something when the item has changed
      console.log(`Item "${itemText}" has changed.`);
    }
  });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "checkForChanges") {
    checkForChanges();
  }
});
