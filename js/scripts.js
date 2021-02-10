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
  if ($('#atlanta').val().toLowerCase().match(/atlanta/g) == 'atlanta'){$('#overlay1a').show();}
    else {$('#overlay1b').show();}
  if ($('#boston').val().toLowerCase().match(/boston/g) == 'boston'){$('#overlay2a').show();}
    else {$('#overlay2b').show();}
  if ($('#dubai').val().toLowerCase().match(/dubai/g) == 'dubai'){$('#overlay3a').show();}
    else {$('#overlay3b').show();}
  if ($('#irvine').val().toLowerCase().match(/irvine/g) == 'irvine'){$('#overlay4a').show();}
    else {$('#overlay4b').show();}
  if (($('#nyc').val().toLowerCase().match(/nyc/g) == 'nyc') || ($('#nyc').val().toLowerCase().match(/new york city/g) == 'new york city') || ($('#nyc').val().toLowerCase().match(/new york/g) == 'new york')){$('#overlay5a').show();}
    else {$('#overlay5b').show();}
  if ($('#osaka').val().toLowerCase().match(/osaka/g) == 'osaka'){$('#overlay6a').show();}
    else {$('#overlay6b').show();}
  if ($('#paris').val().toLowerCase().match(/paris/g) == 'paris'){$('#overlay7a').show();}
    else {$('#overlay7b').show();}
  if ($('#rome').val().toLowerCase().match(/rome/g) == 'rome'){$('#overlay8a').show();}
    else {$('#overlay8b').show();}
  if (($('#sf').val().toLowerCase().match(/sf/g) == 'sf') || ($('#sf').val().toLowerCase().match(/san francisco/g) == 'san francisco')){$('#overlay9a').show();}
    else {$('#overlay9b').show();}
}

var theSecondButton = document.getElementById("b2");
theSecondButton.onclick = showAnswers;

function showAnswers() {
  $('.overlaya').hide();
  $('.overlayb').hide();
  $('.answer').show();
}
