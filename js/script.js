$(function(){

var $eventElems = $('a[href^=#tabs-]');

$eventElems.click(function(eventObject){

var str = String($(this).get());

   for(var i = 0, j = 1; i < $eventElems.size(); i++, j++ ){

       if(str[str.length-1] == j){
          $('div[id=tabs-'+ j +']').show();
          $(this).parent().css({background: '#EFE7E6'});
       }else{
          $('div[id=tabs-'+ j +']').hide();
          $('a[href^=#tabs-'+ j +']').parent().css({background: '#E1D1C9'});
       }
   }

 eventObject.preventDefault();

 });

//Form//

function giveTip(target_items, name){


$(target_items).each(function(i){

$("div label").append("<span class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></span>");

var my_tooltip = $("#"+name+i);

var inputCoord = $(this).offset();

$(this).removeAttr("title").hover(function(){

my_tooltip.stop(true,true).slideDown(200);

$(this).css({backgroundColor: '#fff'});

my_tooltip.css({left: inputCoord.left - 190 , top: inputCoord.top - 235});

}, function(){

my_tooltip.stop(true,true).slideUp(200);

});

});

}

giveTip("input","tooltip");

//Button//

function giveAllTips(target_items, name){


$("input").each(function(i){

$("div label").append("<span class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></span>");

var my_tooltip = $("#"+name+i);

var inputCoord = $(this).offset();

$(target_items).click(function(){


my_tooltip.css({left: inputCoord.left - 190 , top: inputCoord.top - 235});

my_tooltip.stop(true,true).slideDown(200);

});

});

}

giveAllTips(".btn","tooltip");
      
});//End jquery-ready
