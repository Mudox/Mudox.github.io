let sidebarMenu;
let seeAlso;
let shown = 'seeAlso';

$(document).ready(function() {
  sidebarMenu = $('.sidebar-menu').detach();
  sidebarMenu.css('display', 'initial');
  seeAlso = $('.related-article-list');
  seeAlso.css('display', 'initial');

  alternateMenuAndSeeAlso()

  $(window).scroll(function() {
    alternateMenuAndSeeAlso()
  })
});

let lastWindowScrollY = 0;

function alternateMenuAndSeeAlso() {
  let lastY = lastWindowScrollY;
  let y = window.scrollY
  lastWindowScrollY = y;

  if (y < 20) {
    fadeInSeeAlso();
    return;
  }

  if (y > lastY) {
    fadeInMenu();
  } else {
    fadeInSeeAlso();
  }
}

function fadeInMenu() {
  let stage = $('.left-sidebar .stage1')

  if (shown != 'sidebarMenu') {
    shown = 'sidebarMenu';
    stage.fadeOut('fast', function() {
      stage.empty();
      stage.append(sidebarMenu);
      stage.fadeIn('fast');
    })
  }
}

function fadeInSeeAlso() {
  let stage = $('.left-sidebar .stage1')

  if (shown != 'seeAlso') {
    shown = 'seeAlso';
    stage.fadeOut('fast', function() {
      stage.empty();
      stage.append(seeAlso);
      stage.fadeIn('fast');
    })
  }
}

const topStart = 128; // should be the same as in the scss file.
const topEnd = 50;
const topRange = topStart - topEnd;
let lastTop = topStart;

function scrollPanes() {

  const yStart = 100;
  const yEnd = window.innerHeight;
  const yRange = yEnd - yStart;

  let y = window.scrollY;

  let newTop;
  if (y < yStart) {
    newTop = topStart
  } else if (yStart < y && y < yEnd) {
    let delta = topRange * (y - yStart) / yRange;
    newTop = topStart - delta;
  } else {
    newTop = topEnd;
  }

  if (newTop != lastTop) {
    console.log(newTop.toFixed(2) + '   delta: ' + (newTop - lastTop).toFixed(2));
    lastTop = newTop;
  }

  Array.from(document.getElementsByClassName('sidebar')).forEach(function(item) {
    //let pos = $(item).offset();
    //pos["top"] = y + newTop;
    //$(item).offset(pos);
    item.style.marginTop = newTop + 'px';
  })
}
