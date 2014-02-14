$(function() {

  // $(document).scrollsnap({
  //   snaps: '.section',
  //   proximity: 300,
  // });

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
    var text = $('#s-ca h2').text().replace('.', "... until I turn on House of Cards...");
    $('#s-ca h2').text(text);
  });

  $('.switch-outer').click(function(){
    $('#s-toggle').toggleClass('off');
  });

});