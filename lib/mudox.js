$( function () {

  $( 'li.top-menu-item:nth-child(even)' )
    .css( 'visibility', 'visible' )
    .addClass( 'animated bounceInRight' );

  $( 'li.top-menu-item:nth-child(odd)' )
    .css( 'visibility', 'visible' )
    .addClass( 'animated bounceInLeft' );

  $( '#logo' )
    .addClass( 'animated bounceInLeft' );

  setTimeout( startCloud, 500 );
  setTimeout( emitParticles, 1200 );
} );

function emitParticles() {
  particlesJS( 'sidebar-particles', {
    particles: {
      color: '#fff',
      shape: 'circle', // "circle", "edge" or "triangle"
      opacity: 0.3,
      size: 4,
      size_random: true,
      nb: 30,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: .6
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 250
      },
      detect_on: 'window', // "canvas" or "window"
      mode: 'grab',
      line_linked: {
        opacity: .8
      },
      events: {
        onclick: {
          push_particles: {
            enable: false,
            nb: 4
          }
        }
      }
    },
    /* Retina Display Support */
    retina_detect: true
  } );
}

function startCloud() {
  if ( !$( '#cloud-canvas' )
    .tagcanvas( {
      initial: [ 0.203, -0.088 ],
      interval: 40,
      fadeIn: 4000,
      dragControl: false,
      dragThreshold: 4,
      decel: 0.985,
      clickToFront: 600,
      textColour: '#ffffff',
      outlineThickness: 0.5,
      maxSpeed: 0.022,
      minSpeed: 0.002,
      outlineMethod: 'size',
      outlineIncrease: 4,
      depth: 0.55
    } ) ) {
    $( '#cloud-container' )
      .hide();
  }
}
