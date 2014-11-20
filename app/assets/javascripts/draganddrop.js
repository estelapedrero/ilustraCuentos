$(function() {
	var equis = ""

    $(".draggable").draggable({
    	helper: function(){
    		return $(this).clone().appendTo('.main-stage').css({
                'zIndex': 5
            });
    	},
    	cursor: 'move',
        containment: ".main-stage"
    });

    $('.main-stage').droppable({
    	activeClass: 'ui-state-hover',
    	accept: '.draggable',
    	activate: function(ev,ui){
    		equis = document.getElementsByClassName('delete-button');

    		for (var i=0; i<equis.length; i++){
				equis[i].addEventListener('click',deleteObj.bind(this,i));
			};
    	},
		drop: function(ev, ui) {
		//alert(ev.clientX);
			console.log($(document.createElement('p')).text(ui.offset.left));
			console.log($(document.createElement('p')).text(ui.offset.top));
			if (!ui.draggable.hasClass(".draggable"))
                $(this).append($(ui.draggable).clone().addClass(".draggable").draggable());
            }
	});

	function deleteObj(i){
		equis[i].parentNode.remove();
	};
})
