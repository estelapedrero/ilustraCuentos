$(function() {
    $(".draggable").draggable({
    	containment:'.main-stage',
    	cursor: 'pointer',
    	drag: function(event, ui){
      		$("#posx").text(ui.position.left);
      		$("#posy").text(ui.position.top);
  		}
    });
    $(".main-stage").droppable({
      accept: ".draggable",
      drop: function(event,ui){
        $(this).append($(ui.draggable).clone());
      };
    });
  });
