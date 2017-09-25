//Map for rover - 10x10 grid
var grid = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];

//Rover with initial starting point pointing 'N'
var myRover = {
  position: [0,0],
  direction: 'N'
};

//Canyon for rover to fall into
// var canyon = {
//   position: [4,6]
// };

//Second rover
var yourRover ={
  position: [9,9],
  direction: 'S'
};

//Function to make rover move. Take commands from HTML-form.
function getUserinput() {
  let input = document.getElementById('userInput').value;
  input.split(' ');
  let user = [];
  for(var i = 0; i < input.length; i++) {
    user = input[i].toUpperCase();
    if(user == 'F') {
      goForward(myRover);
    } else if(user == 'B') {
      goBackward(myRover);
    } else if(user == 'R') {
      turnRoverRight(myRover);
    } else if(user == 'L') {
      turnRoverLeft(myRover);
    } else {
      alert('WRONG COMMANDS');
    }
  }
    checkPosition(myRover);
    checkObstacle();
  }

//Make the rover move forward
function goForward(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++;
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRover.position[0]--;
      break;
    case 'W':
      myRover.position[1]--;
      break;
  }

  checkPosition(myRover);

  document.getElementById('roverPosition').innerHTML = "New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]";
}

//Make rover move backwards
function goBackward(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]--;
      break;
    case 'E':
      myRover.position[1]--;
      break;
    case 'S':
      myRover.position[0]++;
      break;
    case 'W':
      myRover.position[0]++;
      break;
  }

  checkPosition(myRover);

  document.getElementById('roverPosition').innerHTML = 'New Rover Position: [' + myRover.position[0] + ', ' + myRover.position[1] + ']';
}

//Make the rover turn to the right
function turnRoverRight(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.direction = 'E';
      break;
    case 'E':
      myRover.direction = 'S';
      break;
    case 'S':
      myRover.direction = 'W';
      break;
    case 'W':
      myRover.direction = 'N';
      break;
  }
  document.getElementById('roverDirection').innerHTML = 'New Rover Direction: [' + myRover.direction + ']';
}

//Make the rover turn to the left
function turnRoverLeft(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.direction = 'W';
      break;
    case 'W':
      myRover.direction = 'S';
      break;
    case 'S':
      myRover.direction = 'E';
      break;
    case 'E':
      myRover.direction = 'N';
      break;
  }
  document.getElementById('roverDirection').innerHTML = 'New Rover Direction: [' + myRover.direction + ']';
}

//Wrap grid from one end to the other
function checkPosition(rover){
  if(myRover.position[0] > 9){
    myRover.position[0] = 0;
  }else if(myRover.position [0] < 0){
    myRover.position[0] = 9;
  }else if(myRover.position[1] > 9){
    myRover.position[1] = 0;
  }else if(myRover.position[1] < 0){
    myRover.position[1] = 9;
  }
}

//To check if rover hits obsatcles
// function checkObstacle () {
//   if(myRover.position[0] === canyon.position[0] && myRover.position[1] === canyon.position[1]) {
//     console.log("Oh noooooooooooooooooo!!!");
//   }
// }

// goForward(myRover);
// goBackward(myRover);
// turnRoverRight(myRover);
// turnRoverLeft(myRover);
