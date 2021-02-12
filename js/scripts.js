// business logic

const beep = "beep!"
const boop = "boop!"
const neighbor = "won't you be my neighbor?"

const mrRoboger = function(input) {
  let numbers = [];
  for (let x = 0; x <= input; x++) {
    numbers.push(x.toString());
  };

  let robogers = numbers.map(function(number) {
    if (userNumber.includes("3")) {
      //return userNumber = neighbor;
      return neighbor;
    } else {
      return userNumber;
    };
  });
  return robogers;
};



//console.log("testing 123")

//console.log(numbers)

// user interface logic

// $(document).ready(function() {
//   $(document).select()
//   console.log("BEEP BEEP IM A JEEP");
//   $("form#userNumber").submit(function(event) {
//     event.preventDefault();
    
$(document).ready(function() {
  $(document).on("submit", function(event) {
    event.preventDefault();

    let x = $("input").val();

    console.log(x);
  });
});