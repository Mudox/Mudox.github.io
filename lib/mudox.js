$( function () {

  $( 'li.top-menu-item:nth-child(even)' )
    .addClass( 'animated bounceInRight' );

  $( 'li.top-menu-item:nth-child(odd)' )
    .addClass( 'animated bounceInLeft' );

  $( 'a#Mudox' )
    .addClass( 'animated bounceInLeft' );

} )
