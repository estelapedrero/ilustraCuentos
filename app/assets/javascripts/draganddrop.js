$(function() {
    $(".draggable").draggable({
    	containment:'.main-stage',
    	cursor: 'pointer',
    	stop: function(event, ui){
      		$("#posx").text(ui.position.left);
      		$("#posy").text(ui.position.top);
  		}
    });
  });




