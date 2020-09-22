//Date to be displayed on the page for the user.
const today = moment().format('MMMM Do YYY');
console.log(today); 

document.getElementById("currentDay").innerHTML = today;

//Get the rows the change color based on the time of day - past, present and future.

var hour = moment().format('H'); 
console.log(hour);

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let 
    rowIdString = row.id,
    rowHour; 

    if(rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        // Compares row id to current hour and sets color accordingly
        if (currentHour === rowHour) {
          setColor(row, "#FF851B");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 12)) {
          setColor(row, "#3D9970");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 12)) {
          setColor(row, "lightgrey");
        } 
      }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
  }

