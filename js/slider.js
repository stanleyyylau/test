var activateSlider = function(){

  function injectBtns(){
    var numOfBtns = $('.swipe-wrap div').length;
    var tpl = '<div class="btns">';
    for (var i = 0; i < numOfBtns; i++){
      if(i === 0){
        tpl += '<span class="current"></span>';
      }else{
        tpl += '<span></span>';
      }
    }
    tpl += '</div>';
    $(tpl).appendTo('#slider');
  }

  var options = {
    startSlide: 0,
    speed: 400,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {
      var indexToGo = index;
      if(mySwipe.getNumSlides()==2 && index>1){
        indexToGo = index - 2;
      }
      $('.btns span').removeClass('current').eq(indexToGo).addClass('current');
    },
    transitionEnd: function(index, elem) {}
  }
  // 动态加载底部按钮和激活轮播
  injectBtns();
  window.mySwipe = new Swipe(document.getElementById('slider'), options);
}


activateSlider()
