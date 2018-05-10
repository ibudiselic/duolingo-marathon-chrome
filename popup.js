'use strict';

(function() {

const kModes = ["learnSection", "practiceSection", "globalPractice"];

// Calls `fn(btn)` for all the mode control buttons.
function forAllButtons(fn) {
  for (let id of kModes) {
    let btn = document.getElementById(id);
    if (btn) {
      fn(btn);
    }
  }
}

// Updates the CSS class of the buttons so that the active mode button (if
// any) is highlighted.
function styleButtonsForMode(mode) {
  forAllButtons(function(btn) {
    btn.className = (btn.id === mode ? "on" : "off");
  });
}

// Sets up the the button click handlers.
function initButtons() {
  forAllButtons(function(btn) {
    btn.onclick = function(element) {
      chrome.storage.sync.get('mode', function(data) {
        if (data.mode === btn.id) {
          // This mode was active - turn it off.
          chrome.storage.sync.set({mode: ""});
          styleButtonsForMode("");
        } else {
          // Activate the mode.
          chrome.storage.sync.set({mode: btn.id});
          styleButtonsForMode(btn.id);
          chrome.tabs.query({active: true, currentWindow: true, url: "https://www.duolingo.com/"},
              function(tabs) {
                chrome.tabs.executeScript(
                  tabs[0].id,
                  {file: "run.js"});
              });
        }
      });
    };
  });
}

initButtons();
chrome.storage.sync.get('mode', function(data) {
  styleButtonsForMode(data.mode);
});

})();
