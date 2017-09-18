//Map for rover - 10x10 grid
var grid = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];
//Looping through the map
for(i = 0; i < grid.length; i++) {
  for(j = 0; j < grid[i].length; j++) {
    console.log(grid);
  }
}


//Rover with initial starting point pointing 'N' 
var myRover = {
  position: [0,0], 
  direction: 'N'
};

// var yourRover = {
//   position: [9,9],
//   direction: 'S'
// };

//Make the rover move forward
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

//Make rover move backwards
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E': 
      rover.position[1]--
      break;
    case 'S': 
      rover.position[0]++
      break;
    case 'W': 
      rover.position[0]++
      break;
  }
  console.log('New Rover Position: [' + rover.position[0] + ', ' + rover.position[1] + ']')
};

//Make the rover turn to the right
function turnRoverRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
  console.log('New Rover Direction: [' + rover.direction + ']');
};


//Make the rover turn to the left
function turnRoverLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'N'
      break;
  }
  console.log('New Rover Direction: [' + rover.direction + ']');
}


//Implement commands forward(f) and backward(b)
//implement commands turnRight(r) and turnLeft(l)



function moveRover() {
  let userCommands = prompt('Where do you want the rover to move?');
  let commands = [];
  commands.push(userCommands);
  userCommands.split(' ');
 
  for(var i; i <= commands.length; i++) {
    if(commands === 'f' || 'F') {
      goForward(myRover);
    }else if(commands === 'b' || 'B'){
      goBackward(myRover);
    }else if(commands === 'r' || 'R'){
      turnRoverRight(myRover);
    }else if(commands === 'l' || 'L'){
      turnRoverLeft(myRover);
    }else{
      console.log('Please type a valid command');
    }; 
  }
};



/*function moveRover(){
  var input = [];
  for(i = 0; i < input.length; i++){
    
  }
  checkPosition();
};*/






// //Wrap grid from one end to the other
// function checkPosition(){
//   if(myRover.position[0] > 9){
//     myRover.position[0] = 0
//   }else if(myRover.position [0] < 0){
//     myRover.position[0] = 9
//   }else if(myRover.position[1] > 9){
//     myRover.position[1] = 0
//   }else if(myRover.position[1] < 0){
//     myRover.position[1] = 9
// };
// };




// goForward(myRover);
// goBackward(myRover);
// turnRoverRight(myRover);
// turnRoverLeft(myRover);








