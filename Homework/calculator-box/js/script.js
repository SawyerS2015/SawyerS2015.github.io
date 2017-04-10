//1) Grab Inputs and store as variables
//2) Manipulate Inputs
//3) Output results to user

// 1. user clicks #a10 - handle with .click
// 2. add 10 to total
// 3. write total to #out

var total = 0;

$('#a10').click(function () {
  total = total + 10;
  $('#out').text(total);
})

$('#a20').click(function () {
  total = total + 20;
  $('#out').text(total);
})

$('#a30').click(function () {
  total = total + 30;
  $('#out').text(total);
})

$('#n10').click(function () {
  total = total - 10;
  $('#out').text(total);
})

$('#n20').click(function () {
  total = total - 20;
  $('#out').text(total);
})

$('#n30').click(function () {
  total = total - 30;
  $('#out').text(total);
})

$('#red').click(function () {
  $('#out').css('background-color', 'red');
})

$('#blue').click(function () {
  $('#out').css('background-color', 'blue')
})

$('#out').click(function () {
  total = total * 0;
  $('#out').text(total);
  $('#out').css('background-color', 'white')
})