// Twitter buttons
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(function() {
  var customStyles = {}
  // Colorpicker for the icons
  $('#iconPicker').colorpicker().on('changeColor', function(ev){
    $('.vjs-default-skin').css('color', ev.color.toHex());
    $(this).css('background-color', ev.color.toHex());

    // Add new color to the customStyles hash
    customStyles.color = ev.color.toHex();
  });

  // Colorpicker for the progress bar
  $('#progressPicker').colorpicker().on('changeColor', function(ev){
    $('.vjs-play-progress, .vjs-volume-level').css('background-color', ev.color.toHex());
    $(this).css('background-color', ev.color.toHex());

    // Add new progress bar background color to customStyles hash
    customStyles.progress = ev.color.toHex();
  });

  // Colorpicker for the player background
  $('#backgroundPicker').colorpicker().on('changeColor', function(ev){
    var color = ev.color.toRGB();

    var colorString = 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
    $('.vjs-control-bar, .vjs-big-play-button').css('background', colorString);

    var sliderBackground = 'rgba('+color.r+','+color.g+','+color.b+','+color.a/3+')';
    $('.vjs-slider').css('background', sliderBackground);

    $(this).css('background-color', colorString);

    // Add new player background color (in rgba() format) to customStyles hash
    customStyles.background = {
      main: colorString,
      slider: sliderBackground
    }
  });

  // Slider for font size
  $('#fontSize').slider().on('slide', function(ev){
    $('.vjs-default-skin').css('font-size', ev.value + '%');
    customStyles.fontSize = ev.value;
  });

  // Show embed code btn
  $('#showEmbedModal').click(function(e) {
    e.preventDefault();

    // Build custom <style> tag
    var style = '';
    if (customStyles.color) { style += "  .vjs-default-skin { color: "+ customStyles.color +"; }\n" }
    if (customStyles.progress) { style += "  .vjs-default-skin .vjs-play-progress,\n  .vjs-default-skin .vjs-volume-level { background-color: "+ customStyles.progress +" }\n" }
    if (customStyles.background) {
      style += "  .vjs-default-skin .vjs-control-bar,\n  .vjs-default-skin .vjs-big-play-button { background: "+ customStyles.background.main +" }\n"
      style += "  .vjs-default-skin .vjs-slider { background: "+ customStyles.background.slider +" }\n"
    }
    if (customStyles.fontSize) { style += "  .vjs-default-skin .vjs-control-bar { font-size: "+ customStyles.fontSize +"% }\n" }
    if (style) {
      $('#customStyleTag').text('\n<style type="text/css">\n'+style+'</style>\n')
    }
  });

  videojs("home_video", {"height":"auto", "width":"auto"}).ready(function(){
    var myPlayer = this;    // Store the video object
    var aspectRatio = 5/12; // Make up an aspect ratio

    function resizeVideoJS(){
      // Get the parent element's actual width
      var width = document.getElementById(myPlayer.id()).parentElement.offsetWidth;
      // Set width to fill parent element, Set height
      myPlayer.width(width).height( width * aspectRatio );
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize
  });

});
