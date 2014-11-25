jeditable-plugins
=================

Custom plugins for jEditable. 
Contains a set of extra types for jEditable. All the js can be located in dist folder. 

Available custom fields are:

- Bootstrap-timepicker - timepicker
- Bootstrap-datepicker - datepicker


## Timepicker ##

This enables using timepicker.

It Depends on Bootstrap-timepicker by Joris de Wit:
[http://jdewit.github.com/bootstrap-timepicker ](http://jdewit.github.com/bootstrap-timepicker )

To install it just add the JS to your HTML:

    <head>
		<script src="jquery.jeditable.bootstrap-timepicker.js"></script>
	</head>


And then you can use in the Javascript:

    $('#field').editable (
			function(value, settings, type) {
		    	return(value);
			}, 
			{
				type: 'timepicker',
			}
	);


## Datepicker ##

This enables using datepicker.

It Depends on Bootstrap-datepicker by Stefan Petre:
[http://www.eyecon.ro/bootstrap-datepicker](http://www.eyecon.ro/bootstrap-datepicker)

To install it just add the JS to your HTML:

    <head>
		<script src="jquery.jeditable.bootstrap-datepicker.js"></script>
	</head>


And then you can use in the Javascript:

    $('#field').editable (
			function(value, settings, type) {
		    	return(value);
			}, 
			{
				type: 'timepicker',
				format: 'mm/dd/yyyy',
				startViewMode 'days'
			}
	);

