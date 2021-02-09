// get the button and make it respond to a click
var theButton = document.getElementById("b");
theButton.onclick = runBoth;

function runBoth() {
  showResults();
  showOverlays();
}

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

function showOverlays() {
  if ($('#atlanta').val().toLowerCase().trim() == 'atlanta'){$('#overlay1a')[0].style.visibility = 'visible';}
    else {$('#overlay1b')[0].style.visibility = 'visible';}
  if ($('#boston').val().toLowerCase().trim() == 'boston'){$('#overlay2a')[0].style.visibility = 'visible';}
    else {$('#overlay2b')[0].style.visibility = 'visible';}
  if ($('#dubai').val().toLowerCase().trim() == 'dubai'){$('#overlay3a')[0].style.visibility = 'visible';}
    else {$('#overlay3b')[0].style.visibility = 'visible';}
  if ($('#irvine').val().toLowerCase().trim() == 'irvine'){$('#overlay4a')[0].style.visibility = 'visible';}
    else {$('#overlay4b')[0].style.visibility = 'visible';}
  if (($('#nyc').val().toLowerCase().trim() == 'nyc') || ($('#nyc').val().toLowerCase().trim() == 'new york city') || ($('#nyc').val().toLowerCase().trim() == 'new york')){$('#overlay5a')[0].style.visibility = 'visible';}
    else {$('#overlay5b')[0].style.visibility = 'visible';}
  if ($('#osaka').val().toLowerCase().trim() == 'osaka'){$('#overlay6a')[0].style.visibility = 'visible';}
    else {$('#overlay6b')[0].style.visibility = 'visible';}
  if ($('#paris').val().toLowerCase().trim() == 'paris'){$('#overlay7a')[0].style.visibility = 'visible';}
    else {$('#overlay7b')[0].style.visibility = 'visible';}
  if ($('#rome').val().toLowerCase().trim() == 'rome'){$('#overlay8a')[0].style.visibility = 'visible';}
    else {$('#overlay8b')[0].style.visibility = 'visible';}
  if (($('#sf').val().toLowerCase().trim() == 'sf') || ($('#sf').val().toLowerCase().trim() == 'san francisco')){$('#overlay9a')[0].style.visibility = 'visible';}
    else {$('#overlay9b')[0].style.visibility = 'visible';}
}

var theSecondButton = document.getElementById("b2");
theSecondButton.onclick = showAnswers;

function showAnswers() {
  $('#overlay1a')[0].style.visibility = 'hidden';
  $('#overlay1b')[0].style.visibility = 'hidden';
  $('#overlay2a')[0].style.visibility = 'hidden';
  $('#overlay2b')[0].style.visibility = 'hidden';
  $('#overlay3a')[0].style.visibility = 'hidden';
  $('#overlay3b')[0].style.visibility = 'hidden';
  $('#overlay4a')[0].style.visibility = 'hidden';
  $('#overlay4b')[0].style.visibility = 'hidden';
  $('#overlay5a')[0].style.visibility = 'hidden';
  $('#overlay5b')[0].style.visibility = 'hidden';
  $('#overlay6a')[0].style.visibility = 'hidden';
  $('#overlay6b')[0].style.visibility = 'hidden';
  $('#overlay7a')[0].style.visibility = 'hidden';
  $('#overlay7b')[0].style.visibility = 'hidden';
  $('#overlay8a')[0].style.visibility = 'hidden';
  $('#overlay8b')[0].style.visibility = 'hidden';
  $('#overlay9a')[0].style.visibility = 'hidden';
  $('#overlay9b')[0].style.visibility = 'hidden';
  $('.answer').show();
}
