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

particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 0.5,
      anim: {
        enable: true,
        speed: 10,
        opacity_min: 0.1,
        sync: true
      }
    },
    size: 3,
    size_random: true,
    nb: 50,
    line_linked: {
      enable_auto: true,
      distance: 230,
      color: '#fff',
      opacity: 0.3,
      width: 1.5,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 0.6
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .3
    },
    events: {
      onclick: {
        enable: true,
        mode: 'remove', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  retina_detect: true
});
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
