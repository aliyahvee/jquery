//Add in external javascript file
$(document).ready(function(){ //verifies all HTML loaded
  $("#hi-gandhi").on("click", function (e) {e.preventDefault(); //disable the button's default behavior
$('#para1').addClass('highlight');
 // Note no # or . for class being added
$('#hi-gandhi').prop('disabled', true);
});

$("#hi-maya").on("click", function (e) {e.preventDefault(); //disable the button's default behavior
$('#para2').addClass('highlight');
$('hi-maya').prop('disabled', true);
});

$('#style-hed').on("click", function (e) {e.preventDefault(); //disable the button's default behavior
$("h3").addClass("active");
$('#style-hed').prop('disabled', true);
});

$('#style-multi').on("click", function (e) {e.preventDefault(); //disable the button's default behavior
//console.log('hello');
$('#style-multi').prop('disabled', true);
});

$('style-multi').on("click", function (e) {e.preventDefault(); //disable the button's default behavior
$('#para1, #para2').addClass("addBorder higlight"); //adding multiple classes to several elements
$('.authors').addClass('someStyling somePadding'); //adding multiple classes to single element
});

$("#swap-div").on("click", function (e) {e.preventDefault(); //disable the button's default behavior
$(".demo").addClass('newDiv');
$("#swap-div").prop('disabled', true);
});

$("#reset-all").on("click", function (e) {e.preventDefault(); //disable the button's default behavior

$('.demo').removeClass('newDiv').addClass('demo');
//removeClass() works when chained with addClass()
$('.head-txt, #para1, #para2').removeClass('addBorder');
//remove border from everything;
$('authors').removeClass('someStyling'
'somePadding').addClass('authors');
//removeClass() multiple classes
$('#para2, #para1, .head-txt').removeClass('highlight').addClass('no-highlight');
$("h3").removeClass("active");
$("button").prop('disabled', false);

});
}); //closes all the functions
