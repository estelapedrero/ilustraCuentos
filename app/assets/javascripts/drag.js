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

        return {top: $top, left: $left, img: $img, background: $background};

      }).get();
      $bookId = $('#book_id').data("bookid");
      $pageId = $('#page_id').data("pageid");
      $.ajaxSetup({
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
      });
      $.ajax('/books/'+ $bookId +'/pages/'+ $pageId,{
        data: {page: {info: JSON.stringify(stageElements)}},
        type: "PUT"
      });
      console.log('hola')

    }
    $( document ).ready(function() {
      $( ".tools" ).on( "click", addStageElement );
      $( "#stage" ).on( "click", removeStageElement );
      $( ".savebutton" ).on( "click", getJson );

    });