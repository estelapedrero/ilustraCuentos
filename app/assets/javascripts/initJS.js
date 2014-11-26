
    $( document ).ready(function() {
      $( ".tools" ).on( "click", addStageElement );
      $( "#stage" ).on( "click", removeStageElement );
      $( ".savebutton" ).on( "click", getJson );

    });