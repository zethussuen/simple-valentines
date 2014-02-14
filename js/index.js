$(function() {

  $(document).scrollsnap({
    snaps: '.section',
    proximity: 300,
  });

  $('.share').click(function() {
    $(this).siblings('.share-modal').show().children('.copy').select();
  });

  $('.close').click(function(){
    $(this).parent('.share-modal').hide();
  });

  $('.section').each(function() {
    var _this = $(this);
    _this.css({'background': _this.attr('data-bg'), 'color': _this.attr('data-color')});
  });

})