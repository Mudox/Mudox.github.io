window.onload = function () {
  //if ( !sweetAlert ) {
    //alert( "Oops!" );
  //}

  //sweetAlert( 'Sorry For The Messy', 'It is under construction' );

  $('li.top-menu-item:nth-child(even)').addClass('animated bounceInRight');
  $('li.top-menu-item:nth-child(odd)').addClass('animated bounceInLeft');

  $('#Mudox').addClass('animated bounceIn');
};
