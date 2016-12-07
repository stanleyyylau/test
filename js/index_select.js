/*
 * @Author: janmi 2956815155@qq.com
 * @Date:   2016-07-07 15:07:00
 * @Last Modified by:   anchen
 * @Last Modified time: 2016-07-13 17:59:55
 */
 "use strict";
// 这些数据需要输出到页面中 ps:以下为模拟数据
var cityList = [{
  id: '1',
  city: '广州',
  area: [{
    id: '1',
    value: '天河区'
  }, {
    id: '2',
    value: '白云区',
  }, {
    id: '3',
    value: '番禹区'
  }, {
    id: '4',
    value: '越秀区'
  }, {
    id: '5',
    value: '萝岗区'
  }, {
    id: '6',
    value: '海珠区'
  }, {
    id: '7',
    value: '花都区'
  }, {
    id: '8',
    value: '黄浦区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '2',
  city: '深圳市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '3',
  city: '珠海市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '4',
  city: '佛山市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '5',
  city: '东莞市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '6',
  city: '中山市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '7',
  city: '清远',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '8',
  city: '江门市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '9',
  city: '茂名市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '10',
  city: '梅州市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}, {
  id: '11',
  city: '灿头市',
  area: [{
    id: '1',
    value: '全市'
  }, {
    id: '2',
    value: '宝安区',
  }, {
    id: '3',
    value: '福田区'
  }, {
    id: '4',
    value: '光明新区'
  }, {
    id: '5',
    value: '龙岗区'
  }, {
    id: '6',
    value: '龙华新区'
  }, {
    id: '7',
    value: '南山区'
  }, {
    id: '8',
    value: '盐田区'
  }, {
    id: '9',
    value: '荔湾区'
  }, {
    id: '10',
    value: '南沙区'
  }, {
    id: '11',
    value: '增城市'
  }]
}];
// var orderData = [
//   {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "传菜员",
//             "orderNo": "C2BB0201607131754513930",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:正宗仙庙烧鸡",
//             "createDate": "17小时前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "传菜员",
//             "orderNo": "C2BB0201607131754517058",
//             "areaName": "广州",
//             "orderType": 0,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:木生生烧烤",
//             "createDate": "17小时前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "楼面服务员",
//             "orderNo": "C2CB0201607131754515627",
//             "areaName": "广州",
//             "orderType": 0,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:家兴川菜馆",
//             "createDate": "17小时前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "洗碗工",
//             "orderNo": "C2BB0201607131754516694",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:宋城黄记",
//             "createDate": "17小时前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "洗碗工",
//             "orderNo": "C2BB0201607131754517598",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:程记砂锅麻辣烫",
//             "createDate": "17小时前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "传菜员",
//             "orderNo": "C2BB0201607121805541923",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:粤安",
//             "createDate": "1天前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "洗碗工",
//             "orderNo": "C2BB0201607121805546624",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:原味尚品",
//             "createDate": "1天前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "楼面服务员",
//             "orderNo": "C2BB0201607121805540128",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:粥香扑面餐馆",
//             "createDate": "1天前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "楼面服务员",
//             "orderNo": "C2BB0201607121805549906",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:下班啦蒸爽餐厅",
//             "createDate": "1天前",
//             "flagFree": 1
//         },
//         {
//             "startDate": "工作时间：07月14日 11:26,总计0小时",
//             "itemName": "楼面服务员",
//             "orderNo": "C2BB0201607121805541486",
//             "areaName": "广州",
//             "orderType": 1,
//             "flagAudit": 0,
//             "money": "3000",
//             "companyName": "企业:三多餐厅",
//             "createDate": "1天前",
//             "flagFree": 1
//         }
// ];

        /*
{
    code, msg, data
}
        */
        /*
订单号： orderNo （orderType=0并且 orderNo以C2C开头的是到家服务）
订单类型： orderType （0：兼职 1 :全职）
工种名称： itemName
金额： money
个人和企业名称： companyName
认证： flagAudit （0 ：未认证；1:已认证）
地址： areaName
下单时间： createDate
工作时间： startDate
是否付费： flagFree （0:付费，一元保证金；1：免费）
        */
/*
  涮选
 */
var select = {
    // 常量
    Constants: {
        // 兼职
        ORDER_TYPE_PART_TIME: 0,
        // 全职
        ORDER_TYPE_FULL_TIME: 1,
        // "到家"的订单编号前缀
        PRE_ORDER_NO_HOME: "C2C",
        // 免费发布
        FLAG_FEE_FREE: 1,
        // 快速发布 一元保证金
        FLAG_FEE_QUICK: 0,
        // 已认证
        FLAG_AUDIT_YES: 1,
        // 未认证
        FLAG_AUDIT_NO: 0,
        // 到家
        CSS_CLASS_HOME: "home",
        // 全职
        CSS_CLASS_LONG: "long",
        // 免费发布
        CSS_CLASS_ICON_FREE: "icon-mian",
        // 快速发布
        CSS_CLASS_ICON_QUICK: "icon-kuaiqian",
        //
        TEMPLATE: '<a href="javascript:;" class="jobitem">\
                <div class="row">\
                    <p class="type"></p>\
                    <p class="iconfont icon-kuaiqian"></p>\
                    <p class="name"></p>\
                    <p class="deposit">1元保证金</p>\
                    <p class="money">32<time>元/小时</time></p>\
                </div>\
                <div class="row">\
                    <p class="time iconfont icon-shijian"><span></span></p>\
                    <p class="address iconfont icon-jikediancanicon28"><span></span></p>\
                </div>\
                <div class="row">\
                    <p class="work-time">工作时间：6月18日 8:00，总计8小时</p>\
                </div>\
                <div class="row">\
                    <p class="person">个人：张先生</p>\
                    <button class="btn">已认证</button>\
                </div>\
            </a>',
    },
    // 变量
    url: "", // 请求的 URL
    lastQueryData: {}, // 上次请求的数据
    pull2load: {}, // 上拉加载的实例对象
    // 初始化
    init: function() {
        // mui('.mui-scroll-wrapper').scroll({
        //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        // });
        $('.mui-scroll-wrapper').show();
    },
    // 获取所有城市
    getCitys: function() {
        var data = [];
        cityList.forEach(function(item) {
            data.push({
                id: item.id,
                city: item.city
            });
        })
        return data;
    },
    // 修改城市
    eidtCity: function() {
        var self = this,
            tpl = '',
            len = $('.city-item').length,
            data = [];
        data = data.length > 0 ? data : self.getCitys(); //data 等于后端返回的数据
        $('.J_area').hide(); //隐藏区域div

        // 直接显示城市数据或者注射数据后再显示
        if (len == 0) {
            data.forEach(function(item) {
                tpl += '<span class="city-item" data-cityid="' + item.id + '">' + item.city + '</span>';
            })
            $('.J_city').html(tpl).show();
        } else {
            $('.J_city').show();
        }
    },
    // 根据选择的城市显示对应的区
    eidtArea: function(id, key) {
        var data = [],
            tpl = '';
        cityList.forEach(function(item) {
            if (item.id == id) {
                data = item.area;
                $('.J_newCtiy').parents('.select-art-item').data('id', id);
            }
        })
        if (data.length > 0) {
            data.forEach(function(item) {
                tpl += '<span class="select-item" data-itemid="' + item.id + '">' + item.value + '</span>'
            })
            $('.J_city').hide();
            $('.J_area').html(tpl).show();
            $('.J_newCtiy').html(key);
        }
    },
    // 根据条件向服务器请求订单数据
    // data: 要提交的数据
    // done: 提交完成并从服务器返回数据后执行的操作。没有此方法时，默认刷新页面数据（清空旧数据）。有此方法时，参数是服务器返回的对象。
    // fail: 提交失败或者服务器返回失败时执行此函数。
    //       从服务器时，无此方法，则弹框提示错误信息，有此方法，则不作任何处理，直接交由此方法处理。
    //       调用此方法时，有参数时，是从服务器返回的数据，没参数时表示 ajax 出错。
    // always: 无论提交成功还是失败都会执行此函数。
    queryOrder: function(data, done, fail, always) {
        select.lastQueryData = data;

        select.pull2load.pause();

        if (data.pageNum > 1) {
            select.showPullLoading();
        } else {
            // Loading.show();  // 等于1就是刚刚进入页面时候的状态
        }

        $.ajax({
            url: select.url,
            data: data,
            dataType: "json",
            type: 'POST',
            success: function(ret) {
                if (ret.code == 1) {
                    // common.tips(ret.msg);
                    if (done) {
                        done(ret);
                    } else {
                        select.refreshOrders(ret.data);   //没有done 默认是刷新订单
                    }
                } else if (ret.code != 0) {
                    if (fail) {
                        fail(ret);
                    } else {
                        // common.tips(ret.msg);  //没有 fail 默认错误信息出来
                    }
                } else {
                    if (done) {
                        done(ret);
                    } else {
                        select.refreshOrders(ret.data);
                    }
                }
            },
            error: function () {
                if (fail) {
                    fail();
                } else {
                    // common.tips("查询失败");
                }
            },
            complete: function () {
                select.hidePullLoading();
                Loading.hide();
                select.pull2load.run();
                if (always) always();
            },
        });

    },
    // 刷新页面上的订单
    refreshOrders: function(result, keep) {

        var jobItemContainer = $(".job-item-container")
        if (!keep) {
            jobItemContainer.empty();
        }

        if (!result || !result.length) {
            return;
        }

        for (var i = 0; i < result.length; i++) {
            var jobItem = $(select.Constants.TEMPLATE);
            select.addOneOrder(result[i], jobItem, jobItemContainer);
        }
    },
    addOneOrder: function (order, jobItem, appendTo) {
        var self = this;

        //var jobItem = $($(".jobitem")[0]).clone();
        var rows = $(".row", jobItem);

        var objOrderType = $(".type", rows[0]); // type, type home, type long
        var objFeeFlag = $(".iconfont", rows[0]); // iconfont icon-kuaiqian, iconfont icon-mian
        var objJobName = $(".name", rows[0]);
        var objDeposit = $(".deposit", rows[0]);
        var objMoney = $(".money", rows[0]);

        var objCreateTime = $(".time", rows[1]);
        var objAddress = $(".address", rows[1]);

        var objWorkTime = $(".work-time", rows[2]);

        var objPublisher = $(".person", rows[3]);
        var objAudit = $(".btn", rows[3]);

        var C = self.Constants;

        objJobName.html(order.itemName);
        objCreateTime.html(order.createDate);
        objAddress.html(order.areaName);
        objWorkTime.html(order.startDate);
        objPublisher.html(order.companyName);
        jobItem.attr("href",
            "/seller3/" + $("#openId").val() + '/jobinfo/index.do?jt=' + order.orderType + '&orderNo=' + order.orderNo);

        if (order.orderType == C.ORDER_TYPE_FULL_TIME) { // 全职
            objOrderType.removeClass(C.CSS_CLASS_HOME)
                .addClass(C.CSS_CLASS_LONG)
                .html("全职");
            objMoney.html(order.money + "<time>元/月</time>");
        } else {
            if (order.orderNo.indexOf(C.PRE_ORDER_NO_HOME) == 0) { // 到家
                objOrderType.removeClass(C.CSS_CLASS_LONG)
                    .addClass(C.CSS_CLASS_HOME)
                    .html("到家");
            } else { // 兼职
                objOrderType.removeClass(C.CSS_CLASS_LONG)
                    .removeClass(C.CSS_CLASS_HOME)
                    .html("兼职");
            }
            objMoney.html(order.money + "<time>元/小时</time>");
        }

        if (order.flagFree == C.FLAG_FEE_QUICK) {
            objFeeFlag.removeClass(C.CSS_CLASS_ICON_FREE)
                .addClass(C.CSS_CLASS_ICON_QUICK);
            objDeposit.show();
        } else {
            objFeeFlag.removeClass(C.CSS_CLASS_ICON_QUICK)
                .addClass(C.CSS_CLASS_ICON_FREE);
            objDeposit.hide();
        }

        if (order.flagAudit == C.FLAG_AUDIT_YES) {
            objAudit.show();
        } else {
            objAudit.hide();
        }

        jobItem.appendTo(appendTo);
    },
    clearFilter: function () {
        $(".select-art-item .current").removeClass("current");
    },
    _getParameterCommon: function (query, fuNotSelected) {
        var container = $(".select-art-item[data-query='" + query + "']");
        var selected = $(".current", container);
        var arrID = [];
        if (selected.length > 0) {
            $.each(selected, function(index, element) {
                arrID.push(encodeURIComponent($(element).attr("data-itemid")));
            });
        } else {
            if (fuNotSelected) {
                fuNotSelected(container, arrID);
            }
        }
        return arrID.join(",");
    },
    getParameterOrderType: function () {
        return $("#orderType").val();
    },
    getParameterAreaId: function () {
        return select._getParameterCommon("areaId");
    },
    getParameterSceneId: function () {
        return select._getParameterCommon("itemId");
    },
    getParameterWorkTime: function () {
        return select._getParameterCommon("flagTime");
    },
    getParameterGuarantee: function () {
        return select._getParameterCommon("guarantee");
    },
    // 获取页码
    getParameterPageNumber: function () {
        var val = $("#pageNum").val();

        if (isNaN(parseInt(val))) {
            return 1;
        }

        var pageNum = parseInt(val);
        if (pageNum < 1) {
            pageNum = 1;
        }

        return pageNum;
    },
    getParameterPageSize: function () {
        return $("#pageSize").val();
    },
    setPageNum: function (pageNum) {
        var $pageNum = $("#pageNum");
        var pn = 1;
        if (pageNum) {
            if (typeof pageNum == "number" && pageNum > 0) {
                pn = pageNum;
            } else if (typeof pageNum == "string") {
                if (!isNaN(parseInt(pageNum)) && parseInt(pageNum) > 0) {
                    pn = parseInt(pageNum);
                }
            }
        }
        $pageNum.val(pn);
    },
    // 工作类型（兼职/全职）切换
    queryByJobType: function (done, fail, always) {
        var data = {
            orderType: select.getParameterOrderType(),  // todo check these shit done
            pageNum: select.getParameterPageNumber(),  // todo check these shit  done
            pageSize: select.getParameterPageSize(),  // todo check these shit  donno what the heck this is
        };

        select.queryOrder(data, done, fail, always);
    },
    // 筛选
    queryByFilters: function (done, fail, always) {
        var orderType = select.getParameterOrderType();
        var data = {
            orderType: orderType,
            areaId: select.getParameterAreaId(),   // todo check if this work done
            itemId: select.getParameterSceneId(),   // todo check done
            guarantee: select.getParameterGuarantee(),  //todo  done
            pageNum: select.getParameterPageNumber(),  //todo    done
            pageSize: select.getParameterPageSize(),   //todo   done
        };
        if (orderType == select.Constants.ORDER_TYPE_PART_TIME) {
            data.flagTime = select.getParameterWorkTime();  //todo check this code
        }

        select.queryOrder(data, done, fail, always);
    },
    // 全部
    queryByAll: function (done, fail, always) {
        var data = {
            orderType: select.getParameterOrderType(),
            pageNum: select.getParameterPageNumber(),
            pageSize: select.getParameterPageSize(),
        };

        select.queryOrder(data, done,fail, always);
    },
    // 招学生
    queryByStudent: function (done, fail, always) {
        var data = {
            orderType: select.getParameterOrderType(),
            flagStudent: 1,
            pageNum: select.getParameterPageNumber(),
            pageSize: select.getParameterPageSize(),
        };

        select.queryOrder(data, done, fail, always);
    },
    // 最适合
    queryByFit: function (done, fail, always) {
        var data = {
            orderType: select.getParameterOrderType(),
            itemId: "0",
            pageNum: select.getParameterPageNumber(),
            pageSize: select.getParameterPageSize(),
        };

        select.queryOrder(data, done, fail, always);
    },
    // 最近
    queryByNear: function (done, fail, always) {
        var data = {
            orderType: select.getParameterOrderType(),
            areaId: "0",
            pageNum: select.getParameterPageNumber(),
            pageSize: select.getParameterPageSize(),
        };

        select.queryOrder(data, done, fail, always);
    },
    queryNextPage: function (done, fail, always) {
        var last = select.lastQueryData; // todo check what data will this get back
        console.log('last is ')
        console.dir(last);
        var data = $.extend({}, last);
        data.pageNum = select.getParameterPageNumber() + 1;
        select.queryOrder(data, function (ret) {
            select.setPageNum(data.pageNum);
            select.refreshOrders(ret.data, true); // todo check if this render functiono work correctly
        }, fail, always);
    },
    // 特别附加
    initPull2Load: function () {
        if ($("#pullloading").length == 0) {
            $("<div id='pullloading' />").before(".job-item-container");
            $(".job-item-container").appendTo("#pullloading");
        }
        select.pull2load = new Pull2Load(function(){
                select.pull2load.pause();
                select.queryNextPage(undefined, undefined, function () {  // todo check if this function works
                    select.pull2load.run();
                });
            }, {
                container: "#pullloading",
                loadbutton: false,
                prerender: 0,
                buttonTemplate: undefined,
            });
    },
    showPullLoading: function () {
        var $div = $("div.pullLoadingText");
        if ($div.length == 0) {
            $div = $("<div class='pullLoadingText' style='text-align: center; padding: 0.5rem 0;'>正在加载...</div>")
                .appendTo(".job-item-container");
        }
        $div.show();
    },
    hidePullLoading: function () {
        $(".pullLoadingText").remove();
    },
};

$(document).ready(function() {
    var orderTypeButtons = $(".header .tab-row .job-type");
    var filterButtons = $(".filter-row .item");
    var url = $(".J_submit").data('url');
    var timeSection = $(".select-art-item[data-query=flagTime]");

    $('.J_initSelect').click(function() {
        select.pull2load.pause();
        select.init();
        $('.select-art').addClass('select-art-current');
    });

    $('.J_eidt').click(function() {
        select.eidtCity();  //修改当前城市
    });


    $('.select-art').on('click', '.city-item', function() {
        var id = $(this).data('cityid'),
            key = $(this).text();
        select.eidtArea(id, key);
    });

    $('.select-art').on('click', '.select-item', function(e) {
        var self = $(this);
        !self.hasClass('current') ? self.addClass('current') : self.removeClass('current');
    });
    // 兼职/全职 切换
    orderTypeButtons.click(function () {
        var $this = $(this);
        //$("#orderType").val($(this).attr("data-value"));
        var orderType = $(this).index() == '0' ? '1' : '0';  // 0 是long  1 是 real time
        $("#orderType").val(orderType);
        select.pull2load.pause();
        if (orderType == select.Constants.ORDER_TYPE_FULL_TIME) {
            timeSection.hide();
         } else {
             timeSection.show();
         }
        //  mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
        select.pull2load.run();
        orderTypeButtons.removeClass("active");
        $this.addClass("active");
        select.clearFilter();
        select.setPageNum();
        filterButtons.removeClass("on-select");
        filterButtons.first().addClass("on-select");
        select.queryByJobType();
        return false;
    });
    // 筛选类型
    filterButtons.click(function () {
        var $this = $(this);
        filterButtons.removeClass("on-select");
        $this.addClass("on-select");

        var type = $this.index();
        select.setPageNum();
        if (type == 0) {
            select.queryByAll();
        } else if (type == 1) {
        } else if (type == 2) {
            select.queryByStudent();
        } else if (type == 3) {
            select.queryByFit();
        } else if (type == 4) {
            select.queryByNear();
        }

        return false;
    });

    // 查询
    $('.J_submit').click(function() {
        select.pull2load.run(); // 因为弹出筛选框时禁用了上拉加载，所以这里需要重新打开上拉加载。
        select.queryByFilters(false, false, function(ret) {
            $('.select-art').removeClass('select-art-current');
        });
    });

    select.url = url;

    select.initPull2Load();   //初始化pulll2load

    select.queryByAll();     //点击进来默认筛选条件就是全部
});
