$(function() {

  var updateUrl = function(sct) {
    var state = {};
    history.pushState(state, "Simple Valentines", "#"+sct[0].id);
  }

  $(document).scrollsnap({
    snaps: '.section',
    proximity: 300,
    onSnap: updateUrl,
  });

  $('#heart').click(function() {
    $('html, body').animate({
        scrollTop: $("#s-refresh").offset().top
    }, 400);
  });

  $('.top-arrow').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
  });

  $('.share, .info').click(function() {
    $(this).siblings('.share-modal').fadeIn().children('.copy').select();
  });

  $('.close').click(function(){
    $(this).parent('.share-modal').fadeOut().removeClass('fade');
  });

  $('.section').each(function() {
    var _this = $(this);
    _this.css({'background': _this.attr('data-bg'), 'color': _this.attr('data-color')});
  });

  var brightnessNumber = 10;
  $('.brightness').click(function(){
    if (brightnessNumber <= 1){
      brightnessNumber = 10;
    } else {
      brightnessNumber--;
    }
    $('#s-br').css('opacity', brightnessNumber / 10);
  });

  $('#refresh').click(function(){
    $(this).animate({deg: angle}, 500, ease);
  });

  $('.calendar').click(function(){
    $('#s-ca h2').text("Today, I'm all yours... until I turn on House of Cards");
  });

  $('.switch-outer').click(function(){
    $('#s-toggle').toggleClass('off');
  });

  $('.picker').click(function(){
    var colors = ["#d9392d", '#6ba1f5', '#5f6979', '#1fc370', '#2c4167', '#121821', '#b2281d', '#e67a8d', '#8c2c88', '#1c807d'];
    $('#s-pc').css('background', colors[Math.floor((Math.random()*10))]);
  })

});