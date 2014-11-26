    var getJson = function() {
      var stageElements = $('.stage-element').map( function( ) {
          $top = $(this).css("top");
          $left = $(this).css("left");
          $img = $(this).data("src");
        return {top: $top, left: $left, img: $img};
      }).get();
      var $bookId = $('#book_id').data("bookid");
      var $pageId = $('#page_id').data("pageid");
      var $backgroundImage = $('#stage').css("backgroundImage").match(/\/assets\/(\w|-|\.)*/i)[0];

      var pageInfo = { pageId: $pageId, bg: $backgroundImage, elements: stageElements }

      $.ajaxSetup({
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
      });
      $.ajax('/books/'+ $bookId +'/pages/'+ $pageId,{
        data: {page: {info: JSON.stringify(pageInfo)}},
        type: "PUT"
      });  

  
    }


   
