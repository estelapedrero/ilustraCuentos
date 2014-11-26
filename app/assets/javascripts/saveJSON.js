
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
    }