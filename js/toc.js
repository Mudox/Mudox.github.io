$( document ).ready(function() {
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

function anchors() {
  return $("#TableOfContents a").map(function() {
    return $(this).attr("href")
  })
}

function currentAnchor() {
  var winY = window.pageYOffset
  var currAnchor = null
  anchors().each(function() {
    var y = heading(this).position().top
    if (y < winY) {
      currAnchor = this
      return
    }
  })
  return tocItem(currAnchor)
}
