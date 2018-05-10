'use strict';

(function() {

// Calls `click()` on the first element with the given tag and inner text.
// Does nothing if no such element exists.
function clickTagWithText(tag, text) {
  let elems = document.getElementsByTagName(tag);
  for (let el of elems) {
    if (el.innerText.toLowerCase() === text) {
      setTimeout(function() { el.click(); }, 1000);
      break;
    }
  }
}

function clickButtonWithText(text) {
  clickTagWithText("button", text);
}

function clickAnchorWithText(text) {
  clickTagWithText("a", text);
}

chrome.storage.sync.get('mode', function(data) {
  if (!data.mode) {
    return;
  }
  if (data.mode === "learnSection") {
    clickButtonWithText("start");
  } else if (data.mode === "practiceSection") {
    clickButtonWithText("practice");
  } else if (data.mode === "globalPractice") {
    clickAnchorWithText("practice");
  }
});

})();
