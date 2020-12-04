/*------------------Digtial Clock Section -----------*/
// month name array
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// weekDays array
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// get the current time
function getCurrentTime() {
  let today = new Date();

  let year = today.getFullYear();
  let month = monthNames[today.getMonth()];
  let date = today.getDate();
  let day = weekDays[today.getDay()];

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  date = checkTime(date);

  document.getElementById("current_time_span").innerHTML =
    h + ":" + m + ":" + s;
  document.getElementById("date_id").innerHTML =
    date + "-" + month + "-" + year;

  document.getElementById("day").innerHTML = day;

  let t = setTimeout(function () {
    getCurrentTime();
  }, 500);
}

// appends 0 for single digit number
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/*------------------ End of Digtial Clock Section -----------*/

/*------------------  Area Calcualtion Section -----------*/

// these js are for circle calculation
function calculateCircle() {
  let radius_input = document.getElementById("radius");
  const pie = Math.PI;
  let radius = parseFloat(radius_input.value);

  if (isNaN(radius)) {
    radius_input.value = "";
    document.getElementById("circle_radius").innerHTML = "";
    document.getElementById("circle_circumfence").innerHTML = "";
    document.getElementById("circle_area").innerHTML = "";
  } else {
    let circumfence = 2 * pie * radius;
    let area = pie * radius * radius;

    document.getElementById("circle_radius").innerHTML = radius + " cm";
    document.getElementById("circle_circumfence").innerHTML =
      circumfence.toFixed(4) + " cm";
    document.getElementById("circle_area").innerHTML =
      area.toFixed(4) + " cm" + `<sup>2</sup>`;
  }
}

// check if the number is not valid and clear the input field
function checkNumber(input_field_id) {
  let input_field = document.getElementById(input_field_id);
  let input_value = parseFloat(document.getElementById(input_field_id).value);

  if (isNaN(input_value)) {
    input_field.value = "";
    dislayErrorMsg("tips_error_div", "Enter Valid Number .");

    // document.getElementById("tips_error_div").innerHTML = `<ul>
    // 	<li style="color:#7b1818; text-align:left">Enter Valid Number .</li>
    // </ul>`;
  } else {
    document.getElementById("tips_error_div").innerHTML = "";
  }
}

// this section is to calculate tips
function calcualteTips() {
  let total_amount_input = document.getElementById("total_amt");
  let tips_percent_input = document.getElementById("tips_percent_inp");

  let total_amount = parseFloat(total_amount_input.value);
  let tips_perc = parseFloat(tips_percent_input.value);

  //perform calcualtion
  if (isNaN(total_amount)) {
    dislayErrorMsg("tips_error_div", "Have You Missed Total Amount .. ?");
  }
  if (isNaN(tips_perc)) {
    dislayErrorMsg("tips_error_div", " Aww !!Tips percent is required ..");
  }
  if (!isNaN(total_amount) && !isNaN(total_amount)) {
    tips = tips_perc / 100;
    let tips_amount = total_amount * tips;

    //reset the input field
    total_amount_input.value = "";
    tips_percent_input.value = "";

    // display the result
    document.getElementById("total_amount").innerHTML = " Rs. " + total_amount;
    document.getElementById("tips_percent_msg").innerHTML = tips_perc + "%";
    document.getElementById("tips_amount").innerHTML = " Rs. " + tips_amount;
  }
}

// display the error message
function dislayErrorMsg(error_field_id, error_msg) {
  document.getElementById(error_field_id).innerHTML = `<ul>
			<li style="color:#7b1818; text-align:left">${error_msg}</li>
		</ul>`;
}

/*------------------ End of Circle Area Calcualation Section -----------*/

/*------------------ Array Manipualtion Section -----------*/

// array manipualtion code
function arrayManipulation() {
  alert("For Array Manipulation Operation  Visit console ...");
  // array manipulation code
  let favPlaceArray = [
    "Biratnagar",
    "Lalitpur",
    "Patan",
    "Kathmandu",
    "Pokhara",
    "Palpa",
  ];

  console.log("Initial Array :" + favPlaceArray);

  //add the two elements in array
  favPlaceArray.push("Butwal"); // adds a new element (BUtwal) to favPlaceArray
  favPlaceArray.push("Saljhadi");

  console.log(" Array After adding Elements :" + favPlaceArray);

  // remove element from array
  for (var i = 0; i < favPlaceArray.length; i++) {
    if (favPlaceArray[i] === "Kathmandu") {
      favPlaceArray.splice(i, 1);
    }
  }

  // see the array after removing element from array
  console.log("Array after removing Kathamandu is :" + favPlaceArray);
  //see the length of array
  console.log("Array lenght After deleting :" + favPlaceArray.length);
}

/*------------------ End of Array Manipulation  Section -----------*/
