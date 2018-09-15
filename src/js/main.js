jQuery = $ = require('jquery');

(function( $ ) {
    $.fn.myPlugin = function() {
        
        let form = this;
        let label = $(form).find('label');
        let input = $(form).find('input');

        $(input).focusin(function(){
            $(label).css('bottom', '100%');
        })
        
        $(input).focusout(function(){
            if($(label).val() == ''){
                $(label).css('bottom', '0');
            }
        })
    };
})( jQuery );