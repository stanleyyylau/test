/*
 * @Author: anchen
 * @Date:   2016-10-12 19:14:42
 * @Last Modified by:   anchen
 * @Last Modified time: 2016-10-13 14:16:48
 */

// var loadMore = {
//   init: function() {
//     loadMore.pull = new Pull2Load(this.getData, {
//       prerender: 10
//     });
//   },
//   getData: function() {
//     var page = $('.J_page').data('page')
//     var data = {
//       page: $('.J_page').data('page'),
//       address: $('.J_address').data('address')
//     }
//     loadMore.pull.pause()
//     $.ajax({
//       url: options.url,
//       type: 'GET',
//       dataType: 'json',
//       data: data,
//       success: function(ret) {
//         if (ret.status) {
//           $('.J_page').attr('data-page', page + 1)
//           loadMore.render(ret.data)
//         } else {
//           loadMore.pull.run()
//         }
//       },
//       error: function() {
//         loadMore.pull.run()
//       }
//     })
//   },
//   render: function(data, type) {
//     var tpl, tag = ''
//     data = data.reverse();
//     for (var i = data.length - 1; i >= 0; i--) {
//       if (type === 'mastre') {
//         tpl += ''
//             + '<li class="master-item">'
//             + '  <a href="master_details.html">'
//             + '    <img src="' + data[i].pic + '" class="master-item-pic" alt="" />'
//             + '    <div class="master-item-info">'
//             + '      <h2>' + data[i].title + '<span class="master-item-tag">' + data[i].browse + '次浏览</span></h2>'
//             + '      <p>' + data[i].intro + '</p>'
//             + '      <span class="master-item-tag">' + data[i].tag + '</span>'
//             + '      <span class="master-item-time">' + data[i].time + '</span>'
//             + '    </div>'
//             + '  </a>'
//             + '</li>'
//       } else {
//         tag = data[i].tag === 'all' ? '<span class="item-tag item-tag-all">全职</span>' : '<span class="item-tag">兼职</span>'

//         tpl += ''
//             + '<li class="find-list-item">'
//             + '  <a href="#">'
//             + '   <p class="item-tit">' + tag + data[i].title + '</p>'
//             + '<p class="item-info">'
//             + '<span><i class="iconfont icon-didian"></i>' + data[i].address + '</span>'
//             + '<span>' + data[i].company + '</span>'
//             + '</p>'
//             + '<p class="item-time">' + data[i].time + '</p>'
//             + '</a>'
//             + '</li>'
//       }
//     }
//     type === 'master' ? $('.J_master').append(tpl) : $('.J_find').append(tpl)
//     tpl = ''
//   }
// }

// loadMore.init()
function bind(fn, context){
  return function(){
    return fn.apply(context, arguments)
  }
}

var loadMore = function (options){
  this.buildParams(options)
  this.init()
};

loadMore.prototype.init = function () {
  this.pull = new Pull2Load(bind(this.getData, this), {
    prerender: 10
  });
};

loadMore.prototype.buildParams = function (opt) {
  var self = this
  if (opt === undefined || opt === null) {
    opt = {}
  }

  //设定参数初值，无参数则给定默认参数
  function setParams(k, v){
    var gaven = opt[k];
    self[k] = (v === undefined || v === null) ? v: gaven;
  }

  $.each({
    'page': 1,
    'url': '',
    'dom': '',
    'type': 'master',
    'address': '',
  }, setParams)

};

loadMore.prototype.getData = function () {
  console.log('you just pull2load')
  var self = this
  var data = {}
  if (self.address) {
    data = {
      page: self.page,
      address: self.address
    }
  } else {
    data.page = self.page
  }

// ?pageNum=1&areaId=440600&type=1
// http://localhost:8080/master/phone.do?
  if (self.url !== '') {
    if(options.type === 'find'){
      var requestUrl = self.url + '?pageNum=' + self.page + '&areaId=' + areaId + '&type=' + type;
    }else{
      var requestUrl = self.url + '?pageNum=' + self.page;
    }
    self.pull.pause()
    $.ajax({
      url: requestUrl,
      type: 'GET',
      dataType: 'json',
      success: function(ret) {
        if (ret.msg == 'success') {
          // $('.J_page').attr('data-page', page + 1)
          self.page = self.page + 1
          console.log('new page is ' + self.page)
          self.pull.run()
          self.render(ret.data)
        } else {
          self.pull.run()
        }
      },
      error: function() {
        self.pull.run()
      }
    })
  }
};

loadMore.prototype.render = function(data){
  var tpl, tag = '';
  data = data.reverse();
  for (var i = data.length - 1; i >= 0; i--) {
    if (this.type === 'article') {
      console.log('createData is ' + data[i].createData)
      tpl += ''
          + '<article class="article-container">'
          +   '<a href="#">'
          +     '<h2 class="article-title">新闻标题就放在这里最多了</h2>'
          +     '<div class="article-image">'
          +       '<img class="" src="#" alt="" />'
          +     '</div>'
          +   '</a>'
          + '</article>'
    } else {
      // Job item
      tpl += ''
          + '<a href="#" class="item">'
          +   '<div class="row">'
          +     '<div class="type part-time">'
          +       '兼职'
          +     '</div>'
          +     '<div class="icon-con">'
          +       '<i class="iconfont icon-quick-money"></i>'
          +     '</div>'
          +     '<div class="job-title">'
          +       '派单员'
          +     '</div>'
          +     '<div class="tag">'
          +       '1元保障金'
          +     '</div>'
          +     '<div class="pricing">'
          +       '<strong>32</strong>元/小时'
          +     '</div>'
          +   '</div>'
          +   '<div class="row">'
          +     '<div class="icon-con">'
          +       '<i class="iconfont icon-date"></i>'
          +     '</div>'
          +     '<div class="publish-time">'
          +       '五分钟前'
          +     '</div>'
          +     '<div class="icon-con">'
          +       '<i class="iconfont icon-location"></i>'
          +     '</div>'
          +     '<div class="location">'
          +       '大良镇街'
          +     '</div>'
          +   '</div>'
          +   '<div class="row time-related">'
          +     '<div class="working-time">'
          +       '工作时间：'
          +     '</div>'
          +     '<p class="working-time-detail">'
          +       '6月18日 8:00 , 总计8小时'
          +     '</p>'
          +   '</div>'
          +   '<div class="row auther-related">'
          +     '<div class="job-type">'
          +       '个人:'
          +     '</div>'
          +     '<div class="auther-name">'
          +       '张先生'
          +     '</div>'
          +     '<div class="tag verified">'
          +       '已认证'
          +     '</div>'
          +   '</div>'
          + '</a>'
    }
  }
  $('.' + this.dom).append(tpl)
  tpl = ''
};
