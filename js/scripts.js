//BUSINESS LOGIC ///...

function mrRoboger(input) {
  let numbers = [];
  for (let x = 0; x <= input; x++) {
    numbers.push(x.toString());

    if (numbers[x].includes("3")) {
      numbers[x] = "won't you be my neighbor?";
    } else if (numbers[x].includes("2")) {
      numbers[x] = "boop";
    } else if (numbers[x].includes("1")) {
      numbers[x] = "beep";
    }
  }
  return numbers;
}

//UI LOGIC ////

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($("#input").val());

    const final = mrRoboger(userNumber);

    $("#results").text(final);
  });
});
