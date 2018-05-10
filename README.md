# duolingo-marathon-chrome
Chrome extension for reducing mouse usage in Duolingo

## How to use it
It should be pretty intuitive so just clicking around might be the best way to learn how to use it,
but here are some instructions anyway if you prefer reading.

Click on the lesson you want to do so the popup with the "Start" button shows up, and click on the
extension icon and click on "Learn Section". The "quiz" will start and new ones will be started
automatically until the section is maxed out (e.g. to level 5) or you click on "Learn Section" again.

If you activate "Learn Section" before opening the popup, you will still need to click "Start" for
the first quiz, but subsequent ones will be run automatically.

The other two modes, i.e. "Practice Section" and "Global Practice" are equivalent, but they
activate the "Practice" button in the section popup once the section is maxed out and the global
"Practice" button respectively.

## How to install it
- clone the repo
- inspect the code to make sure it isn't doing anything problematic
- navigate to chrome://extensions
- enable Developer mode
- click on "Load Unpacked" near the top of the screen
- select the directory of the repo
- go to https://www.duolingo.com/ and enjoy

## Caveats
I expect this only works for the English UI. To adapt it to another language, replacing the magic
strings "start" and "practice" should do the trick.
