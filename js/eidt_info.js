/*
* @Author: anchen
* @Date:   2016-11-01 16:44:54
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-02 18:22:29
*/

var form = {
  _CONST: {
    URL: '', //接口地址
    nickName: $('input[name=nickname]'),
    genders: $('.check-gender'),
    realName: $('input[name=name]'),
    idCard: $('input[name="idcard"]'),
    location: $('#J_selectCityTxt'),
    locationPlaceHolder: '请选择省-市-区',
    street: $('#J_selectStreetTxt'),
    streetPlaceHolder: '请选择街道',
    submit: $('.button-con a')
  },
  content: {
    nickName: null,
    gender: null,
    realName: null,
    idCard: null,
    location: null,
    street: null
  },
  getContent: function(){
    this.content.nickName = this._CONST.nickName.val();
    if(this._CONST.genders.hasClass('on-select')){
      this.content.gender = $('.check-gender.on-select').attr('id') === '1' ? '男' : '女';
    }
    this.content.realName = this._CONST.realName.val();
    this.content.idCard = this._CONST.idCard.val();
    if(this._CONST.location.text() !== this._CONST.locationPlaceHolder){
      this.content.location = this._CONST.location.text();
    }
    if(this._CONST.street.text() !== this._CONST.streetPlaceHolder){
      this.content.street = this._CONST.street.text();
    }
  },
  validate: function(){
    var form = this.content;
    if(form.nickName.length < 2 || form.nickName.length > 12){
      return $.dialog({
                  contentHtml : '<p>输入昵称应该为2-12个字符</p>'
              });
    }
    if(!(form.gender)){
      return $.dialog({
                  contentHtml : '<p>请选择性别</p>'
              });
    }
    if(!(/^[\u4e00-\u9fa5]{2,4}$/.test(form.realName))){
      return $.dialog({
                  contentHtml : '<p>请输入正确的名字</p>'
              });
    }
    if(!(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(form.idCard))){
      return $.dialog({
                  contentHtml : '<p>请输入正确的身份证号码</p>'
              });
    }
    if(!(form.location)){
      return $.dialog({
                  contentHtml : '<p>请选择你的位置</p>'
              });
    }
    if(!(form.street)){
      return $.dialog({
                  contentHtml : '<p>请选择街道地址</p>'
              });
    }
    return 'pass';
  },
  sendToServer: function(){
    this._CONST.submit.text('保存中...')
    $.ajax({
          url: this._CONST.URL,
          method: 'POST',
          data: {message: this.content},
          success: function(data){
            if(data.status === 200){
              $.dialog({
                contentHtml : '<p>操作成功</p>'
              });
              this._CONST.submit.text('保存')
            }else{
              $.dialog({
                contentHtml : '<p>操作失败</p>'
              });
              this._CONST.submit.text('保存')
            }
          },
          error: function(){
            $.dialog({
              contentHtml : '<p>网络出错</p>'
            });
            this._CONST.submit.text('保存')
          }
        });
  },
  submitHandler: function(){
    this.getContent();
    var isPassed = this.validate();
    if( isPassed === 'pass'){
      // Send Stuff to server
      this.sendToServer();
    }
  },
  bindEvent: function(){
    this._CONST.submit.on('click', this.submitHandler.bind(this));
    this._CONST.genders.on('click', function(){
      $(this).siblings().removeClass('on-select');
      $(this).addClass('on-select');
    })
  }
}


$(document).ready(function(){
    address.init()
    $('.J_showScroller').click(function (event) {
      address.show('J_scroller1')
    })
    $('.J_street').click(function (event) {
      var tip;
      if (address.selectedVal) {
        debugger;
        address.getStreet(address.selectedVal.area.code)
      } else {
        tip = common.tips('请选择所在地')
      }
    })
    // init the form
    form.bindEvent.call(form);
});
