/*
 * Bootstrap-datepicker for Jeditable
 *
 * Copyright (c) 2014 Daniel Conde Diehl
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Depends on Bootstrap-datepicker by Stefan Petre:
 * 		http://www.eyecon.ro/bootstrap-datepicker
 *
 * Project home:
 *   https://github.com/ddiehl/jeditable-plugins
 *
 * Version: 1.0
 *
 */
 
$.editable.addInputType('datepicker', {
	element: function(settings, original) {
		var input = $('<input/>');
		$(this).append(input);
		return (input);
	},
	plugin: function(settings, original) {
		inicializaData($(this).find('input'));
	}
}); 