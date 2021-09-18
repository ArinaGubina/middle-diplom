const calc = () => {
    if (document.querySelector('body').getAttribute('class') !== 'balkony') {
        return;
    }
    const calcType = document.getElementById('calc-type'),
        calcTypeMaterial = document.getElementById('calc-type-material'),
        calcInput = document.getElementById('calc-input'),
        calcTotal = document.getElementById('calc-total'),
        calcBlock = document.getElementById('calc');

    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if(target === calcType || target === calcTypeMaterial || target === calcInput) {
            if (calcType.value !== '--' && calcTypeMaterial.value !== '--' && calcInput.value > 0) {
                calcTotal.value = Math.round(+calcType.value * +calcTypeMaterial.value * +calcInput.value * 1000);
            } else {
                calcTotal.value = '';
            }
        }
    });
};

export default calc;