let sidebarMenu;
let seeAlso;
let shown = '';

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

let lastWindowScrollY = 0;

function showHideLeftSidebarSections() {
  let stage = $('.left-sidebar .stage1')
  let lastY = lastWindowScrollY;
  let y = window.scrollY
  lastWindowScrollY = y;

  if (y > lastY) {
    if (shown != 'sidebarMenu') {
      shown = 'sidebarMenu';
      stage.fadeOut('fast', function() {
        stage.empty();
        stage.append(sidebarMenu);
        stage.fadeIn('fast');
      })
    }
  } else {
    if (shown != 'seeAlso') {
      shown = 'seeAlso';
      stage.fadeOut('fast', function() {
        stage.empty();
        stage.append(seeAlso);
        stage.fadeIn('fast');
      })
    }
  }
}

function scrollPanes() {
  let topStart = 128; // should be the same as in `pane.css`
  let topEnd = 50;
  let topRange = topStart - topEnd;

  let yStart = 100;
  let yEnd = window.innerHeight;
  let yRange = (yEnd - yStart);

  let y = window.scrollY;

  let newTop;
  if (y < yStart) {
    newTop = topStart;
  } else if (yStart < y && y < yEnd) {
    let delta = topRange * (y - yStart) / (yEnd - yStart);
    newTop = topStart - delta;
  } else {
    newTop = topEnd;
  }

  Array.from(document.getElementsByClassName('sidebar')).forEach(function(item) {
    item.style.marginTop = newTop + 'px';
  })
}
