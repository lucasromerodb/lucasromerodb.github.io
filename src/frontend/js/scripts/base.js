function setLayout() {
  setBaseBodyWidth();
}

function setBaseBodyWidth() {
  var baseWidth         = $('.l-base').outerWidth(),
      baseProfileWidth  = $('.l-base__profile').outerWidth();


  $('.l-base__body').css({
    'width': baseWidth - baseProfileWidth,
    'left': baseProfileWidth
  });
}
