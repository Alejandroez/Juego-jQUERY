

var estadoGameOver = {
	 create: function () {
        var gameoverLabel = stateText = game.add.text(500, 300, ' ', {font: '50px Arial', fill: '#F2F2F2'});
        stateText.anchor.setTo(1.1, 0.2);
    },

    update: function () {

            stateText.text = "Juego Terminado";
            stateText.visible = true;
						totales();
    }
};
function totales()
{
//*    $(".panel-score").animate({width:'100%'},1000);
    $(".panel-score").attr("width", "100%");
		$(".panel-score").show();
		$("canvas").hide();
		$(".panel-tablero").hide();
		$("#timer").text = "02:00";

}
