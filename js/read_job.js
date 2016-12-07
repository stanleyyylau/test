var read = (function(){
  var read;
  var tpl = '';
  var readJob = {
    readCode: function(){
      tpl = '';
      jobData.forEach(function(elem, index){
        if(elem.category.length == 1){
          tpl += '<a href="javascript:;"' + 'data-code="' + elem.code + '">'
              +		  '<p>' + elem.category[0] + '</p>'
              +	  '</a>'
        }else{
          tpl += '<a href="javascript:;"' + 'data-code="' + elem.code + '">'
              +		  '<p>' + elem.category[0] + '<br />'
              +	    elem.category[1] + '</p>'
              +     '</a>'
        }
      });
      // $('.mui-scroll-wrapper').html(tpl);
      return tpl;
    },
    readSub: function(code){
      tpl = '';
      var category = {};
      for(var i = 0; i < jobData.length; i++){
        if(jobData[i].code == code){
          category = jobData[i];
          break;
        }
      }
      tpl = '<a href="javascript:;">全部</a>';
      category.subCategory.forEach(function(elem, index){
        tpl += '<a href="javascript:;">' + elem + '</a>'
      })
      // $('.type-label-container').html(tpl);
      return tpl;
    }
  }
  return {
    readCode: readJob.readCode,
    readSub: readJob.readSub
  }
})()
