  var removeStageElement = function(event) {
        var $this = $(event.target);
        if ($this.hasClass('delete-button')) {
          event.stopPropagation(); //OLEOLEOLEOLEOLELOSCOJONESDEJS
          $this.parent().remove();
        }
    }
    var addStageElement = function () {
        $('#stage').append("<div class='stage-element'> <%= image_tag('"+this.dataset.element+"') %><i class='delete-button fa fa-times'></i></div>");
        $( ".stage-element" ).draggable({ containment: "parent", snap: false});
      }
    $( document ).ready(function() {
      $( ".tools" ).on( "click", addStageElement );
      $( "#stage" ).on( "click", removeStageElement );
    });