// get the button and make it respond to a click
var theButton = document.getElementById("b");
theButton.onclick = showResults;

// function Score( input ) {
//   if(input==0){return "You did not recognize any cities. Better luck next time!"}
//   else if(input <= 3 && input >= 1){return "You knew a few cities, but you could do better."}
//   else if(input <= 6 && input >= 4){return "You knew several cities, but missed a handful. Not bad!"}
//   else if(input <= 8 && input >= 7){return "You knew most of the cities. Great job!"}
//   else if(input==9){return "Amazing! You got them all right!"}
//   else{return "You did not enter a valid number."}
//   }
//
// // this function runs each time the button is clicked
// function feedTheButton() {
//   // get the response from the text input field
//   // parseInt() changes string to number
//   var input = parseInt(document.getElementById("in").value);
//   // run the function above this one and store what is returned in result
//   var result = Score( input );
//   // write the result into the HTML
//   var place = document.getElementById("write");
//   place.innerHTML = result;
// }

function showResults() {
var total = 0;
if ($('#atlanta').val().toLowerCase().trim() == 'atlanta'){total++}
if ($('#boston').val().toLowerCase().trim() == 'boston'){total++}
if ($('#dubai').val().toLowerCase().trim() == 'dubai'){total++}
if ($('#irvine').val().toLowerCase().trim() == 'irvine'){total++}
if (($('#nyc').val().toLowerCase().trim() == 'nyc') || ($('#nyc').val().toLowerCase().trim() == 'new york city') || ($('#nyc').val().toLowerCase().trim() == 'new york')){total++}
if ($('#osaka').val().toLowerCase().trim() == 'osaka'){total++}
if ($('#paris').val().toLowerCase().trim() == 'paris'){total++}
if ($('#rome').val().toLowerCase().trim() == 'rome'){total++}
if (($('#sf').val().toLowerCase().trim() == 'sf') || ($('#sf').val().toLowerCase().trim() == 'san francisco')){total++}
var place = document.getElementById("write");
place.innerHTML = total.toString().concat("/9");
}
