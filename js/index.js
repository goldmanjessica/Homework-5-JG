
//finished
$("#fadeOut").click(slowlyVanish);

function slowlyVanish() {
	 $("#circle1").fadeOut (3000);
}




// FINISHED
$("#getBigger").click(function(){
		$("#circle2").css({height: '300px', width: '300px'});
});





//finished
$('#slideRight').click(function() {
		$('#circle3').animate({
		'marginLeft' : "+=80px" //moves right
		});
	});



//$(document).ready(function(){
   $("#clone").click(function(){
      $("#circle5").clone().appendTo("body");
   });
//});


//finished
$("#blink").click(blinkCircle);

function blinkCircle() {
    $('#circle4').fadeOut(500);
    $('#circle4').fadeIn(500);
}
setInterval(blink_text, 1000);









   