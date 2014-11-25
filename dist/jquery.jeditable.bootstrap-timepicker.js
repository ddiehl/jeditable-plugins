/*
 * Bootstrap-timepicker for Jeditable
 *
 * Copyright (c) 2014 Daniel Conde Diehl
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Depends on Bootstrap-timepicker by Joris de Wit:
 * 		http://jdewit.github.com/bootstrap-timepicker 
 *
 * Project home:
 *   https://github.com/ddiehl/jeditable-plugins
 *
 * Version: 1.0
 *
 */
 
$.editable.addInputType('timepicker', {
	element : function(settings, original) {
		var div = $('<div>')
					.addClass('input-append')
					.addClass('bootstrap-timepicker');
		var input = $('<input/>');

		div.append(input);

		$(this).append(div);
		return (input);
	},
	plugin : function(settings, original) {
		var campo = $(this).find('input');
		campo.timepicker({
			defaultTime : false,
			template : false
		});

	}
});