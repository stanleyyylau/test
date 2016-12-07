;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(document).ready(function(){
  common.backToTop();
  var ie = (function(){

      var undef,
          v = 3,
          div = document.createElement('div'),
          all = div.getElementsByTagName('i');

      while (
          div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
          all[0]
      );

      return v > 4 ? v : undef;

  }());

  if(ie < 9) {
    common.upgradeBrowser();
    // add class for responsiveness

    var AllClassNames = "bp-first bp-second bp-third bp-fourth bp-fifth";
    var first = "bp-first";
    var second = "bp-first bp-second";
    var third = "bp-first bp-second bp-third";
    var fourth = "bp-first bp-second bp-third bp-fourth";
    var fifth = AllClassNames;

    var bpFirst = 1147;
    var bpSecond = 1048;
    var bpThird = 879;
    var bpFourth = 700;
    var bpFifth = 450;


    $( window ).resize(function() {
      var width = $(window).width();
      $('html').removeClass(AllClassNames);
      if(width <= bpFirst ){
        $('html').addClass(first);
      }
      if(width <= bpSecond){
        // debugger;
        $('html').addClass(second);
      }
      if(width <= bpThird){
        $('html').addClass(third);
      }
      if(width <= bpFourth){
        $('html').addClass(fourth);
      }
      if(width <= bpFifth){
        $('html').addClass(fifth);
      }
    });
  }

  // only show animation when on desktop
  if($(window).width() >= 1000){
    $('.tcoin-banner-phone img').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInLeft');
    })

    $('.banner .col-6.right').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInRight');
    })

    $('.what-is-tcoin .content-row .col-8 img').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInLeft');
    })

    $('.what-is-tcoin .content-row .col-4 .what-is-item').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInRight');
    })

    $('.shooting-star .inner').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInUp');
    })

    $('.shooting-star .inner').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInUp');
    })

    $('.how-to-use .how-to-use-item').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeIn');
    })

    $('.how-to-use .how-to-use-pic').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeIn');
    })

    $('.how-to-get .steps').inViewport(function(vis){
      if(vis) $(this).addClass('animated fadeInUp');
    })
  }


})
