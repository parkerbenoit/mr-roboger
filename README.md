# Mr Roboger's Neighborhood

#### By Parker Benoit 2/12/2021

## Description

This web page should be able to take user input and based on the number received, return a list of phrases from a robot to the user.

## Testing

Describe: mrRoboger()

Test: It will return 0 if 0 is input by the user.
Expect: mrRoboger(0) to return ([0]);

Test: It will return a range of numbers from 0 to the user inputted number
Expect: mrRoboger(7) to return ([0,1,2,3,4,5,6,7]);

Test: It will replace all digits of number containing "3" with "won't you be my neighbor?"
Expect: mrRoboger(4) to return (0,1,2,won't you be my neighbor?, 4);

Test: It will replace all digits of number containing "2" with "boop"
Expect: mrRoboger(4) to return (0,1,boop,won't you be my neighbor?, 4);

Test: It will replace all digits of number containing "1" with "beep"
Expect: mrRoboger(4) to return (0,beep,boop,won't you be my neighbor?, 4);

## Setup/Installation Requirements

Software requirements:

1. Internet Browser
2. A code editor like VSCode or ATOM to view or edit the codebase

Open by downloading:
1. Download this repository onto your computer: 'git clone https://github.com/parkerbenoit/mr-roboger'
2. Double clikc the index.html to open it in your web browser

OR

Open via Bash/GitBash:
1. Clone the repository onto your computer: 'git clone https://github.com/parkerbenoit/mr-roboger'
2. Navigate into the mr-roboger directory, and open in Visual Studio Code or your preferred text editor with the 'code .' command.
3. Open index.html in Chrome or your preferred web browser.

## Known Bugs

There are no known bugs as of 2/12/2021

## Support and contact details

email: parker.benoit44@gmail.com

## Technologies Used

HTML
JavaScript
  JQuery
CSS
  Bootstrap
Visual Studio Code

### License

This software is licensed under MIT.

Copyright (c) 2021 Parker Benoit