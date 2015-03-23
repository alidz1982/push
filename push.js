$(document).ready(function() {
  var push = false;
  var numCos;
  var numSin;
  $('#push').click(function() {
    push = !push;
    var num = $('.menu ul li').length;
    if(push) {
      var degrees = 225;
      var offset = 160;
      var rads = toRad(degrees);
      var i;
      for(i = 0; i <= num; i++) {
        numCos = Math.cos(rads/num*i)*offset;
        numSin = Math.sin(rads/num*i)*offset;
        $('.menu ul li:eq('+i+')').css('display', 'block').stop().delay(i*100).animate({opacity: 1, left: numCos, top: numSin}, 200);
      }
      $(this).addClass('active');
    }else{
      $('.menu ul li').animate({opacity:0, left: 0, top: 0}, 200, 
        function() {
          $(this).css('display', 'none');
          $('#push').removeClass('active');
        }
      );
    }
    return false;
  });
});
  function toRad(deg) { return deg * Math.PI / 180; }
