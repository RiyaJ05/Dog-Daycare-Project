/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

const halfDayCost = 20;
const fullDayCost = 35;
let dayCounter = 0;
let weeklyCost = 0;
let dailyRate = 35;

let monButton = document.getElementById("monday");
let tueButton = document.getElementById("tuesday");
let wedButton = document.getElementById("wednesday");
let thuButton = document.getElementById("thursday");
let friButton = document.getElementById("friday");

let halfButton = document.getElementById("half");
let fullButton = document.getElementById("full");

let clearButton = document.getElementById("clear-button");
let calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monButton.addEventListener("click", changeColorMon);
tueButton.addEventListener("click", changeColorTue);
wedButton.addEventListener("click", changeColorWed);
thuButton.addEventListener("click", changeColorThu);
friButton.addEventListener("click", changeColorFri);

function changeColorMon() {
  if (!monButton.classList.contains("clicked")) {
    monButton.classList.add("clicked");
    dayCounter++;
  } else {
    monButton.classList.remove("clicked");
    dayCounter--;
  }
  calculateCost();
}

function changeColorTue() {
  if (!tueButton.classList.contains("clicked")) {
    tueButton.classList.add("clicked");
    dayCounter++;
  } else {
    tueButton.classList.remove("clicked");
    dayCounter--;
  }
  calculateCost();
}

function changeColorWed() {
  if (!wedButton.classList.contains("clicked")) {
    wedButton.classList.add("clicked");
    dayCounter++;
  } else {
    wedButton.classList.remove("clicked");
    dayCounter--;
  }
  calculateCost();
}

function changeColorThu() {
  if (!thuButton.classList.contains("clicked")) {
    thuButton.classList.add("clicked");
    dayCounter++;
  } else {
    thuButton.classList.remove("clicked");
    dayCounter--;
  }
  calculateCost();
}

function changeColorFri() {
  if (!friButton.classList.contains("clicked")) {
    friButton.classList.add("clicked");
    dayCounter++;
  } else {
    friButton.classList.remove("clicked");
    dayCounter--;
  }
  calculateCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearDays);

function clearDays() {
  monButton.classList.remove("clicked");
  tueButton.classList.remove("clicked");
  wedButton.classList.remove("clicked");
  thuButton.classList.remove("clicked");
  friButton.classList.remove("clicked");

  weeklyCost = 0;
  dayCounter = 0;

  calculateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", halfDayClicked);

function halfDayClicked() {
  dailyRate = 20;
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");

  calculateCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", fullDayClicked);

function fullDayClicked() {
  dailyRate = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");

  calculateCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
  weeklyCost = dayCounter * dailyRate;
  calculatedCost.innerHTML = weeklyCost;
}
