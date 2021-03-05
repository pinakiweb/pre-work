# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Pinaki Saha**

Time spent: **5** hours spent in total

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
      1. Made the game look more interactive with more appealing colors in the background, button color, text color, text size etc.
      2. Made all elements center alligned so that it looks for responsive.
      3. Set a progress bar for the time left instead of showing the seconds left.
      4. Set an alert everytime a wrong button is pressed and display the number of chances left.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2Fpre-work1.gif?v=1614910877528)
![](https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2Fpre-work.gif?v=1614910877798)



GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [1. "https://www.w3schools.com/jsref/met_win_setinterval.asp" : for setinteval 
    2. "https://www.w3schools.com/jsref/met_win_clearinterval.asp" : for clearinterval
    3. "https://www.w3schools.com/jsref/met_audio_play.asp" : for playing audio using javascript, 
    4. "https://www.google.com/" : used google to download images and audio of different musical instrument.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   [I faced two small challenge while setting the ticking clock. I was at first not able to decide when to call setinterval and when to call clearinterval. Also the progress bar which shows the time left was not resetting to 0 after every sequence. So I figured out that I need to trigger setinterval when an entire sequence is played i.e. after the playClueSequence(). The endinterval is to be triggered when either when the player guesses or when the time expires. To take care of the progress bar I had to make the progress bar to zero after calling endinterval everytime. So I developed a function which calls the endinterval and sets the progress bar to zero. The second small challenge was while setting the playback speed for the tones. I was at first reducing by 100 ms each time but it didn't turn out to be that normal for humans and at some point it would go too fast. So to solve this I started reducing the time depending on the progress variable and also set a condition so that playback time does not go below 50 ms which seemed to be a more reasonable for human eye to detect the pattern the computer is playing.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   [I am aware of synchronous and asynchronous calls. I wanted to know what which is a better approach and why exactly is that. I actually encountered a situation where I believe synchorous call had to be made. In case when we call the setinterval it gets triggered before playClueSequence() finishes executing.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   [I would add additional features like adding a page before the game which will consist of instructions button, settings button and a play button. The instruction button will contain rules on how to play the game. The  which will take me to page where the game starts. The settings page will contain different type of options to choose from, e.g. color theme for the buttons and sound themes they want to choose, e.g. musical instrument sounds, animal sounds etc. The play button will take user directly to the game page. The game page should also change according to the settings set by the user. I would also like to add levels to the game where the pattern length will increase at each level. Also we can keep a global variable called highest score which will display your score and the highest score everytime a game is finished. This would lead to increase in number of files so I would organize those by putting all the css files into one folder and js files into another.]

## License

    Copyright [Pinaki Saha]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
