$(document).ready(function() {

  //Updates color theme on click
  var themes = ['hero-blue','hero-pink', 'hero-green', 'hero-dawgs'];
  var $body = $('div.flex-container');
  var $trigger = $('div.hero');

  function updateTheme() {
    var curTheme = $body.attr('class').toString();
    var newTheme = themes[Math.floor((Math.random()*themes.length))];
    var re = new RegExp(newTheme, "g");

    if (re.test(curTheme)) {
      updateTheme();
    }

    else {
      $body.attr('class', 'flex-container '+ newTheme);
    }
  }

  $trigger.on('click', function(e) {
    updateTheme();
  });
});
