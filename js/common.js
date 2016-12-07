/*
* @Author: anchen
* @Date:   2016-07-12 16:59:37
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-03 19:00:22
* 全局js
*/

var common = {
  // 谷歌统计代码
  ga: function() {
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      // document.body.append(a)
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-75275443-1', 'auto');
    ga('send', 'pageview');
  },
  /**
   * [alert description]
   * @param  {[type]}   tit      [标题]
   * @param  {[type]}   txt      [内容，可以带html标签]
   * @param  {Boolean}  isTit    [是否显示标题]
   * @param  {Function} callback [点击确定之后的回调函数]
   */
  alert: function (tit, txt, isTit, callback) {
    var options = {
      titleText: tit || '温馨提示',
      contentHtml: txt || '污污污~~~，快上车！',
      showTitle: isTit || true,
      onClickOk: function(){
        typeof callback === 'function' ? callback() : '';
      }
    }

    var a;
    if ($.dialog) {
      a = $.dialog(options)
      return a
    } else {
      alert('dialog 组件初始化失败')
    }
  },
  /**
   * [tips description]
   * @param  {[type]} txt    [内容]
   * @param  {[type]} second [多少毫秒之后关闭]
   */
  tips: function (txt, second) {
    var options = {
      type: 'tips',
      autoClose: second || 1500,
      infoText: txt || '污污污~~~，快上车！'
    }
    var tip;
    if ($.dialog) {
      tip = $.dialog(options)
      return tip
    } else {
      alert('dialog 组件初始化失败')
    }
  },
  /**
  * @param offset: where to show 'back to top'
  * @param offset_opacity: where to fadein 'back to top'
  */
  backToTop: function (offset, offset_opacity) {
    //injecting HTML structure to DOM
    // var currentHTML = $('html').html();
    // $('html').html(currentHTML + '<a href="#0" class="cd-top">Top</a>');
    $('<a href="#0" class="cd-top">Top</a>').appendTo('html');
    //browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = offset || 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = offset_opacity || 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 700,
      //grab the "back to top" link
      $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('cd-fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });
  },

  upgradeBrowser: function() {
    $('.upgrade-browser').show();
    $('.mask').on('click', function() {
      $('.upgrade-browser').hide();
    })
  }
}

setTimeout(common.ga, 30)
