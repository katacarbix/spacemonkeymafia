jQuery.fn.mailto = function(){
	return this.each(function(){
		var email = jQuery(this).attr('href').replace(/\s*\(.+\)\s*/, "@");
		if (jQuery(this).hasClass('email-inner')){
			$(this).html(email);
		}
		$(this).attr('href', 'mailto:' + email);
	});
};
