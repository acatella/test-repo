console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function() {

  //Updates color theme on click
  var themes = ['hero-blue','hero-pink'];
  var $changeButton = $('div.hero');
  $changeButton.on('click', function(e) {
    var newTheme = themes[Math.floor((Math.random()*themes.length))];
    console.log(newTheme);
    $changeButton.attr('class', 'hero '+ newTheme);
  });
});
