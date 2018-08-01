$(document).ready(function() {
  $(window).scroll(function() {
    $("#TableOfContents a").removeClass("current")
    currentAnchor().addClass("current")
  })
});

function tocItem(anchor) {
  return $("[href=\"" + anchor + "\"]")
}

function heading(anchor) {
  return $("[id=" + anchor.substr(1) + "]")
}

let _anchors = null
function anchors() {
  if (!_anchors) {
    _anchors = $("#TableOfContents a").map(function() {
      return $(this).attr("href")
    })
  }
  return _anchors
}

function currentAnchor() {
  let winY = window.pageYOffset
  let currAnchor = null
  anchors().each(function() {
    let y = heading(this).position().top
    if (y < winY + window.innerHeight * 0.23) {
      currAnchor = this
      return
    }
  })
  return tocItem(currAnchor)
}
