/**
 * Auto Load Next Post Admin JS
 */
jQuery(function(){
	jQuery("body").click(function(){
		jQuery('.auto_load_next_post_error_tip').fadeOut('100', function(){ jQuery(this).remove(); } );
	});

	// Tooltips
	jQuery(".tips, .help_tip").tipTip({
		'attribute' : 'data-tip',
		'fadeIn' : 50,
		'fadeOut' : 50,
		'delay' : 200
	});
});
