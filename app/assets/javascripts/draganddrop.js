$(function() {
    $(".draggable").draggable({
    	containment:'.main-stage',
    	cursor: 'pointer',
    	drag: function(event, ui){
      		$("#posx").text(ui.position.left);
      		$("#posy").text(ui.position.top);
  		},
		stop: function( event, ui ) {
		   $('.delete').addClass('.show-button');
		}
    });
  });




