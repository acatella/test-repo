console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function() {

  //Updates color theme on click
  var themes = ['hero-blue','hero-pink'];
  var $changeButton = $('div.hero');

  function updateTheme() {
    var curTheme = $changeButton.attr('class').toString();
    var newTheme = themes[Math.floor((Math.random()*themes.length))];
    var re = new RegExp(newTheme, "g");

    if (re.test(curTheme)) {
      updateTheme();
    }

    else {
      $changeButton.attr('class', 'hero '+ newTheme);
    }
  }
  
  $changeButton.on('click', function(e) {
    updateTheme();
  });
});
