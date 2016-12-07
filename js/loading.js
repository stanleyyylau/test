(function ($, window, undefined) {
    var id = "__tounick_loading";

    var $obj, mask;

    mask = {
      html: $('<div class="mui-backdrop" style="opacity:1;position: fixed;z-index: 1;top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,.4);"></div>'),
      show: function(){
        this.html.appendTo('body');
      },
      close: function(){
        this.html.remove();
      }
    }

    var init = function () {
        $obj = $("#" + id);
        if ($obj.length == 0) {
            $obj = $("<div id='" + id + "' style='display: none; position: fixed; bottom: 0; right: 0; z-index: 999; left: 0; top: 0; line-height: 100%; text-align: center; color: #fff; padding-top: 8rem;'>正在加载...</div>").appendTo("body");
        }

        // mask.show();

    };

    window.Loading = {
        show: function () {
            init();
            mask.show();
            $obj.show();
        },
        hide: function () {
            $("#" + id).hide();
            if (mask) {
                mask.close();
            }
        },
    };
})(Zepto, window);
