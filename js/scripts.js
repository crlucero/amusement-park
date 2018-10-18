$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 53) {
    $('#ride1, #ride2').css('background-color', 'yellow');
  }

  else if (height <= 53, height >=48) {
    $('#ride2').css('background-color', 'yellow');
  }

  else if (height <= 48) {
    $('#ride3').css('background-color', 'yellow');
  }
});
