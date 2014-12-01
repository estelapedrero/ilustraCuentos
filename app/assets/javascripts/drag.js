  var removeStageElement = function(event) {
        var $this = $(event.target);
        if ($this.hasClass('delete-button')) {
          event.stopPropagation(); //OLEOLEOLEOLEOLELOSCOJONESDEJS
          $this.parent().remove();
        }
    }
    var addStageElement = function (event) {
console.log(event.target)
        $('#stage').append("<div class='stage-element' data-src='"+event.target.getAttribute('src')+"'><i class='delete-button fa fa-times'></i><img src='"+event.target.getAttribute("src")+"'></div>");
        $( ".stage-element" ).draggable({ containment: "parent", snap: false});
      }

      $( ".stage-element" ).draggable({ containment: "parent", snap: false});

