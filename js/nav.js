$(document).ready(function() {
  $(window).scroll(function() {
    showAsideNavIfNotTop()
  })
});

function showAsideNavIfNotTop() {
  if (window.pageYOffset > 10) {
    $('.left-pane-nav').fadeIn()
  } else {
    $('.left-pane-nav').fadeOut()
  }
}
