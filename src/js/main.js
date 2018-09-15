import * as componentsStyle from './componentsStyle';

(function( $ ) {
    $.fn.animatedLabelPlugin = function() {
        
        let form = this;        
        let label = $(form).find('label');
        let input = $(form).find('input');
        
        $(form).css(componentsStyle.formStyle);
        $(label).css(componentsStyle.labelStyle);
        $(input).css(componentsStyle.inputStyle);

        $(input).focusin(function(){
            $(label).css('bottom', '100%');
        })
        
        $(input).focusout(function(){
            if($(label).val() == ''){
                $(label).css('bottom', '0');
            }
        })
    };
})( $ );