function JobSelect(container, onConfirm){

  /*
  var CTS = {
    container: $(container),
    confirm: CTS.container.find('.J_confirm'),
    cancel: CTS.container.find('.J_cancel'),
    rest: CTS.container.find('.J_reset'),
    category: CTS.container.find('.J_category'),
    SELECT_ALL: "select-all",
    ON_SELECT: 'on-select',
    ITEN_CONTAINERS: '.item-container'
  }
  */

  this.CTS = {
    container: $(container),
    confirm: $(container).find('.tounick-color.finish.r'),
    cancel: $(container).find('.tounick-color.cancel.r'),
    rest: $(container).find('.type-label .fulltime-nav .tounick-color'),
    category: $(container).find('.type-container .mui-scroll-wrapper'),
    SELECT_ALL: "all",
    ON_SELECT: 'curr',
    ITEN_CONTAINERS: '.type-label',
    cached: {
      selectedCat: null,
      selectedItemIndex: null
    }
  }
  this.onConfirm = onConfirm;

  // To save the state and job items selected by the user
  this.currentSelected = [];

  this.injectDOM(read);
  this.bindEvent();
}


JobSelect.prototype = {
  // This method will show the popup window
  // You can add view login and animation here
  show: function(){
    // this.CTS.container.show();
    $('.mask').show();
    // debugger
    // Store chache on first time open the popup
    this.renderChache()
    this.CTS.container.addClass('show')

  },

  hide: function(){
    this.CTS.container.removeClass('show');
    window.setTimeout(function(){
      $('.mask').hide();
    },800)
  },

  // Confirm will first get the selected value to
  // The currentSelected array, then hide the popup
  // Not a pure function
  confirm: function(){
    var allSelected = this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' .' + this.CTS.ON_SELECT);
    this.currentSelected = [];
    // Push selected item to the array
    // Expecel 'ALL' tag
    allSelected.each(function(index, value){
      if(!allSelected.eq(index).hasClass(this.CTS.SELECT_ALL)){
        this.currentSelected.push(allSelected.eq(index).text());
      }
    }.bind(this))
    this.hide();
    this.storeChache();
    // if callback is provided, run the callback
    if(this.onConfirm){
      this.onConfirm.call(this);
    }
  },

  // Function to inject the content to DOM
  // If you want to customise the DOM, edit this
  // I will need the read object to generate DOM for injection
  injectDOM: function(read){
    // First inject content for categories
    this.CTS.category.html(read.readCode());
    // Then inject fontent for the sub items
    var allItem = this.CTS.category.find('a');
    for(var i = 0; i < allItem.length; i++){
      var subCatToRead = allItem.eq(i).data('code');
      var content = read.readSub(subCatToRead);
      var tpl = '<div class="type-label-container lb-' + subCatToRead +'"' + '>';
      $(tpl).html(content).appendTo(this.CTS.container.find('.type-label'))
      // $('.' + container + ' .type-label-container' + 'data-query=' + subCatToRead).html(tpl)
    }

    // Lastly Make the first category default selected
    this.onCategoryClick(this.CTS.category.find('a').eq(0));
  },


  // When category is being clicked
  onCategoryClick: function(itemBeingClicked){
    itemBeingClicked.siblings().removeClass(this.CTS.ON_SELECT);
    itemBeingClicked.addClass(this.CTS.ON_SELECT);
    // Hide all item containers first
    this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' .type-label-container').hide();
    // Show the related one
    this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' .type-label-container').each(function(index, value){
      if($(value).hasClass('lb-' + $(itemBeingClicked).data('code'))){
        $(value).show();
      }
    })
  },

  // Bind event here
  bindEvent: function(){
    var self = this;
    this.CTS.confirm.on('click', this.confirm.bind(this));
    this.CTS.cancel.on('click', this.hide.bind(this));
    // When category is being clicked
    this.CTS.category.find('a').on('click', function(){
      self.onCategoryClick($(this));
    })
    // When item is click
    this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' a').on('click', function(){
      // if ALL is clicked
      if($(this).html() == '全部' && $(this).hasClass('curr')){
        return $(this).removeClass('all').removeClass(self.CTS.ON_SELECT).siblings().removeClass(self.CTS.ON_SELECT);
      }
      if($(this).html() == '全部'){
        return $(this).addClass('all').addClass(self.CTS.ON_SELECT).siblings().addClass(self.CTS.ON_SELECT)
      }
      // Other tags being clicked
      // Todo add a check to goggle ALL is all items are being clicked
      return $(this).toggleClass(self.CTS.ON_SELECT);
    });


    // When reset is click
    this.CTS.rest.on('click', function(){
      $(self.CTS.ITEN_CONTAINERS).find('a').removeClass(self.CTS.ON_SELECT);
    })
  },

  storeChache: function(){
    this.CTS.category.find('a').each(function(index, value){
      if($(value).hasClass(this.CTS.ON_SELECT)){
        this.CTS.cached.selectedCat = index;
      }
    }.bind(this))

    // get item
    this.CTS.cached.selectedItemIndex = [];
    this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' a').each(function(index, value){
      if($(value).hasClass(this.CTS.ON_SELECT)){
        this.CTS.cached.selectedItemIndex.push(index)
      }
    }.bind(this))
  },

  renderChache: function(){
    // click the category
    var jQcategory = this.CTS.category.find('a').eq(this.CTS.cached.selectedCat);
    this.onCategoryClick(jQcategory);

    var allItems = this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' a');
    // make the items active
    if(this.CTS.cached.selectedItemIndex === null){
      return allItems.removeClass(this.CTS.ON_SELECT);
    }
    var allItems = this.CTS.container.find(this.CTS.ITEN_CONTAINERS + ' a');
    allItems.removeClass(this.CTS.ON_SELECT)
    this.CTS.cached.selectedItemIndex.forEach(function(value, index){
      allItems.eq(value).addClass(this.CTS.ON_SELECT);
    }.bind(this))
  }


}



var form = {
  formContent: {
    birth: null,
    isStudent: null,  //true 是学生 false不是
    email: null,
    jobExperience: [] //length 最少是1
  },
  getFormContent: function(){
    this.formContent.birth = $('.tounick-cell #birth').val();
    this.formContent.isStudent = $('.tounick-cell .is-student.on-select').attr('id') == '1' ? true : false;
    this.formContent.email = $('.tounick-cell #email').val();
    var fullTime = $('.tounick-cell.fulltime input').val();
    var partTime = $('.tounick-cell.parttime input').val();
    var atDoor = $('.tounick-cell.at-door input').val();
    this.formContent.jobExperience = [];
    if(fullTime){ this.formContent.jobExperience.push(fullTime); }
    if(partTime){ this.formContent.jobExperience.push(partTime); }
    if(atDoor){ this.formContent.jobExperience.push(atDoor); }
  },
  validateForm: function(){
    if(!(form.formContent.birth)){
      return $.dialog({
                showTitle : false,
                contentHtml : '<p>请输入正确的年龄</p>'
              });
    }
    if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(form.formContent.email))){
      return $.dialog({
                showTitle : false,
                contentHtml : '<p>请输入正确的邮箱</p>'
              });
    }
    if(form.formContent.jobExperience.length == 0){
      return $.dialog({
                showTitle : false,
                contentHtml : '<p>请至少一次工作经验</p>'
              });
    }
    return 'pass';
  },
  sendToServer: function(){
    $.ajax({
      url: 'https://st-portfolio-on.herokuapp.com/message',
      method: 'POST',
      data: {message: form.formContent},
      success: function(data){
        $('.button-container a').html('保存');
        if(data.status === 200){
          $.dialog({
              contentHtml : '<p>操作成功</p>'
          });
        }else{
          $.dialog({
              contentHtml : '<p>操作失败</p>'
          });
        }
      },
      error: function(){
        console.log('fail')
        $('.button-container a').html('保存')
        $.dialog({
            contentHtml : '<p>网络错误</p>'
        });
      }
    });
  },
  bindEvent: function(){
    $('.is-student').on('click', function(){
      $('.is-student').toggleClass('on-select');
    })

    $('.button-container a').on('click', function(e){
      e.preventDefault();
      form.getFormContent.call(form);
      if(form.validateForm() == 'pass'){
        // double confirm and send data via ajax
        console.log('sure to send?')
        console.log(form.formContent);
        $.dialog({
               type : 'confirm',
               onClickOk : function(){
                   form.sendToServer();
                   $('.button-container a').html('保存中...')
                   return true;
               },
               onClickCancel : function(){
                   return true;
               },
               contentHtml : '<p>是否确定提交?</p>'
             });
      }
    })
  }
}

var popUp1, popUp2, popUp3;

function genOnConfirm(indentifier){
  var $input = $(indentifier).find('.cell-content input');
  return function(){
    return $input.val(this.currentSelected.join(','))
  }
}

popUps = {
  init: function(){
    popUp1 = new JobSelect('.edit-fulltime', genOnConfirm('.fulltime'));
    popUp2 = new JobSelect('.edit-parttime', genOnConfirm('.parttime'));
    popUp3 = new JobSelect('.edit-at-door', genOnConfirm('.at-door'));
    $('.tounick-cell.fulltime').on('click', popUp1.show.bind(popUp1));
    $('.tounick-cell.parttime').on('click', popUp2.show.bind(popUp2));
    $('.tounick-cell.at-door').on('click', popUp3.show.bind(popUp3));
  }
}

$(document).ready(function(){
  $('#birth').mdater({
    maxDate : new Date(),
    minDate : new Date(1916, 1, 1)
  });
  popUps.init();
  form.bindEvent();
})
