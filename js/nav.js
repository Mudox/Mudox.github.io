var sidebarMenu;
var seeAlso;
var shown = '';

$(document).ready(function() {
  sidebarMenu = $('.sidebar-menu').detach();
  sidebarMenu.css('display', 'initial');
  seeAlso = $('.related-article-list');
  seeAlso.css('display', 'initial');

  $(window).scroll(function() {
    showHideLeftSidebarSections()
    scrollPanes()
  })
});

var lastYOffset;
let yThreshHold = 10;

function showHideLeftSidebarSections() {
  var stage = $('.left-sidebar .stage1')

  if (window.pageYOffset > lastYOffset) {
    if (shown == 'sidebarMenu') {
      return
    }
    stage.fadeOut('fast', function() {
      stage.empty();
      stage.append(sidebarMenu);
      stage.fadeIn('fast');
      shown = 'sidebarMenu';
    })
  } else if (window.pageYOffset < lastYOffset) {
    if (shown == 'seeAlso') {
      return
    }
    stage.fadeOut('fast', function() {
      stage.empty();
      stage.append(seeAlso);
      stage.fadeIn('fast');
      shown = 'seeAlso';
    })
  } else {
    // noop
  }

  lastYOffset = window.pageYOffset;
}

function scrollPanes() {
  var topStart = 128; // should be the same as in `pane.css`
  var topEnd = 50;
  var topRange = topStart - topEnd;

  var yStart = 100;
  var yEnd = window.innerHeight;
  var yRange = (yEnd - yStart);

  var y = window.pageYOffset;

  var newTop;
  if (y < yStart) {
    newTop = topStart;
  } else if (yStart < y && y < yEnd) {
    var delta = topRange * (y - yStart) / (yEnd - yStart);
    newTop = topStart - delta;
  } else {
    newTop = topEnd;
  }

  Array.from(document.getElementsByClassName('sidebar')).forEach(function(item) {
    item.style.marginTop = newTop + 'px';
  })
}
