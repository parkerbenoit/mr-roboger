// business logic

const beep = "beep!"
const boop = "boop!"
const neighbor = "won't you be my neighbor?"

const mrRoboger = function(input) {
  let numbers = [];
  for (let x = 0; x <=input; x++)
    numbers.push(x.toString());
};



// user interface logic

$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    //userNumber.addEventListener('submit', ()=>{
      console.log(input)
    //})
  })
})