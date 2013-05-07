// Twitter buttons
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(function() {
  // $('.colorpicker').colorpicker()
  $('#iconPicker').colorpicker().on('changeColor', function(ev){
    $('.vjs-default-skin').css('color', ev.color.toHex());
    $(this).css('background-color', ev.color.toHex());
  });
  $('#progressPicker').colorpicker().on('changeColor', function(ev){
    $('.vjs-play-progress, .vjs-volume-level').css('background-color', ev.color.toHex());
    $(this).css('background-color', ev.color.toHex());
  });
  $('#backgroundPicker').colorpicker().on('changeColor', function(ev){
    console.log(ev.color.toRGB());
    var color = ev.color.toRGB();

    var colorString = 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
    $('.vjs-control-bar, .vjs-big-play-button').css('background', colorString);

    var sliderBackground = 'rgba('+color.r+','+color.g+','+color.b+','+color.a/3+')';
    $('.vjs-slider').css('background', sliderBackground);

    $(this).css('background-color', colorString);
  });
  $('#fontSize').slider().on('slide', function(ev){
    $('.vjs-control-bar').css('font-size', ev.value + '%');
  });
});