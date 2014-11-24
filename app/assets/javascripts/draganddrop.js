$(function() {
	var equis = ""

    $(".draggable").draggable({
    	cursor: 'move',
        containment: "#stage",
        helper: function(){
    		return $(this).clone().appendTo('.main-stage');
    	}
    });

    $('#stage').droppable({
    	accept: '.draggable',
    	activate: function(ev,ui){
    		equis = document.getElementsByClassName('delete-button');
    		for (var i=0; i<equis.length; i++){
				equis[i].addEventListener('click',deleteObj.bind(this,i));
			};
    	},
		drop: function(ev, ui) {
			console.log(ui.offset.left);
			console.log(ui.offset.top);
            if (!ui.draggable.hasClass("draggable"))
                var dropped = $(ui.draggable).clone().addClass("draggable").draggable();
                console.log(dropped);
                dropped.css({'left': ui.position.left, 'top': ui.position.top});         
	   }
    });

	function deleteObj(i){
		equis[i].parentNode.remove();
	};
})
