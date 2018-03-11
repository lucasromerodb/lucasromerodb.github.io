function setLayout() {
  setBaseBodyWidth();
}

function setBaseBodyWidth() {
  var baseWidth         = $('.l-base').outerWidth(),
      baseProfileWidth  = $('.l-base__profile').outerWidth();


  if ($(window).width() > 1024) {
    $('.l-base__body').css({
      'width': baseWidth - baseProfileWidth,
      'left': baseProfileWidth
    });
  }
}
