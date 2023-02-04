//simple function that sends a command to the console.
 function toConsole() {
    const text = "Testing the console!";
    console.log (text);
  }

  toConsole();

//object variable describing the photo, including a function for combining two traits.
const pic = {type: "photo", subject: "figure", setting: "outdoors", full: function() {
  return this.subject + " " + this.setting;
}
}

document.getElementById("photo").innerHTML = "First, I've included a " + pic.type + " I took of my " + pic.full() + " for more object practice.";


//function that converts kilometers to miles using a set equation.
function conversion(m) {
    return (m/2) + (m/10);
  }

  document.getElementById("conv").innerHTML = "40 Kilometers = " + conversion(40) + " Miles";
  document.getElementById("conv2").innerHTML = "100 Kilometers = " + conversion(100) + " Miles";


//function that uses a method to set the title to uppercase upon clicking the button.
  function yelling() {
  let text = document.getElementById("upper").innerHTML;
  document.getElementById("upper").innerHTML =
  text.toUpperCase();
}