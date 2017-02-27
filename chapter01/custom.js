

(function($){
  "use strict";
jQuery(document).ready(function(){
$('ul.list-group').addClass(function (index) { 
  return "-item-"+ index;
 });
 $('ul.list-group li:last').addClass('last-class')
$('button').click(function(){
  $('.well').css({'width':'200px','height':'300px'});
});

var words = $('p').first().text().split(/\s+/);
var text = words.join('</span> <span>');
$('p').first().html('<span>' + text +' </span>');
$('span').on('click',function(){
  $(this).css('background','red');
});
$('.list-group-item').on('mouseenter',function(){
  var Styles = {
    backgroundColor:"yellow",
    fontWeight:""
  };
  $(this).css(Styles)
}).on('mouseleave',function(){
  $(this).css({"background":"","fontWeight":"bold"});
});
$('button').on("click",function(){
  $(this).css({width:function(index,value){
  return parseFloat(value)*1.2;
  },height:function(index,value){
  return parseFloat(value)*1.2;
  }})
})
//Jquery("[Attribute]|='value")
$("a[hreflang|='en']").css({'background':'red','color':'white'})
$("a[hreflang|='english']").css('background','green');
$("input[name*='man']").val( "Enter your full name" ).next().text("Succesfully messages");
$("input[name~='man']").val( "mr. man is in it!" );
/*$("input[name*='man']").blur(function () { 
    if(true){
      $(this).val("Enter your fullName");
    }else{
      $(this).val("Please Enter your again fullName")
    }
  
 })*/
 
$("#isAgeSelected").click(function(){
  $("#txtAge").toggle(this.selected);
});

if($('#checkMeOut').prop('checked')) {
  alert ("something when checked")
} else {
    alert("something else when not")
}

})



})(jQuery)