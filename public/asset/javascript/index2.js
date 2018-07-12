var prev = $('.prev');
var next = $('.next');
var num = 0;

$('.content-img, .content-profile-detail').hide();
$('.content-img').eq(0).slideToggle('speed');
$('.content-profile-detail').eq(0).slideToggle('speed');

next.on('click', function() {
  $('.content-img, .content-profile-detail').hide();
  num++;
  if (num > 3) {
    num = 0;
  }
  $('.content-img').eq(num).slideToggle(1000);
  $('.content-profile-detail').eq(num).slideToggle('speed');
});

prev.on('click', function() {
  $('.content-img, .content-profile-detail').hide();
  num--;
  if (num < 0) {
    num = 3;
  }
  $('.content-img').eq(num).slideToggle(1000);
  $('.content-profile-detail').eq(num).slideToggle('speed');
});