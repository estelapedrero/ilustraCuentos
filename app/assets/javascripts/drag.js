  var removeStageElement = function(event) {
        var $this = $(event.target);
        if ($this.hasClass('delete-button')) {
          event.stopPropagation(); //OLEOLEOLEOLEOLELOSCOJONESDEJS
          $this.parent().remove();
        }
    }
    var addStageElement = function () {
        $('#stage').append("<div class='stage-element' data-src='"+this.dataset.element+"'><i class='delete-button fa fa-times'></i><img src='"+this.dataset.getAttribute('src')+"'></div>");
        $( ".stage-element" ).draggable({ containment: "parent", snap: false});
      }

      $( ".stage-element" ).draggable({ containment: "parent", snap: false});

