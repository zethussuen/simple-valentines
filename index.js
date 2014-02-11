$(function() {
	$('.section').each(function() {
		var _this = $(this);
		_this.css({'background': _this.attr('data-bg'), 'color': _this.attr('data-color')});
	})
})