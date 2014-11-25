  var removeStageElement = function(event) {
        var $this = $(event.target);
        if ($this.hasClass('delete-button')) {
          event.stopPropagation(); //OLEOLEOLEOLEOLELOSCOJONESDEJS
          $this.parent().remove();
        }
    }
    var addStageElement = function () {
        $('#stage').append("<div class='stage-element' data-src='"+this.dataset.element+"'><i class='delete-button fa fa-times'></i><img src='"+this.dataset.element+"'></div>");
        $( ".stage-element" ).draggable({ containment: "parent", snap: false});
      }


    var getJson = function() {
      var stageElements = $('.stage-element').map( function( ) {
          $top = $(this).css("top");
          $left = $(this).css("left");
          $img = $(this).data("src");
          $background = document.getElementsByClassName('stage-element')[0].parentNode.style.backgroundImage;
          $bookid = $('#book_id').data("bookid");

        return {top: $top, left: $left, img: $img, background: $background};

      }).get();
      alert(JSON.stringify(stageElements));
      $.post('/books/'+ $bookid +'/pages', {content: JSON.stringify(stageElements)});

    }
    $( document ).ready(function() {
      $( ".tools" ).on( "click", addStageElement );
      $( "#stage" ).on( "click", removeStageElement );
      $( "#btnjson" ).on( "click", getJson );

    });