$(document).ready(function() {
  $.each( $( "#links a" ), function( i, link ) {
      $( link ).delay( i * 50 ).fadeIn( 3500 );
  });
});
