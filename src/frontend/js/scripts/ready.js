$(document).ready(function() {
  setLayout();
  f_social__share();
  $('.l-base__profile, .l-base__body').addClass('is-visible');
})

$(window).on('resize', function() {
  setLayout();
})
