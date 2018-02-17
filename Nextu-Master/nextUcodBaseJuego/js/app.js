
$(document).ready(function(){

	$(".btn-reinicio").click(function(){

  $("panel-score").removeAttr("width");
	$("panel-score").css("width", "148px");
	$("canvas").show();
	$(".panel-tablero").show();
	$(".score").show();

	startGame();
	});
});


window.setInterval (BlinkIt, 1000);
var color = "red";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#2aea15")? "#ffff00" : "#2aea15";
blink.style.color = color;}


function startGame()
{
	$(".btn-reinicio").text("Reiniciar");

	$("#timer").text("02:00");

	startTime();

  game.state.add('principal', estadoPrincipal);
	game.state.add("GameOver", estadoGameOver);
	game.state.start('principal');
}
function GameOver(){
	game.state.start('GameOver');
}
