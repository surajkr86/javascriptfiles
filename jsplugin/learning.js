/*(function($){
$.fn.helloWorld = function(){
this.each(function(){
$(this).css('color' , 'red');
});
};
})(jQuery)*/

(function($){
$.fn.helloWorld = function(option){
		this.each(function() {
		$(this).text('some text');
	   });
		var settings = $.extend({
			name:'suraj',
			did_hanuman :'Welcome to jQuery',
			text : 'The Supplied by option',
			navigation :'<nav><ul><li><a href="#" title="">Home</a></li><li><a href="#" title="">About Us</a></li><li><a href="#" title="">Contact Us</a></li><li><a href="#" title="">Development</a></li></ul></nav>'} , option);
		return this.append('Hello'+ settings.name +'! ' + settings.did_hanuman 
			+ settings.navigation
			+ settings.text

			)
};
$.fn.learning = function(object1){
		var settings = $.extend({
			text:'Welcome to new Head line',
			color: null,
			fontStyle:null,
			newFunction:null

		} ,object1);
	return this.each( function() {
            $(this).text( settings.text );
            if(settings.color){
            	$(this).css('color', settings.color);
            }
            if(settings.color){
            	$(this).css('color', settings.color);
            }
            if(settings.fontStyle){
            	$(this).css('font-style', settings.fontStyle);
            };

            if($.isFunction(settings.newFunction)){
            	settings.newFunction.call(this);
            }

        });
}
})(jQuery)


