// 1) add an event listener to "click me"
// 2) store input as variables using .value method
// 3) (max age - current age) * drinks per day * 365
// 4) output answers for the user to see

document.querySelector('#click-me').onclick = function () {
  var currentAge = parseInt(document.querySelector('#age').value);
  var maxAge = parseInt(document.querySelector('#max-age').value);
  var favoriteDrink = document.querySelector('#item').value;
  var drinksPerDay = parseInt(document.querySelector('#num-per-day').value);

  var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365

  document.querySelector('#solution').innerHTML = drinksLeft;
  document.querySelector('#drink').innerHTML = favoriteDrink;
}

//1) Grab Inputs and store as variables
//2) Manipulate Inputs
//3) Output results to user