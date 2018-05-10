'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({mode: ""});
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: "www.duolingo.com"},
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.query({active: true, currentWindow: true, url: "https://www.duolingo.com/"}, function(tabs) {
    if (tabs && tabs.length >= 1) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "run.js"});
    }
  });
});
