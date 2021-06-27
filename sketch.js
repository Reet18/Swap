

var a = prompt('Enter a variable');
var b = prompt('Ennter second variable')

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap);
  }


function draw()
{
}
function swap(){  
  [a ,b]= [b,a];
  console.log(" the value of a after swapping: " +a);
  console.log(" the value of b after swapping: " +b);}