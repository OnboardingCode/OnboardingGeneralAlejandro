const PI = 3.1416;
let radius;
let circumference;

//PI = 420.69;

/*radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);*/

//circumference = 2 * PI * radius;

document.getElementById("mySSubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};
