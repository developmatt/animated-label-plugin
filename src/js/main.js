import * as componentsStyle from './componentsStyle';

function init(element) {
    if(!element) return false;
    else if(!element.length) renderAnimatedLabel(element);
    else element.forEach(el => renderAnimatedLabel(el));

    function renderAnimatedLabel(al) {
        const form = al;
        const label = form.querySelector('label');
        const input = form.querySelector('input');

        if(!form || !label || !input) return false;

        Object.assign(form.style, componentsStyle.formStyle);
        Object.assign(label.style, componentsStyle.labelStyle);
        Object.assign(input.style, componentsStyle.inputStyle);

        input.addEventListener('focusin', function() {
            label.style.bottom = '100%';
        });

        input.addEventListener('focusout', function() {
            label.style.bottom = '0';
        });
    }
}

const animatedLabel = init;

export default animatedLabel;